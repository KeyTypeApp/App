"use client";

import useGetScores from "@/hooks/scoreboard/useGetScores";

interface ScoreListProps {
  scores_url: string | undefined;
}

const ScoreListComponent = ({
  scores_url
}: ScoreListProps) => {
  const scores = useGetScores(scores_url);
  return (
    <div>
    {scores.length > 0 ? (
      <ul className="space-y-4">
        {scores.map((score, index) => (
          <li key={index} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold text-gray-900">
                スコア:
                <span className="text-blue-600">
                  {score.score}点
                </span>
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-gray-500 text-sm">
                  正タイプ数
                </p>
                <p className="text-xl font-bold text-gray-900">
                  {score.correctTypeCount}回
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                  誤タイプ数
                </p>
                <p className="text-xl font-bold text-gray-900">
                  {score.incorrectTypeCount}回
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                  正確率
                </p>
                <p className="text-xl font-bold text-gray-900">
                  {score.accuracyRate}%
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-center text-gray-500 text-lg font-semibold">
        スコアがありません！
      </p>
    )}
  </div>
  );
};

export default ScoreListComponent;