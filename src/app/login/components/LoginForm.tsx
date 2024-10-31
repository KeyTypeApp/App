import { FormEvent } from "react";
import Navigate from "@/components/Navigate";

interface LoginFormProps {
  name: string;
  pass: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePass: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitForm: (e: FormEvent) => void;
}

const LoginFormComponent = ({
  name,
  pass,
  onChangeName,
  onChangePass,
  onSubmitForm
}: LoginFormProps) => {
  return (
    <form onSubmit={onSubmitForm} className="bg-white shadow-lg rounded-lg p-10 max-w-xs mx-auto mt-12 border border-gray-300">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        LOGIN
      </h1>
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
          type="password"
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
        LOGIN
      </button>
      <Navigate
        message="Don't have an account?"
        path="/register"
        text="register"
      />
    </form>
  );
};

export default LoginFormComponent;