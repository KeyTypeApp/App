import { dbConfig } from "@/services/db/dbConfig";
import RegisterPage from "./components/Register";

export default function Register() {
  return (
    <main>
      <RegisterPage users_url={dbConfig.users_url} />
    </main>
  );
};