"use client";

import MenuButtonComponent from "@/components/MenuButton";
import { useConfContext } from "@/context/confContext";
import useGetHighestScores from "@/hooks/ranking/useGetHightestScores";


const RankingPageComponent = () => {
  const { usersUrl, scoresUrl } = useConfContext();
  const rankedScores = useGetHighestScores(usersUrl, scoresUrl);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6 text-gray-900">
        ランキング
      </h1>
      <div className="mx-auto w-96">
        {rankedScores.length > 0 ? (
          <ul className="space-y-3">
            {rankedScores.map((entry, index) => (
              <li
                key={index}
                className="flex justify-between items-center border border-gray-200 rounded-md p-3 bg-white shadow-md"
              >
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-2 rounded-2xl text-2xl font-semibold ${
                      index === 0
                        ? "bg-yellow-200 text-gray-900"
                        : index === 1
                        ? "bg-gray-200 text-gray-900"
                        : index === 2
                        ? "bg-orange-200 text-gray-900"
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