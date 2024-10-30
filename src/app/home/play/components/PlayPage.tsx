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
    timeLimit,
    isFinish,
    inputRef,
    handleInputChange,
    handleKeyDown,
  } = usePlay();
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-50 p-4 space-y-6">
      <p className="text-2xl font-semibold text-gray-700">
        残り時間:{timeLimit}秒
      </p>
      {isFinish ? (
        <div className="text-center">
          <p className="text-3xl font-bold text-red-500 mb-4">
            タイムアップ
          </p>
          <p className="text-xl">
            スコア:{score}
          </p>
          <p className="text-xl">
            正確率:{accuracyRate.toFixed(1)}%
          </p>
        </div>
      ) : (
        <div>
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