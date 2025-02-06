"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { processLogin } from "@/usecase/auth/processLogin";

const useLogin = (users_url: string) => {
  const [name, setName] = useState<string>("")
  const [pass, setPass] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (name && pass) {
      const user = await processLogin(name, pass, users_url);
      if (user) {
        const response = await fetch('/api/setCookie', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          router.push("/home");
        } else {
          setErrorMessage("クッキーの設定に失敗しました。");
        }
      } else {
        alert("名前またはパスワードが正しくありません。");
      }
    } else {
      alert("未入力の欄があります。");
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