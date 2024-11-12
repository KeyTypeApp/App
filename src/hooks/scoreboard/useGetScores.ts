"use client";

import { useEffect, useState } from "react";

interface ScoresProps {
  uuid: string;
  score: number;
  correctTypeCount: number;
  incorrectTypeCount: number;
  accuracyRate: number;
}

const useGetScores = (scores_url: string | undefined) => {
  const [uuid, setUuid] = useState<string>("");
  const [scores, setScores] = useState<ScoresProps[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/getCookie");
        const data = await response.json();
        setUuid(data.user.uuid);
      } catch (error) {
        console.error("取得失敗", error);
      }
    };
    
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchScores = async () => {
      if (uuid && scores_url) {
        try {
          const response = await fetch(scores_url);
          const allScores: ScoresProps[] = await response.json();
          const userScores = allScores.filter(score => score.uuid === uuid);
          setScores(userScores);
        } catch (error) {
          console.error("スコア取得失敗", error);
        }
      }
    };

    fetchScores();
  }, [uuid, scores_url]);

  return scores;
};

export default useGetScores;