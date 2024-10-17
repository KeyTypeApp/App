import { FormEvent, useState } from "react";
import { processLogin } from "@/usecase/processLogin";

const useLogin = (users_url: string) => {
  const [name, setName] = useState<string>("")
  const [pass, setPass] = useState<string>("")
  const [userInfo, setUserInfo] = useState<{id: string, name: string, pass: string} | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const confirm = await processLogin(name, pass, users_url);
    if (confirm) {
      setUserInfo(confirm);
    } else {
      setUserInfo(null);
      setErrorMessage("名前またはパスワードが正しくありません。");
    }
  };

  return {
    name,
    pass,
    userInfo,
    errorMessage,
    setName,
    setPass,
    handleSubmit,
  };
};

export default useLogin;