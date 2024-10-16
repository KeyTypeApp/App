interface User {
    id: string;
    name: string;
    pass: string;
  }
  
  export const registerUser = async (name: string, pass: string, users_url: string): Promise<User | null> => {
    try {
      const res = await fetch(users_url);
      const users: User[] = await res.json();
      return users.find(user => user.name === name && user.pass === pass) || null;
    } catch (error) {
      console.error("エラー", error);
      return null;
    }
  };