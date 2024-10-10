import { dbConfig } from "@/services/db/dbConfig";

interface User {
    id: string;
    name: string;
    pass: string;
  }
  
  export const loginUser = async (id: string, pass: string): Promise<User | null> => {
    try {
      if (!dbConfig.users_url) {
        throw new Error("dbConfig.tsを確認");
      }
      const res = await fetch(dbConfig.users_url);
      const users: User[] = await res.json();
      return users.find(user => user.id === id && user.pass === pass) || null;
    } catch (error) {
      console.error("エラー", error);
      return null;
    }
  };