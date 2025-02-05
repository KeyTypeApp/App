import { useState, useEffect, useRef } from "react";
import { getRandomWord } from "@/usecase/play/processGetRandomWord";
import { Word } from "@/shared/types/words";
import { saveScore } from "@/usecase/play/processSaveScore";

export const usePlay = () => {
  const [status, setStatus] = useState("ready");
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [input, setInput] = useState("");
  const [currentVariation, setCurrentVariation] = useState("");
  const [totalTypeCount, setTotalTypeCount] = useState(0);
  const [correctTypeCount, setCorrectTypeCount] = useState(0);
  const [incorrectTypeCount, setIncorrectTypeCount] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [countdown, setCountdown] = useState(3);
  const [accuracyRate, setAccuracy] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState<{ [key: string]: number }>({});
  const inputRef = useRef<HTMLInputElement>(null);

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
    if (totalTypeCount > 0) {
      const accuracyRate = Math.round((correctTypeCount / totalTypeCount) * 100);
      setAccuracy(accuracyRate);
    }
  }, [totalTypeCount, correctTypeCount]);

  useEffect(() => {
    if (status === "start" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [status]);

  useEffect(() => {
    if (status === "finish") {
      fetchUserUUID();
    }
  }, [status]);

  const fetchUserUUID = async () => {
    try {
      const res = await fetch("/api/getCookie", { method: "GET" });
      const data = await res.json();

      if (!data.user?.uuid) return;

      await saveScore({
        uuid: data.user.uuid,
        score,
        correctTypeCount,
        incorrectTypeCount,
        accuracyRate,
        incorrectChars
      });
    } catch (error) {
      console.error("Error fetching UUID:", error);
    }
  };

  const countdownTimer = (remaining: number) => {
    if (remaining > 0) {
      setCountdown(remaining);
      setTimeout(() => countdownTimer(remaining - 1), 1000);
    } else {
      setStatus("start");
      setTimeLeft(30);
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
  
    const nextChar = newInput.charAt(input.length);
  
    const matchingVariation = currentWord?.variations.find((variation: string) =>
      variation.startsWith(newInput)
    );
  
    if (!matchingVariation) {
      setTotalTypeCount((prev) => prev + 1);
      setIncorrectTypeCount((prev) => prev + 1);
      setIncorrectChars((prev) => ({ ...prev, [nextChar]: (prev[nextChar] || 0) + 1 }))
      return;
    }
  
    if (matchingVariation !== currentVariation) {
      setCurrentVariation(matchingVariation);
      setInput(newInput);
      return;
    }
  
    setTotalTypeCount((prev) => prev + 1);
  
    if (nextChar === currentVariation[input.length]) {
      setCorrectTypeCount((prev) => prev + 1);
    }
  
    setInput(newInput);
  
    if (currentWord && currentWord.variations.includes(newInput)) {
      const accuracyRate = totalTypeCount > 0 ? (correctTypeCount / totalTypeCount) * 100 : 0;
      const accuracyBonus = accuracyRate / 50;
      setScore((prev) => Math.floor(prev + currentWord.japanese.length * accuracyBonus));
  
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
    correctTypeCount,
    incorrectTypeCount,
    accuracyRate,
    incorrectChars,
    handleInputChange,
    handleKeyDown,
    inputRef,
    totalTypeCount
  };
}