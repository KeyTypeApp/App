"use client"

import useLogin from "@/hooks/auth/useLogin";
import LoginForm from "./LoginForm";
import UserInfo from "./UserInfo";

interface LoginProps {
  users_url: string | undefined;
}

const LoginPage = ({ users_url }: LoginProps) => {
  const {
    name,
    pass,
    userInfo,
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
      {userInfo && <UserInfo id={userInfo.id} name={userInfo.name} pass={userInfo.pass} />}
    </>
  );
};

export default LoginPage;