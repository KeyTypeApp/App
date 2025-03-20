"use client";

import { useState } from "react";
import MenuButtonComponent from "@/components/MenuButton";
import ScoreListComponent from "./ScoreList";
import ScoreAverageComponent from "./ScoreAverage";

const ScoreBoardPageComponent = () => {
  const [viewMode, setViewMode] = useState<'list' | 'average'>('list');
  const handleClickList = () => {
    setViewMode('list');
  };
  const handleClickAverage = () => {
    setViewMode('average');
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6 text-gray-900">
        スコア一覧
      </h1>
      <div className="flex justify-center space-x-6 mb-6">
        <button
          onClick={handleClickList}
          className={`px-4 py-2 rounded-md font-bold ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'}`}
        >
          スコア一覧
        </button>
        <button
          onClick={handleClickAverage}
          className={`px-4 py-2 rounded-md font-bold ${viewMode === 'average' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'}`}
        >
          スコア平均
        </button>
      </div>
      <div className="p-6 max-w-3xl mx-auto bg-gray-50 rounded-md shadow-md">
        {viewMode === 'list' ? <ScoreListComponent /> : <ScoreAverageComponent />}
      </div>
      <MenuButtonComponent />
    </div>
  );
}

export default ScoreBoardPageComponent;