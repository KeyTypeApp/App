import Link from "../../node_modules/next/link";

interface ButtonProps {
  path: string;
  color: string;
  text: string;
}

const ButtonComponent = ({
  path,
  color,
  text
}: ButtonProps) => {
  return (
    <Link href={path}>
      <button
        type="submit"
        className={`bg-${color}-500 text-white rounded-lg w-32 py-4 text-lg font-semibold shadow-md transition duration-300 hover:bg-${color}-600 hover:shadow-lg`}
      >
        {text}
      </button>
    </Link>
  );
}

export default ButtonComponent;