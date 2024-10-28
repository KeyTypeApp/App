"use client";

import usePlay from "@/hooks/play/usePlay";
import DisplayRandomWordComponent from "./DisplayRandomWord";
import DisplayScoreComponent from "./DisplayScore";
import InputFieldComponent from "./InputField";
import { words } from "@/domain/words";

const PlayPageComponent = () => {
  const {
    randomWord,
    value,
    score,
    accuracyRate,
    inputRef,
    handleInputChange,
    handleKeyDown,
  } = usePlay();
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-50 p-4 space-y-6">
      <DisplayRandomWordComponent
        randomWord={randomWord}
        value={value}
        words={words}
      />
      <InputFieldComponent
        value={value}
        onChangeValue={handleInputChange}
        onKeyDownBackSpace={handleKeyDown}
        ref={inputRef}
      />
      <DisplayScoreComponent
        score={score}
        accuracyRate={accuracyRate}
      />
    </div>
  );
};

export default PlayPageComponent;