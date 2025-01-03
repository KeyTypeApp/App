"use client";

import { useState } from "react";
import MenuButtonComponent from "@/components/MenuButton";
import ScoreListComponent from "./ScoreList";
import ScoreAverageComponent from "./ScoreAverage";

interface ScoreBoardPageProps {
  scores_url: string | undefined;
}

const ScoreBoardPageComponent = ({ scores_url }: ScoreBoardPageProps) => {
  const [viewMode, setViewMode] = useState<'list' | 'average'>('list');

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6 text-gray-900">
        スコア一覧
      </h1>
      <div className="flex justify-center space-x-6 mb-6">
        <button
          onClick={() => setViewMode('list')}
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          スコア一覧
        </button>
        <button
          onClick={() => setViewMode('average')}
          className={`px-4 py-2 rounded-md font-medium ${viewMode === 'average' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          スコア平均
        </button>
      </div>
      <div className="p-6 max-w-3xl mx-auto bg-gray-50 rounded-md shadow-md">
        {viewMode === 'list' ? <ScoreListComponent scores_url={scores_url} /> : <ScoreAverageComponent scores_url={scores_url} />}
      </div>
      <MenuButtonComponent />
    </div>
  );
};

export default ScoreBoardPageComponent;