import useNavigate from "@/hooks/navigate/useNavigate";
import { FormEvent } from "react";

interface RegisterFormProps {
    name: string;
    pass: string;
    onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePass: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmitForm: (e: FormEvent) => void;
}

const RegisterForm = ({name, pass, onChangeName, onChangePass, onSubmitForm}: RegisterFormProps) => {
  const { handleClick } = useNavigate();
  return (
    <form onSubmit={onSubmitForm} className="bg-white shadow-lg rounded-lg p-10 max-w-xs mx-auto mt-12 border border-gray-300">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">REGISTER</h1>
      <div className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="NAME"
          value={name}
          onChange={onChangeName}
          className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg p-4 w-full transition duration-300 ease-in-out transform focus:border-blue-500 focus:ring focus:ring-blue-200 hover:shadow-md"
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="pass"
          placeholder="PASSWORD"
          value={pass}
          onChange={onChangePass}
          className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg p-4 w-full transition duration-300 ease-in-out transform focus:border-blue-500 focus:ring focus:ring-blue-200 hover:shadow-md"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-gradient-to-r from-blue-500 to-purple-600 font-semibold rounded-lg py-2 hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out text-lg"
      >
        REGISTER
      </button>
      <p
        className="text-center mt-4 text-gray-600 text-sm"
      >
        already have an account?
        <span
          onClick={() => handleClick("/login")}
          className="text-blue-500 hover:underline"
        >
          login
        </span>
      </p>
    </form>
  );
};

export default RegisterForm