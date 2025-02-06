import useLogout from "@/hooks/auth/useLogout";

interface DisplayNameProps {
  name: string | null;
}

const DisplayNameComponent = ({
  name
}: DisplayNameProps
) => {
  const handleClick = useLogout();
  return (
    <div className="flex flex-col items-end w-full pt-8 pr-8 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-xs w-52">
        <span className="block text-blue-600 text-xl font-semibold mb-4">
          {name ? `${name}さん` : "ゲスト"}
        </span>
        <button
          onClick={handleClick}
          className="w-28 py-2 text-white bg-red-500 rounded-lg font-semibold shadow-md transition duration-300 hover:bg-red-600"
        >
          ログアウト
        </button>
      </div>
    </div>
  );
}

export default DisplayNameComponent;
