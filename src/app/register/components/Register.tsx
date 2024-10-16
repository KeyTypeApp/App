"use client"

import useRegister from "@/hooks/auth/useRegister";
import RegisterForm from "./Register_Form";
import UserInfo from "./UserInfo";

interface RegisterProps {
  users_url: string | undefined;
}

const RegisterPage = ({ users_url }: RegisterProps) => {
  const {
    name,
    pass,
    userInfo,
    errorMessage,
    setName,
    setPass,
    handleSubmit
  } = useRegister(users_url!);

  return (
    <>
      <div>
        <RegisterForm
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

export default RegisterPage;