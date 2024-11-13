"use client";

import useGetScores from "@/hooks/scoreboard/useGetScores";
import Link from "next/link";

interface ScoreBoardPageProps {
  scores_url: string | undefined;
}

const ScoreBoardPageComponent = ({
  scores_url
}: ScoreBoardPageProps) => {
  const scores = useGetScores(scores_url);
  
  return (
    <main className="p-6 max-w-3xl mx-auto bg-gray-50 rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
        スコア一覧
      </h1>
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
                    {score.accuracyRate.toFixed(1)}%
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 text-lg font-semibold mt-10">
          スコアがありません！
        </p>
      )}
      <div className="flex justify-center space-x-4 mt-8">
        <Link href="/home">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg w-32 py-4 text-lg font-semibold shadow-md transition duration-300 hover:bg-blue-600 hover:shadow-l"
          >
            プレイ
          </button>
        </Link>
        <Link href="/home/scoreboard">
          <button
            type="submit"
            className="bg-green-500 text-white rounded-lg py-4 w-32 text-lg font-semibold shadow-md transition duration-300 hover:bg-green-600 hover:shadow-l"
          >
            スコア一覧
          </button>
        </Link>
        <Link href="/home/ranking">
          <button
            type="submit"
            className="bg-orange-500 text-white rounded-lg py-4 w-32 text-lg font-semibold shadow-md transition duration-300 hover:bg-orange-600 hover:shadow-lg"
          >
            ランキング
          </button>
        </Link>
      </div>
    </main>
  );
};

export default ScoreBoardPageComponent;