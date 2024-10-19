"use client"

import useRegister from "@/hooks/auth/useRegister";
import RegisterForm from "./RegisterForm";

interface RegisterProps {
  users_url: string | undefined;
}

const RegisterPage = ({
  users_url
}: RegisterProps) => {
  const {
    name,
    pass,
    successMessage,
    errorMessage,
    setName,
    setPass,
    handleSubmit
  } = useRegister(users_url!);

  return (
    <div>
      <RegisterForm
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

export default RegisterPage;