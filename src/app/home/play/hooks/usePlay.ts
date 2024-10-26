import { useEffect, useRef, useState } from "react";
import { getRandomWord } from "../usecase/processGetRandomWord";
import { words } from "@/domain/words";

const usePlay = () => {
  const [randomWord, setRandomWord] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [typeCount, setTypeCount] = useState<number>(0);
  const [correctTypeCount, setCorrectTypeCount] = useState<number>(0);
  const [incorrectTypeCount, setIncorrectTypeCount] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const word = getRandomWord();
    setRandomWord(word);
    inputRef.current?.focus();

    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        inputRef.current?.focus();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const correctWord = words[randomWord];
      const inputValue = e.target.value;

      if (inputValue === correctWord) {
        setTypeCount(typeCount => typeCount+1);
        setCorrectTypeCount(correctTypeCount => correctTypeCount+1);
        setScore(score => score+1);
        setValue("");
        const nextWord = getRandomWord();
        setRandomWord(nextWord);
      } else {
        setTypeCount(typeCount => typeCount+1);
        let correctValue = "";
        const valueLength = inputValue.length;

        if (valueLength>0 && valueLength <= correctWord.length) {
          const currentChar = correctWord[valueLength-1];
          if (inputValue[valueLength-1] === currentChar) {
            setCorrectTypeCount(correctTypeCount => correctTypeCount+1);
            correctValue = inputValue;
          } else {
            correctValue = inputValue.slice(0, -1);
            setIncorrectTypeCount(incorrectTypeCount => incorrectTypeCount+1);
          };
        };

        setValue(correctValue);
      };
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
    }
  };

  const accuracyRate = typeCount>0 ? (correctTypeCount/typeCount*100) : 0;
  
  return {
    randomWord,
    value,
    score,
    accuracyRate,
    inputRef,
    handleInputChange,
    handleKeyDown,
  };
};

export default usePlay;