"use client"

import useAuth from "@/hooks/auth/useAuth";
import LoginFormComponent from "./LoginForm";
import NoLoginButtonComponent from "./NoLoginButton";
import { useConfContext } from "@/context/confContext";
import { useEffect } from "react";

const LoginPageComponent = () => {
  const {
    name,
    pass,
    setName,
    setPass,
    setUsersUrl,
    handleLogin
  } = useAuth();

  const { usersUrl } = useConfContext();

  useEffect(() => {
    setUsersUrl(usersUrl);
  }, [usersUrl, setUsersUrl]);

  return (
    <div>
      <LoginFormComponent
        name={name}
        pass={pass}
        onChangeName={(e) => setName(e.target.value)}
        onChangePass={(e) => setPass(e.target.value)}
        onSubmitForm={handleLogin}
      />
      <NoLoginButtonComponent />
    </div>
  );
};

export default LoginPageComponent;