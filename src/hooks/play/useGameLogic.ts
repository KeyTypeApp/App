import { useState, useEffect, useRef } from "react";
import { getRandomWord } from "@/usecase/play/processWord";

export const useGameLogic = () => {
  const [status, setStatus] = useState("ready");
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [input, setInput] = useState("");
  const [currentVariation, setCurrentVariation] = useState("");
  const [totalKeystrokes, setTotalKeystrokes] = useState(0);
  const [correctKeystrokes, setCorrectKeystrokes] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [countdown, setCountdown] = useState(3);
  const [accuracy, setAccuracy] = useState(0); // accuracyをuseStateで管理
  const inputRef = useRef<HTMLInputElement>(null); // inputRefをuseRefで作成

  useEffect(() => {
    if (status === "ready") {
      countdownTimer(countdown);
    }
  }, [status, countdown]);

  useEffect(() => {
    if (status === "start" && timeLeft > 0) {
      startGameTimer(timeLeft);
    }
  }, [status, timeLeft]);

  useEffect(() => {
    if (totalKeystrokes > 0) {
      const accuracy = totalKeystrokes > 0 ? Math.round((correctKeystrokes / totalKeystrokes) * 100) : 0;
      setAccuracy(accuracy); // accuracyを更新
    }
  }, [totalKeystrokes, correctKeystrokes]); // totalKeystrokes または correctKeystrokes が更新されたらaccuracyを再計算

  useEffect(() => {
    // 新しい単語が始まるときにフォーカスを設定
    if (status === "start" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [status]);

  const countdownTimer = (remaining: number) => {
    if (remaining > 0) {
      setCountdown(remaining);
      setTimeout(() => countdownTimer(remaining - 1), 1000);
    } else {
      setStatus("start");
      setTimeLeft(10);
      startNewWord();
    }
  };

  const startGameTimer = (remaining: number) => {
    if (remaining > 0) {
      setTimeLeft(remaining);
      setTimeout(() => startGameTimer(remaining - 1), 1000);
    } else {
      setStatus("finish");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const accuracyRate =
        totalKeystrokes > 0 ? (correctKeystrokes / totalKeystrokes) * 100 : 0;
      const accuracyBonus = accuracyRate / 50;
      setScore((prev) =>
        Math.floor(prev + currentWord.japanese.length * accuracyBonus)
      );

      startNewWord();
    }
  };

  const startNewWord = () => {
    const newWord = getRandomWord(currentWord?.id);
    setCurrentWord(newWord);
    setInput("");
    setCurrentVariation(newWord.variations[0]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
    }
  };

  return {
    status,
    countdown,
    timeLeft,
    currentWord,
    currentVariation,
    input,
    score,
    accuracy, // accuracyを返す
    handleInputChange,
    handleKeyDown,
    inputRef, // inputRefを返す
  };
};
