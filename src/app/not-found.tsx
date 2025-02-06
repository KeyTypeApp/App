"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const handleClick = async () => {
    try {
      const response = await fetch("/api/getCookie");
      const data = await response.json();

      if (data.user) {
        router.push("/home");
      } else {
        router.push("/login");
      }
    } catch(error) {
      router.push("/login");
    }
  };
  return (
    <div>
      <h2>ページが見つかりませんでした。</h2>
      <button
        onClick={handleClick}
      >
        戻る
      </button>
    </div>
  );
}