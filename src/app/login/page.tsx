import { dbConfig } from "@/services/db/dbConfig";
import LoginPage from "./components/Login";

export default function Login() {
  return (
    <main>
      <LoginPage users_url={dbConfig.users_url} />
    </main>
  );
};