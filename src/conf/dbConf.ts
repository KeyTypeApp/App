import { DBConfType } from "@/shared/types/dbConf";

const dbConf:DBConfType={
  usersUrl:process.env.USERS_URL||"http://localhost:3001/users",
  scoresUrl:process.env.SCORES_URL||"http://localhost:3002/scores"
}

export default dbConf;