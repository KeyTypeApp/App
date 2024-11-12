"use client";

import { useEffect, useState } from "react";

const useName = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/getCookie");
        const data = await response.json();
        setName(data.user.name);
      } catch (error) {
        console.error("取得失敗", error);
      }
    };
    fetchUser();
  }, []);

  return name;
};

export default useName;