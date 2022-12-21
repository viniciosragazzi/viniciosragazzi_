import React, { createContext } from "react";

export const ContextApp = createContext({});

const AppProvider = ({ children }) => {
  return <ContextApp.Provider value={{}}>{children}</ContextApp.Provider>;
};

export default AppProvider;
