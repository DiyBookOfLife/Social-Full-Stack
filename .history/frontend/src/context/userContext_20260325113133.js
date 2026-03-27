import { Children, createContext } from "react";

const UserContext = createContext(null);

function UserProvider({ children }) {
  return <UserContext.Provider>{children}</UserContext.Provider>;
}

export default UserProvider;
