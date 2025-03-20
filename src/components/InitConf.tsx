"use client";
import { useEffect } from "react";
import { useConfContext } from "@/context/confContext";
import { DBConfType } from "@/shared/types/dbConf";

export default function InitConf({ dbConf }: { dbConf: DBConfType }) {
  const { usersUrl, scoresUrl } = dbConf;
  const { setUsersUrl, setScoresUrl } = useConfContext();

  useEffect(() => {
    setUsersUrl(usersUrl);
    setScoresUrl(scoresUrl);
  }, [usersUrl, scoresUrl, setUsersUrl, setScoresUrl]);

  return null;
}