import { useRouter } from "next/navigation";

const useLogout = () => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      const res = await fetch("/api/clearCookie", { method: "POST" });
      if (res.ok) {
        router.push("/login");
      } else {
        console.error("ログアウトに失敗しました");
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
    }
  };
  return (
    handleClick
  );
}

export default useLogout;