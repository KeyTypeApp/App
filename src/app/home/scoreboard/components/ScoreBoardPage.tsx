"use client";

import useGetScores from "@/hooks/scoreboard/useGetScores";

interface ScoreBoardPageProps {
  scores_url: string | undefined;
}

const ScoreBoardPageComponent = ({
  scores_url
}: ScoreBoardPageProps) => {
  const scores = useGetScores(scores_url);
  
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">スコア一覧</h1>
      {scores.length > 0 ? (
        <ul className="space-y-2">
          {scores.map((score, index) => (
            <li key={index} className="border p-4 rounded-lg shadow">
              <p>スコア: {score.score}</p>
              <p>正タイプ数: {score.correctTypeCount}</p>
              <p>誤タイプ数: {score.incorrectTypeCount}</p>
              <p>正確率: {score.accuracyRate}%</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>スコアが見つかりません。</p>
      )}
    </main>
  );
}

export default ScoreBoardPageComponent;