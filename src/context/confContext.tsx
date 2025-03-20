"use client"
import { createContext, useContext, useState } from "react";

export interface confContextValue {
  scoresUrl: string;
  usersUrl: string;
  setScoresUrl: (scores_url: string) => void;
  setUsersUrl: (users_url: string) => void;
}

const ConfContext = createContext<confContextValue | null>(null);

export function ConfProvider({ children }: { children: React.ReactNode }) {
  const [scoresUrl, setScoresUrl] = useState<string>("test");
  const [usersUrl, setUsersUrl] = useState<string>("");
  const contextValue: confContextValue = {
    scoresUrl,
    usersUrl,
    setScoresUrl,
    setUsersUrl,
  };
  return(
    <ConfContext.Provider value={contextValue}>
      {children}
    </ConfContext.Provider>
  )
}
export function useConfContext() {
  const context = useContext(ConfContext);
  if (!context) {
    throw new Error('ConfProvider must be used within a UserProvider');
  }
  return context;
}