import { useRouter } from "next/navigation";

interface NavigateProps {
  message: string;
  linkPath: string;
  linkText: string;
}

const Navigate = ({ message, linkPath, linkText }: NavigateProps) => {
  const router = useRouter();
  return (
    <p
      className="text-center mt-4 text-gray-600 text-sm"
    >
      Don't have an account?
      <span
        onClick={() => handleClick("/register")}
        className="text-blue-500 hover:underline"
      >
        register
      </span>
    </p>
  );
}

export default Navigate;