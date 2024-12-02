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
    <div className="flex flex-col items-end w-full pt-3 pr-3 space-y-2">
      <span className="inline-block bg-white text-blue-600 text-lg font-bold py-2 px-6 rounded-full shadow-lg border-2 border-blue-500">
        {name ? `${name}さん` : "ゲスト"}
      </span>
      <button
        onClick={handleClick}
        className="text-white bg-red-500 px-2 py-1 mr-6 text-base rounded shadow border border-red-600 font-bold hover:bg-red-600 transition duration-300"
      >
        LOGOUT
      </button>
    </div>
  );
}

export default DisplayNameComponent;