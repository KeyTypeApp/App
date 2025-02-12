import { FormEvent, useState } from "react";
import { processRegister } from "@/usecase/auth/processRegister";
import { useRouter } from "next/navigation";

const useRegister = (users_url: string) => {
  const [name, setName] = useState<string>("")
  const [pass, setPass] = useState<string>("")
  const [successMessage, setSuccessMessage] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (name && pass) {
      const confirm = await processRegister(name, pass, users_url);
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
    handleSubmit,
  };
};

export default useRegister;