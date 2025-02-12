"use client";

import { usePlay } from "@/hooks/play/usePlay";
import DisplayCountDownComponent from "./DisplayCountDown";
import DisplayResultComponent from "./DisplayResult";
import DisplayTimeLimitComponent from "./DisplayTimeLimit";
import DisplayRandomWordComponent from "./DisplayRandomWord";
import InputFieldComponent from "./InputField";
import DisplayScoreComponent from "./DisplayScore";

const PlayPageComponent = () => {
  const {
    status,
    countdown,
    timeLeft,
    currentWord,
    currentVariation,
    input,
    score,
    correctTypeCount,
    incorrectTypeCount,
    accuracyRate,
    inputRef,
    handleInputChange,
    handleKeyDown,
  } = usePlay();
  
  if (status === "ready") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-50 p-4 space-y-6">
        <DisplayCountDownComponent
          countdown={countdown}
        />
      </div>
    );
  }

  if (status === "finish") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-50 p-4 space-y-6">
        <DisplayResultComponent
          score={score}
          correctTypeCount={correctTypeCount}
          incorrectTypeCount={incorrectTypeCount}
          accuracyRate={accuracyRate}
        />
      </div>
    );
  }
 
  return (
    <div
      onClick={(e) => e.preventDefault()}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-50 p-4 space-y-6"
    >
      <div className="flex flex-col items-center space-y-4">
        <DisplayTimeLimitComponent
          timeLeft={timeLeft}
        />
        <DisplayRandomWordComponent
          japanese={currentWord?.japanese ?? ""}
          variation={currentVariation}
          input={input}
        />
        <InputFieldComponent
          input={input}
          handleChange={handleInputChange}
          handleKeyDown={handleKeyDown}
          inputRef={inputRef}
        />
        <DisplayScoreComponent
          score={score}
          accuracyRate={accuracyRate}
        />
      </div>
    </div>
  );
}

export default PlayPageComponent;