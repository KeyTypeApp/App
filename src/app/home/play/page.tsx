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
  フルーツ全種類盛り合わせ: "huru-tsuzennsyuruimoriawase",
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
    e: React.ChangeEvent<HTMLInputElement>) => {
      const correctWord = words[randomWord];
      const inputValue = e.target.value;

      if (inputValue === correctWord) {
        setTypeCount(TypeCount => TypeCount+1);
        setCorrectTypeCount(correctTypeCount => correctTypeCount+1);
        setScore(score => score+1);
        setValue("");
        const nextWord = getRandomWord();
        setRandomWord(nextWord);
      } else {
        setTypeCount(TypeCount => TypeCount+1);
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

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-50 p-4 space-y-6">
      <p className="text-5xl font-extrabold text-indigo-600 tracking-widest">
        {randomWord}
      </p>
      <div className="text-3xl tracking-wide bg-white shadow-lg px-6 py-4 rounded-lg flex justify-center">
        {randomWord && words[randomWord] && words[randomWord].split("").map((char, index) => (
          <span
            key={index}
            className={index<value.length && value[index]===char?"text-indigo-600" : "text-gray-300"}
          >
            {char}
          </span>
        ))}
      </div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="bg-transparent border-none outline-none w-0 h-0"
        aria-hidden="true"
      />
      <div className="flex space-x-4">
        <p className="bg-green-100 text-green-600 text-lg font-semibold px-4 py-2 rounded-full shadow-md">
          スコア:{score}
        </p>
        <p className="bg-blue-100 text-blue-600 text-lg font-semibold px-4 py-2 rounded-full shadow-md">
          正確率:{accuracyRate.toFixed(1)}%
        </p>
      </div>
    </div>
  );
};