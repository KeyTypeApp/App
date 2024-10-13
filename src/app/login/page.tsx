"use client";

import Login from "./components/Login";
import { dbConfig } from "@/services/db/dbConfig";

export default function Home() {
  return (
    <>
      <div>
        <Login users_url={dbConfig.users_url} />
      </div>
    </>
  );
};