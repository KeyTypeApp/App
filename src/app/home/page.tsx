"use client";

import DisplayNameComponent from "@/components/DisplayName";
import useName from "@/hooks/set/useName";
import Link from "next/link";

export default function Home () {
  const name = useName();
  return (
    <main>
      <DisplayNameComponent
        name={name}
      />
      <div className="flex flex-col items-center mt-52">
        <div className="mb-10">
          <Link href="/home/play">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg py-6 px-28 text-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              プレイ
            </button>
          </Link>
        </div>
        <div className="flex space-x-2">
          <Link href="/home/scoreboard">
            <button
              type="submit"
              className="bg-green-500 text-white rounded-lg py-4 px-4 text-lg font-semibold shadow-md transition duration-300 hover:bg-green-600 hover:shadow-l"
            >
              スコア一覧
            </button>
          </Link>
          <Link href="/home/ranking">
            <button
              type="submit"
              className="bg-orange-500 text-white rounded-lg py-4 px-4 text-lg font-semibold shadow-md transition duration-300 hover:bg-orange-600 hover:shadow-lg"
            >
              ランキング
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};