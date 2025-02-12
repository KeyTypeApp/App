import { useRouter } from "next/navigation";
import { DisplayNameProps } from "@/shared/types/name";
import useLogout from "@/hooks/auth/useLogout";

const DisplayNameComponent = ({
  name
}: DisplayNameProps
) => {
  const handleLogout = useLogout();
  const router = useRouter();
  return (
    <div className="flex flex-col items-end w-full pt-5 pr-5 space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-xl max-w-xs w-52 flex flex-col items-center justify-center border-2 border-gray-100">
        <span className="block text-xl font-semibold mb-2">
          {name ? `${name}さん` : "ゲスト"}
        </span>
        {name? (
          <button
            onClick={handleLogout}
            className="w-24 py-2 text-white bg-red-500 rounded-lg font-semibold shadow-md transition duration-300 hover:shadow-lg hover:bg-red-600"
          >
            ログアウト
          </button>
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="w-24 py-2 text-white bg-blue-500 rounded-lg font-semibold shadow-md transition duration-300 hover:shadow-lg hover:bg-blue-600"
          >
            ログイン
          </button>
        )}
      </div>
    </div>
  );
}

export default DisplayNameComponent;
