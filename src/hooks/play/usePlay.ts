import { useEffect, useRef, useState } from "react";
import { getRandomWord } from "@/usecase/play/processGetRandomWord";
import { words } from "@/domain/words";
import { saveScore } from "@/usecase/play/processSaveScore";

const usePlay = () => {
  const [countDown, setCountDown] = useState<number>(3);
  const [timeLimit, setTimeLimit] = useState<number>(60);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [randomWord, setRandomWord] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [typeCount, setTypeCount] = useState<number>(0);
  const [correctTypeCount, setCorrectTypeCount] = useState<number>(0);
  const [incorrectTypeCount, setIncorrectTypeCount] = useState<number>(0);
  const [incorrectChars, setIncorrectChars] = useState<{ [key: string]: number }>({});
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (countDown > 0) {
      const timer = setInterval(() => setCountDown(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (countDown === 0) {
      startGame();
    }
  }, [countDown]);

  const startGame = () => {
    setIsFinish(false);
    setTimeLimit(60);
    setRandomWord(getRandomWord());
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (timeLimit > 0) {
      const timer = setInterval(() => setTimeLimit(timeLimit - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setIsFinish(true);
    }
  }, [timeLimit]);

  useEffect(() => {
    if (isFinish) {
      const fetchUser = async () => {
        try {
          const response = await fetch("/api/getCookie");
          const data = await response.json();
          const uuid = data.user.uuid;
          console.log(uuid);
          saveScore({
            uuid,
            score,
            correctTypeCount,
            incorrectTypeCount,
            accuracyRate,
            incorrectChars,
          });
        } catch (error) {
          console.error("取得失敗", error);
        }
      };
      fetchUser();
    }
  }, [isFinish]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isFinish) return;
    const correctWord = words[randomWord];
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/[Ａ-Ｚａ-ｚ０-９！-～]/g, (match) =>
      String.fromCharCode(match.charCodeAt(0) - 0xFEE0)
    );

    if (inputValue === correctWord) {
      setTypeCount((typeCount) => typeCount + 1);
      setCorrectTypeCount((correctTypeCount) => correctTypeCount + 1);

      const accuracyRate = (correctTypeCount / typeCount) * 100;
      const accuracyBonus = accuracyRate / 50;
      const newScore = Math.floor(score + correctWord.length * accuracyBonus);
      setScore(newScore);

      setValue("");
      const nextWord = getRandomWord();
      setRandomWord(nextWord);
    } else {
      setTypeCount((typeCount) => typeCount + 1);
      let correctValue = "";
      const valueLength = inputValue.length;

      if (valueLength > 0 && valueLength <= correctWord.length) {
        const currentChar = correctWord[valueLength - 1];
        if (inputValue[valueLength - 1] === currentChar) {
          setCorrectTypeCount((correctTypeCount) => correctTypeCount + 1);
          correctValue = inputValue;
        } else {
          correctValue = inputValue.slice(0, -1);
          setIncorrectTypeCount((incorrectTypeCount) => incorrectTypeCount + 1);
          setIncorrectChars((prev) => {
            const updated = { ...prev };
            updated[inputValue[valueLength - 1]] = (updated[inputValue[valueLength - 1]] || 0) + 1;
            return updated;
          });
        }
      }

      setValue(correctValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
    }
  };

  const accuracyRate = typeCount > 0 ? Math.round((correctTypeCount / typeCount) * 100) : 0;

  return {
    countDown,
    timeLimit,
    isFinish,
    randomWord,
    value,
    score,
    correctTypeCount,
    incorrectTypeCount,
    accuracyRate,
    incorrectChars,
    inputRef,
    handleInputChange,
    handleKeyDown,
  };
};

export default usePlay;
