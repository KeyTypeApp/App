import { Word } from "@/shared/types/words";
import words from "../../domain/words";

export function getRandomWord(excludeId?: number): Word {
  const availableWords = words.filter((word) => word.id !== excludeId);
  return availableWords[Math.floor(Math.random() * availableWords.length)];
}
