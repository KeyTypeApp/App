import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { processLogin } from "@/usecase/processLogin";

const useLogin = (users_url: string) => {
  const [name, setName] = useState<string>("")
  const [pass, setPass] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const confirm = await processLogin(name, pass, users_url);
    if (confirm) {
      router.push("../home/play");
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