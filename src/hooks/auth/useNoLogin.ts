import { useRouter } from "next/navigation";

const useNoLogin = () => {
  const router = useRouter();

  const handleNoLogin = async () => {
    try {
      const response = await fetch("/api/clearCookie", { method: "POST" });
      if (response.ok) {
        router.push("/home");
      } else {
        console.error("cookieを削除できませんでした。");
      }
    } catch (error) {
      console.error("エラーが発生しました。", error);
    }
  };
  return (
    handleNoLogin
  );
}

export default useNoLogin;