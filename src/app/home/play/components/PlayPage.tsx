"use client";

import { useState } from "react";
import DisplayCountDown from "./DisplayCountDown";
import DisplayTimeLimit from "./DisplayTimeLimit";
import DisplayRandomWord from "./DisplayRandomWord";
import InputField from "./InputField";
import DisplayScore from "./DisplayScore";
import DisplayResult from "./DisplayResult";
import { useGameLogic } from "@/hooks/play/useGameLogic";

export default function PlayPage() {
  const { status, countdown, timeLeft, currentWord, currentVariation, input, score, accuracy, handleInputChange, handleKeyDown, inputRef } = useGameLogic();
  
  if (status === "ready") return <DisplayCountDown countdown={countdown} />;
  if (status === "finish") return <DisplayResult score={score} accuracy={accuracy} />;
  
  return (
    <div onClick={(e) => e.preventDefault()}> {/* クリックイベントをキャンセル */}
      <h1>タイピングゲーム</h1>
      <DisplayTimeLimit timeLeft={timeLeft} />
      <DisplayRandomWord japanese={currentWord?.japanese} variation={currentVariation} />
      <InputField input={input} handleChange={handleInputChange} handleKeyDown={handleKeyDown} inputRef={inputRef} />
      <DisplayScore score={score} accuracy={accuracy} />
    </div>
  );
}
