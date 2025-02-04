import words from "../../domain/words";

export function getRandomWord(excludeId?: number) {
  const availableWords = words.filter((word) => word.id !== excludeId);
  return availableWords[Math.floor(Math.random() * availableWords.length)];
}
