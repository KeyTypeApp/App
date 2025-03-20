"use client";

import { useConfContext } from "@/context/confContext";
import useGetScores from "@/hooks/scoreboard/useGetScores";

const ScoreAverageComponent = () => {
  const { scoresUrl } = useConfContext();
  const scores = useGetScores(scoresUrl);

  const playCount = scores.length;

  const calculateAverageScore = () => {
    if (playCount === 0) return null;
    const totalScore = scores.reduce((sum, score) => sum + score.score, 0);
    return Math.round(totalScore / scores.length);
  };

  const averageScore = calculateAverageScore();

  if (playCount !== 0) {
    return (
      <div className="flex justify-center space-x-8">
        <div>
          <p className="text-lg font-semibold text-gray-700">プレイ回数</p>
          <p className="text-xl font-bold text-blue-600">{playCount}回</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-700">平均スコア</p>
          <p className="text-xl font-bold text-blue-600">{averageScore}点</p>
        </div>
      </div>
    )
  }

  return (
    <p className="text-center text-gray-500 text-lg font-semibold">
      スコアがありません！
    </p>
  );
}

export default ScoreAverageComponent;