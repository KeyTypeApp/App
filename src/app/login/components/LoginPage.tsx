"use client"

import useLogin from "@/hooks/auth/useLogin";
import LoginFormComponent from "./LoginForm";
import NoLoginButtonComponent from "./NoLoginButton";

interface LoginPageProps {
  users_url: string | undefined;
}

const LoginPageComponent = ({
  users_url
}: LoginPageProps) => {
  const {
    name,
    pass,
    setName,
    setPass,
    handleLogin
  } = useLogin(users_url!);

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