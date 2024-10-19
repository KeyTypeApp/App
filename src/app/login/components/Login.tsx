"use client"

import useLogin from "@/hooks/auth/useLogin";
import LoginForm from "./LoginForm";

interface LoginProps {
  users_url: string | undefined;
}

const LoginPage = ({ users_url }: LoginProps) => {
  const {
    name,
    pass,
    errorMessage,
    setName,
    setPass,
    handleSubmit
  } = useLogin(users_url!);

  return (
    <>
      <div>
        <LoginForm
          name={name}
          pass={pass}
          onChangeName={(e) => setName(e.target.value)}
          onChangePass={(e) => setPass(e.target.value)}
          onSubmitForm={handleSubmit}
        />
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      </div>
    </>
  );
};

export default LoginPage;