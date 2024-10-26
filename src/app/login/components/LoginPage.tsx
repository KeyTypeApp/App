"use client"

import useLogin from "@/hooks/auth/useLogin";
import LoginFormComponent from "./LoginForm";

interface LoginPageProps {
  users_url: string | undefined;
}

const LoginPageComponent = ({
  users_url
}: LoginPageProps) => {
  const {
    name,
    pass,
    errorMessage,
    setName,
    setPass,
    handleSubmit
  } = useLogin(users_url!);

  return (
    <div>
      <LoginFormComponent
        name={name}
        pass={pass}
        onChangeName={(e) => setName(e.target.value)}
        onChangePass={(e) => setPass(e.target.value)}
        onSubmitForm={handleSubmit}
      />
      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
    </div>
  );
};

export default LoginPageComponent;