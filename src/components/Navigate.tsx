import { useRouter } from "next/navigation";

interface NavigateProps {
  message: string;
  path: string;
  text: string;
}

const Navigate = ({ message, path, text }: NavigateProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };
  return (
    <p
      className="text-center mt-4 text-gray-600 text-sm"
    >
      {message}
      <span
        onClick={handleClick}
        className="text-blue-500 hover:underline"
      >
        {text}
      </span>
    </p>
  );
};

export default Navigate;