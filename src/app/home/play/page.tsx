"use client";

import React, { useEffect, useRef, useState } from "react";

interface WordsProps {
  [key: string]: string;
};

const words: WordsProps = {
  りんご: "ringo",
  みかん: "mikan",
  ばなな: "banana",
  ぶどう: "budou",
};

const getRandomWord = () => {
  const wordsKeys = Object.keys(words);
  const randomIndex = Math.floor(Math.random() * wordsKeys.length);
  return wordsKeys[randomIndex];
};


export default function Play() {
  const [randomWord, setRandomWord] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [missTypeCount, setMissTypeCount] = useState<number>(0);
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
    e: React.ChangeEvent<HTMLInputElement>) => {
      const correctWord = words[randomWord];
      const inputValue = e.target.value;

      if (inputValue === correctWord) {
        setScore(score => score+1);
        setValue("");
        const nextWord = getRandomWord();
        setRandomWord(nextWord);
      } else {
        let correctValue = "";
        const valueLength = inputValue.length;

        if (valueLength>0 && valueLength <= correctWord.length) {
          const currentChar = correctWord[valueLength-1];
          if (inputValue[valueLength-1] === currentChar) {
            correctValue = inputValue;
          } else {
            correctValue = inputValue.slice(0, -1);
            setMissTypeCount(missTypeCount => missTypeCount+1);
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

  return (
    <div>
      <p>{randomWord}</p>
      <p>{words[randomWord]}</p>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <p>スコア:{score}</p>
      <p>ミスタイプ:{missTypeCount}</p>
    </div>
  );
};