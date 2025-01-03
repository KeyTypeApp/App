"use client";

import useGetScores from "@/hooks/scoreboard/useGetScores";

interface ScoreAverageProps {
  scores_url: string | undefined;
}

const ScoreAverageComponent = ({ scores_url }: ScoreAverageProps) => {
  const scores = useGetScores(scores_url);

  const calculateAverageScore = () => {
    if (scores.length === 0) return 0;
    const totalScore = scores.reduce((sum, score) => sum + score.score, 0);
    return totalScore / scores.length;
  };

  const averageScore = calculateAverageScore();

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900">スコア平均</h2>
      <p className="text-xl font-medium text-blue-600">{averageScore.toFixed(2)}点</p>
    </div>
  );
};

export default ScoreAverageComponent;