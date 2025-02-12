"use client";

import { useEffect, useState } from "react";

interface UserProps {
  uuid: string;
  name: string;
}

interface ScoresProps {
  uuid: string;
  score: number;
  correctTypeCount: number;
  incorrectTypeCount: number;
  accuracyRate: number;
}

interface RankedScoreProps extends ScoresProps {
  userName: string;
}

const useGetHighestScores = (
  users_url: string | undefined,
  scores_url: string | undefined
) => {
  const [rankedScores, setRankedScores] = useState<RankedScoreProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!users_url || !scores_url) {
          console.error("ユーザーまたはスコアのURLが設定されていません");
          return;
        }
    
        const usersResponse = await fetch(users_url);
        const usersData = await usersResponse.json();    
        const scoresResponse = await fetch(scores_url);
        const scoresData = await scoresResponse.json();
        const users = usersData || [];
        const scores = scoresData || [];
    
        if (users.length === 0 || scores.length === 0) {
          console.warn("ユーザーまたはスコアデータが空です");
          return;
        }
    
        const userHighestScores = users
          .map((user:UserProps) => {
            const userScores = scores.filter((score:ScoresProps) => score.uuid === user.uuid);
            if (userScores.length === 0) return null;
    
            const highestScore = userScores.reduce((max:ScoresProps, current:ScoresProps) =>
              current.score > max.score ? current : max
            );
    
            return {
              ...highestScore,
              userName: user.name,
            };
          })
          .filter(Boolean);
    
        const sortedScores = userHighestScores.sort((a:RankedScoreProps, b:RankedScoreProps) => b.score - a.score);
    
        setRankedScores(sortedScores as RankedScoreProps[]);
      } catch (error) {
        console.error("データ取得失敗:", error);
      }
    };
    

    fetchData();
  }, [users_url, scores_url]);

  return rankedScores;
};

export default useGetHighestScores;