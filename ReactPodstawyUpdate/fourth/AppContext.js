import { createContext } from "React";

export const defaultObject = {
  isUserLogged: false,
  toggleLoggedState: () => {},
};

export const AppContext = createContext(defaultObject);
