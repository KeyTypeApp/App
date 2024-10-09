interface User {
    id: string;
    name: string;
    pass: string;
  }
  
  export const loginUser = async (id: string, pass: string): Promise<User | null> => {
    try {
      const res = await fetch("http://localhost:3011/users");
      const users: User[] = await res.json();
      return users.find(user => user.id === id && user.pass === pass) || null;
    } catch (error) {
      console.error("エラー", error);
      return null;
    }
  };