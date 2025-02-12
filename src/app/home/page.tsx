"use client";

import useName from "@/hooks/set/useName";
import DisplayNameComponent from "@/app/home/components/DisplayName";
import MenuButtonComponent from "./components/MenuButton";

export default function Home () {
  const name = useName();
  return (
    <main>
      <DisplayNameComponent
        name={name}
      />
      <MenuButtonComponent
        name={name}
      />
    </main>
  );
}