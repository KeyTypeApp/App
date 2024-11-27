"use client";

import MenuButtonComponent from "@/components/MenuButton";
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
      <div className="p-4 mx-auto w-96">
        {rankedScores.length > 0 ? (
          <ul className="space-y-2">
            {rankedScores.map((entry, index) => (
              <li
                key={index}
                className="flex justify-between items-center border border-gray-200 rounded-md p-3 bg-white shadow-sm"
              >
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-2 rounded-2xl text-2xl font-semibold ${
                      index === 0
                        ? "bg-yellow-300 text-gray-900"
                        : index === 1
                        ? "bg-gray-300 text-gray-900"
                        : index === 2
                        ? "bg-orange-300 text-gray-900"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    {index + 1}位
                  </span>
                  <p className="text-2xl font-medium text-gray-900">{entry.userName}</p>
                </div>
                <p className="text-2xl font-bold text-blue-600">{entry.score}点</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 text-lg font-semibold">
            データがありません！
          </p>
        )}
      </div>
      <MenuButtonComponent />
    </div>
  );
};

export default RankingPageComponent;