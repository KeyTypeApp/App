import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { processLogin } from "@/usecase/auth/processLogin";
import { serialize } from "cookie";

const useLogin = (users_url: string) => {
  const [name, setName] = useState<string>("")
  const [pass, setPass] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const user = await processLogin(name, pass, users_url);
    if (user) {
      document.cookie = serialize("user", JSON.stringify(user), {
        path: "/",
        maxAge: 60*60*24,
      });
      router.push("../home/");
    } else {
      setErrorMessage("名前またはパスワードが正しくありません。");
    }
  };

  return {
    name,
    pass,
    errorMessage,
    setName,
    setPass,
    handleSubmit,
  };
};

export default useLogin;