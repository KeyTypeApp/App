import { dbConfig } from "@/services/db/dbConfig"
export default function Login() {
  console.log("-------")
  console.log(dbConfig.dbname)
  return (
    <p>login test</p>
  )
}