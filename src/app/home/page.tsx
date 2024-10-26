"use client";

import { useUser } from "../../context/UserContext";

export default function Home () {
  const { user } = useUser();
  
  return (
    <main className="flex flex-col items-center mt-52">
      <div className="mb-10">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg py-6 px-28 text-2xl shadow-lg transition-transform duration-300 hover:scale-105"
        >
          プレイ
        </button>
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-green-500 text-white rounded-lg py-4 px-4 text-lg font-semibold shadow-md transition duration-300 hover:bg-green-600 hover:shadow-l"
        >
          スコア一覧
        </button>
        <button
          type="submit"
          className="bg-orange-500 text-white rounded-lg py-4 px-4 text-lg font-semibold shadow-md transition duration-300 hover:bg-orange-600 hover:shadow-lg"
        >
          ランキング
        </button>
      </div>
      <div className="mt-16">
        <span className="inline-block bg-white text-blue-600 text-lg font-bold py-2 px-6 rounded-full shadow-lg border-2 border-blue-500">
          {user?`${user.name}さん` : "ゲスト"}
        </span>
      </div>
    </main>
  );
};