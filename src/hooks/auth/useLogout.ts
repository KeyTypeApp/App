import { useRouter } from "next/navigation";

const useLogout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/clearCookie", { method: "POST" });
      if (response.ok) {
        router.push("/login");
      } else {
        console.error("ログアウトに失敗しました");
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
    }
  };
  return (
    handleLogout
  );
}

export default useLogout;