import { createContext, useReducer } from "react";

import {
  UserType,
  userInitialState,
  userReducer,
} from "../reducers/userReducer";
import { reducerActionType } from "../types/reducerActionType";
import {
  ThemeType,
  themeInitialState,
  themeReducer,
} from "../reducers/themeReducer";

type ContextType = {
  state: initialStateType;
  dispath: React.Dispatch<any>;
};

interface IContextProps {
  children: React.ReactNode;
}

type initialStateType = {
  user: UserType;
  theme: ThemeType;
};
const initialState = {
  user: userInitialState,
  theme: themeInitialState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispath: () => null,
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  user: userReducer(state.user, action),
  theme: themeReducer(state.theme, action),
});

export const ContextProvider: React.FC<IContextProps> = ({ children }) => {
  const [state, dispath] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispath }}>{children}</Context.Provider>
  );
};
