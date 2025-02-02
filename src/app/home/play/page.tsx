"use client";
import { useState, useRef, useEffect } from "react";

// 型定義
interface Word {
  id: number;
  japanese: string;
  variations: string[];
}

// お題リスト
const words: Word[] = [
  { id: 1, japanese: "みかん", variations: ["mikan"] },
  { id: 2, japanese: "りんご", variations: ["ringo", "rinngo"] },
  { id: 3, japanese: "いちご", variations: ["ichigo", "itigo"] },
  { id: 4, japanese: "パイナップル", variations: ["painappuru", "painaltupuru"] },
  { id: 5, japanese: "オレンジ", variations: ["orenji", "orennji", "orenzi", "orennzi"] },
  { id: 6, japanese: "グレープフルーツ", variations: ["gure-puhuru-tsu", "gure-pufuru-tsu", "gure-puhuru-tu", "gure-pufuru-tu"] },
  { id: 7, japanese: "さくらんぼ", variations: ["sakuranbo", "sakurannbo", "saquranbo", "saqurannbo"] },
  { id: 8, japanese: "フルーツ全種類盛り合わせ", variations: ["huru-tsuzennsyuruimoriawase", "huru-tuzennsyuruimoriawase", "huru-tsuzensyuruimoriawase", "huru-tsuzennsilyuruimoriawase", "huru-tuzennsilyuruimoriawase", "huru-tuzensilyuruimoriawase", "furu-tsuzennsyuruimoriawase", "furu-tuzennsyuruimoriawase", "furu-tsuzensyuruimoriawase", "furu-tsuzennsilyuruimoriawase", "furu-tsuzensilyuruimoriawase","furu-tuzensyuruimoriawase", "huru-tuzensyuruimoriawase"] },
];

// ランダムなお題を取得する関数
const getRandomWord = (excludeId: number): Word => {
  const availableWords = words.filter((word) => word.id !== excludeId);
  return availableWords[Math.floor(Math.random() * availableWords.length)];
};

export default function Home() {
  const [status, setStatus] = useState("ready");
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [input, setInput] = useState("");
  const [currentVariation, setCurrentVariation] = useState("");
  const [totalKeystrokes, setTotalKeystrokes] = useState(0);
  const [correctKeystrokes, setCorrectKeystrokes] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [countdown, setCountdown] = useState(3);
  const inputRef = useRef<HTMLInputElement>(null);

  // 最初の3秒カウントダウン
  const countdownTimer = (remaining: number) => {
    if (remaining > 0) {
      setCountdown(remaining);
      setTimeout(() => countdownTimer(remaining - 1), 1000);
    } else {
      setStatus("start");
      setTimeLeft(10);
      const newWord = getRandomWord(-1);
      setCurrentWord(newWord);
      setCurrentVariation(newWord.variations[0]);
      inputRef.current?.focus();
    }
  };

  // ゲーム開始時の処理
  useEffect(() => {
    if (status === "ready") {
      countdownTimer(countdown);
    }
  }, [status, countdown]);

  // 制限時間のカウントダウン
  const startGameTimer = (remaining: number) => {
    if (remaining > 0) {
      setTimeLeft(remaining);
      setTimeout(() => startGameTimer(remaining - 1), 1000);
    } else {
      setStatus("finish");
    }
  };

  useEffect(() => {
    if (status === "start" && timeLeft > 0) {
      startGameTimer(timeLeft);
    }
  }, [status, timeLeft]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (status !== "start") return;

    let newInput = e.target.value.replace(/[^\x00-\x7F]/g, "");
    setTotalKeystrokes((prev) => prev + 1);

    const nextChar = newInput.charAt(input.length);
    if (nextChar && nextChar !== currentVariation[input.length]) {
      const matchingVariation = currentWord?.variations.find((variation) =>
        variation.startsWith(newInput)
      );
      if (matchingVariation && matchingVariation !== currentVariation) {
        setCurrentVariation(matchingVariation);
      } else {
        return;
      }
    }

    setCorrectKeystrokes((prev) => prev + 1);
    setInput(newInput);

    if (currentWord && currentWord.variations.includes(newInput)) {
      const accuracyRate = totalKeystrokes > 0 ? (correctKeystrokes / totalKeystrokes) * 100 : 0;
      const accuracyBonus = accuracyRate / 50;
      setScore((prev) => Math.floor(prev + currentWord.japanese.length * accuracyBonus));

      const newWord = getRandomWord(currentWord.id);
      setCurrentWord(newWord);
      setInput("");
      setCurrentVariation(newWord.variations[0]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
    }
  };

  const accuracy = totalKeystrokes > 0 ? Math.round((correctKeystrokes / totalKeystrokes) * 100) : 0;

  if (status === "ready") {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>ゲーム開始まで: {countdown}秒</h1>
      </div>
    );
  }

  if (status === "finish") {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>ゲーム終了</h1>
        <p>スコア: {score}</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} onClick={() => inputRef.current?.focus()}>
      <h1>タイピングゲーム</h1>
      <h2>{currentWord?.japanese}</h2>
      <h3>{currentVariation}</h3>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={() => inputRef.current?.focus()}
        autoFocus
      />
      <p>正確率: {accuracy}%</p>
      <p>スコア: {score}</p>
      <p>残り時間: {timeLeft}秒</p>
    </div>
  );
}
