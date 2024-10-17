import { v4 as uuidv4 } from 'uuid';

interface User {
    id: string;
    name: string;
    pass: string;
  }
  
  export const processRegister = async (name: string, pass: string, users_url: string): Promise<boolean> => {
    try {
      const res = await fetch(users_url);
      const users: User[] = await res.json();
      if (!(users.find(user => user.name === name))) {
        await fetch(users_url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: uuidv4(), name, pass }),
        });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("エラー", error);
      return false;
    }
  };