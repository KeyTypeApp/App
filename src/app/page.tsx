"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = async () => {
    router.push("/login");
  };
  return (
    <div className="flex items-center justify-center bg-gray-100" style={{ minHeight: 'calc(100vh - 84px)' }}>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full border border-gray-300">
        <h2 className="text-xl font-bold text-center text-gray-900 mb-6">
          KeyTypeをプレイする
        </h2>
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="w-6/12 text-white bg-gradient-to-r from-blue-500 to-purple-600 font-semibold rounded-lg py-2 hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out text-lg"
          >
            ログイン画面へ
          </button>
        </div>
      </div>
    </div>
  );
}