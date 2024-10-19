"use client";

import { useEffect, useState } from "react";

const words = {
  りんご: "ringo",
  みかん: "mikan",
  ばなな: "banana",
  ぶどう: "budou",
};

const SelectRandomWord = () => {
  const wordsKeys = Object.keys(words);
  const randomIndex = Math.floor(Math.random() * wordsKeys.length);
  return wordsKeys[randomIndex];
};


export default function Play() {
  const [randomWord, setRandomWord] = useState<string>("");

  useEffect(() => {
    const word = SelectRandomWord();
    setRandomWord(word);  
  }, []);

  return (
    <div>
      <p>{randomWord}</p>
      <p>{words[randomWord]}</p>
    </div>
  );
};
