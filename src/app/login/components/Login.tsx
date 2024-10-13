import useLogin from "@/hooks/auth/useLogin";
import UserInfo from "./UserInfo";
import LoginForm from "./Login_Form";

interface LoginProps {
  users_url: string;
}

const Login = ({ users_url }: LoginProps) => {
  const {
    id,
    pass,
    userInfo,
    errorMessage,
    setId,
    setPass,
    handleSubmit
  } = useLogin(users_url);

  return (
    <>
      <div>
        <LoginForm
          id={id}
          pass={pass}
          onChangeId={(e) => setId(e.target.value)}
          onChangePass={(e) => setPass(e.target.value)}
          onSubmitForm={handleSubmit}
        />
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      </div>
      {userInfo && <UserInfo id={userInfo.id} name={userInfo.name} pass={userInfo.pass} />}
    </>
  );
};

export default Login;