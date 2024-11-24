"use client";

import useGetHighestScores from "@/hooks/ranking/useGetHightestScores";

interface RankingPageProps {
  users_url: string | undefined;
  scores_url: string | undefined;
}

const RankingPageComponent = ({
  users_url, scores_url
}: RankingPageProps) => {
  const rankedScores = useGetHighestScores(users_url, scores_url);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6 text-gray-900">
        ランキング
      </h1>
      <div className="p-6 max-w-3xl mx-auto bg-gray-50 rounded-md shadow-md">
        {rankedScores.length > 0 ? (
          <ul className="space-y-4">
            {rankedScores.map((entry, index) => (
              <li
                key={index}
                className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-semibold text-gray-900">
                    {index + 1}位:{" "}
                    <span className="text-blue-600">{entry.userName}</span>
                  </p>
                  <p className="text-lg font-bold text-green-600">
                    {entry.score}点
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gray-500 text-sm">正タイプ数</p>
                    <p className="text-xl font-bold text-gray-900">
                      {entry.correctTypeCount}回
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">誤タイプ数</p>
                    <p className="text-xl font-bold text-gray-900">
                      {entry.incorrectTypeCount}回
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">正確率</p>
                    <p className="text-xl font-bold text-gray-900">
                      {entry.accuracyRate.toFixed(1)}%
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 text-lg font-semibold">
            データがありません！
          </p>
        )}
      </div>
    </div>
  );
};

export default RankingPageComponent;