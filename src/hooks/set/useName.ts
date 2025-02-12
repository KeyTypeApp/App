"use client";

import { useEffect, useState } from "react";

const useName = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/getCookie");
        const data = await response.json();
        if (data.user) {
          setName(data.user.name);
        }
      } catch (error) {
        console.error("cookieを取得できませんでした。", error);
      }
    };
    fetchUser();
  }, []);

  return name;
};

export default useName;