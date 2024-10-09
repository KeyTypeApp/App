import { FormEvent, useState } from "react";
import { loginUser } from "@/usecase/loginUser";

const useLogin = () => {
  const [id, setId] = useState<string>("")
  const [pass, setPass] = useState<string>("")
  const [userInfo, setUserInfo] = useState<{id: string, pass: string, name: string} | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const confirm = await loginUser(id, pass);
    if (confirm) {
      setUserInfo(confirm);
    } else {
      setUserInfo(null);
      setErrorMessage("IDまたはパスワードが正しくありません。");
    }
  };

  return {
    id,
    pass,
    userInfo,
    errorMessage,
    setId,
    setPass,
    handleSubmit,
  };
};

export default useLogin;