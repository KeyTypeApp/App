import { FormEvent, useState } from "react";
import { processRegister } from "@/usecase/processRegister";

const useRegister = (users_url: string) => {
  const [name, setName] = useState<string>("")
  const [pass, setPass] = useState<string>("")
  const [successMessage, setSuccessMessage] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const confirm = await processRegister(name, pass, users_url);
    if (confirm) {
      setSuccessMessage("新規登録しました。");
    } else {
      setErrorMessage("その名前はすでに使われています。");
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