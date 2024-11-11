"use client";

import { useEffect, useState } from "react";

const [uuid, setUuid] = useState<string>("")

const useGetScores = (scores_url: string) => {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/getCookie");
        const data = await response.json();
        setUuid(data.users.uuid);
        console.log(uuid);
      } catch (error) {
        console.error("取得失敗", error);
      }
    };
    fetchUser();
  }, []);
  return (
    uuid
  );
}

export default useGetScores;