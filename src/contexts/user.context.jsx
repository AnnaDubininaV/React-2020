import { createContext, useState } from 'react';

export const UserContext = createContext({
  curentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [curentUser, setCurrentUser] = useState(null);
  const value = { curentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
