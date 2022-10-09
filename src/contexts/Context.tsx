import { createContext } from "react";

type ContextType = {
  name: string;
  age: number;
};

const initialState = {
  name: "Paulo",
  age: 65,
};

interface IContextProps {
  children: React.ReactNode;
}

export const Context = createContext<ContextType>(initialState);

export const ContextProvider: React.FC<IContextProps> = ({ children }) => {
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
