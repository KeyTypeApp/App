interface DisplayNameProps {
  name: string | null;
}

const DisplayNameComponent = ({
  name
}: DisplayNameProps
) => {
  return (
    <div className="flex justify-end w-full pt-3 pr-3">
      <span className="inline-block bg-white text-blue-600 text-lg font-bold py-2 px-6 rounded-full shadow-lg border-2 border-blue-500">
        {name ? `${name}さん` : "ゲスト"}
      </span>
    </div>
  );
}

export default DisplayNameComponent;