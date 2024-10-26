import { dbConfig } from "@/services/db/dbConfig";
import LoginPageComponent from "./components/LoginPage";

export default function Login() {
  return (
    <main>
      <LoginPageComponent users_url={dbConfig.users_url} />
    </main>
  );
};