"use client"

import useAuth from "@/hooks/auth/useAuth";
import RegisterFormComponent from "./RegisterForm";
import { useConfContext } from "@/context/confContext";
import { useEffect } from "react";

const RegisterPageComponent = () => {

  const {
    name,
    pass,
    setName,
    setPass,
    handleSubmit,
    setUsersUrl,
    successMessage,
    errorMessage
  } = useAuth();
  const { usersUrl } = useConfContext();

  useEffect(() => {
    setUsersUrl(usersUrl);
  }, [usersUrl, setUsersUrl]);

  return (
    <div>
      <RegisterFormComponent
        name={name}
        pass={pass}
        onChangeName={(e) => setName(e.target.value)}
        onChangePass={(e) => setPass(e.target.value)}
        onSubmitForm={handleSubmit}
      />
      {successMessage && <p className="text-red-500 text-center">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
    </div>
  );
};

export default RegisterPageComponent;