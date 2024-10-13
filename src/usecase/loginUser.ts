interface User {
    id: string;
    name: string;
    pass: string;
  }
  
  export const loginUser = async (id: string, pass: string, users_url: string): Promise<User | null> => {
    try {
      const res = await fetch(users_url);
      console.log(res)
      const users: User[] = await res.json();
      console.log(users);
      return users.find(user => user.id === id && user.pass === pass) || null;
    } catch (error) {
      console.error("エラー", error);
      return null;
    }
  };