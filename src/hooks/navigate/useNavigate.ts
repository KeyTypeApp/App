import { useRouter } from "next/navigation";

const useNavigate = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/register")  ;
  };

  return {
    handleClick
  };
};

export default useNavigate;