"use client"

import useRegister from "@/hooks/auth/useRegister";
import RegisterFormComponent from "./RegisterForm";

interface RegisterPageProps {
  users_url: string | undefined;
}

const RegisterPageComponent = ({
  users_url
}: RegisterPageProps) => {
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