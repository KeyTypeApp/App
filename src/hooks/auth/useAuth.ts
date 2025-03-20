"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { processLogin } from "@/usecase/auth/processLogin";
import { processRegister } from "@/usecase/auth/processRegister";

const useAuth = () => {
  const [name, setName] = useState<string>("")
  const [pass, setPass] = useState<string>("")
  const [successMessage, setSuccessMessage] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [usersUrl, setUsersUrl] = useState<string>("");
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (name && pass) {
      const user = await processLogin(name, pass, usersUrl);
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
          console.log("クッキーの設定に失敗しました。");
        }
      } else {
        alert("名前またはパスワードが正しくありません。");
      }
    } else {
      alert("未入力の欄があります。");
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/clearCookie", { method: "POST" });
      if (response.ok) {
        router.push("/login");
      } else {
        console.error("cookieを削除できませんでした。");
      }
    } catch (error) {
      console.error("エラーが発生しました。", error);
    }
  };

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (name && pass) {
      const confirm = await processRegister(name, pass, usersUrl);
      if (confirm) {
        router.push("/login");
        alert("新規登録しました。");
      } else {
        alert("その名前はすでに使われています。");
      }
    } else {
      alert("未入力の欄があります。");
    }
  };

  return {
    name,
    pass,
    successMessage,
    errorMessage,
    setName,
    setPass,
    setUsersUrl,
    handleLogin,
    handleLogout,
    handleNoLogin,
    handleSubmit,
  };
};

export default useAuth;