import { useRouter } from "next/navigation";

const useNavigate = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return {
    handleClick
  };
};

export default useNavigate;