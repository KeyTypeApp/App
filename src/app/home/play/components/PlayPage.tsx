"use client";

import usePlay from "@/hooks/play/usePlay";
import DisplayRandomWordComponent from "./DisplayRandomWord";
import DisplayScoreComponent from "./DisplayScore";
import InputFieldComponent from "./InputField";
import { words } from "@/domain/words";
import DisplayResultComponent from "./DisplayResult";

const PlayPageComponent = () => {
  const {
    countDown,
    timeLimit,
    isFinish,
    randomWord,
    value,
    score,
    correctTypeCount,
    incorrectTypeCount,
    accuracyRate,
    inputRef,
    handleInputChange,
    handleKeyDown,
  } = usePlay();
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-50 p-4 space-y-6">
      {isFinish? (
        <DisplayResultComponent
          score={score}
          correctTypeCount={correctTypeCount}
          incorrectTypeCount={incorrectTypeCount}
          accuracyRate={accuracyRate}
        />
      ) : countDown>0? (
        <p className="text-5xl font-bold text-gray-900">
          {countDown}
        </p>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-2xl font-semibold text-gray-900">
            残り時間:{timeLimit}秒
          </p>
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
      )}
    </div>
  );
};

export default PlayPageComponent;