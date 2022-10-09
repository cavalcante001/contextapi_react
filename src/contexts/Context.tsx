import { createContext, useReducer } from "react";

import {
  UserType,
  userInitialState,
  userReducer,
} from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionType";

type ContextType = {
  state: initialStateType;
  dispath: React.Dispatch<any>;
};

interface IContextProps {
  children: React.ReactNode;
}

type initialStateType = {
  user: UserType;
};
const initialState = {
  user: userInitialState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispath: () => null,
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  user: userReducer(state.user, action),
});

export const ContextProvider: React.FC<IContextProps> = ({ children }) => {
  const [state, dispath] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispath }}>{children}</Context.Provider>
  );
};
