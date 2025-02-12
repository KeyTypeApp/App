import useNoLogin from "@/hooks/auth/useNoLogin";

const NoLoginButtonComponent = () => {
  const handleNoLogin = useNoLogin();
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={handleNoLogin}
        className="px-3 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg"
      >
        ログインせずにプレイ
      </button>
    </div>
  );
}

export default NoLoginButtonComponent;