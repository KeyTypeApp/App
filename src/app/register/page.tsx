import { dbConfig } from "@/services/db/dbConfig";
import RegisterPageComponent from "./components/RegisterPage";

export default function Register() {
  return (
    <main>
      <RegisterPageComponent users_url={dbConfig.users_url} />
    </main>
  );
};