import { words } from "@/domain/words";

export const getRandomWord = () => {
  const wordsKeys = Object.keys(words);
  const randomIndex = Math.floor(Math.random() * wordsKeys.length);
  return wordsKeys[randomIndex];
};