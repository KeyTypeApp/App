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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const word = getRandomWord();
    setRandomWord(word);
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      if (inputValue === words[randomWord]) {
        setScore(score => score+1);
        setValue("");
        const nextWord = getRandomWord();
        setRandomWord(nextWord);
      } else {
        let correctValue = "";
        const valueLength = inputValue.length;

        if (valueLength>0 && valueLength <= words[randomWord].length) {
          const currentChar = words[randomWord][valueLength-1];
          if (inputValue[valueLength-1] === currentChar) {
            correctValue = inputValue;
          } else {
            correctValue = inputValue.slice(0, -1);
          };
        };

        setValue(correctValue);
      };
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
      />
      <p>{score}</p>
    </div>
  );
};