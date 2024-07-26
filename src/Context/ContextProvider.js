import React, { createContext } from "react";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  return <MyContext.Provider value={""}>{children}</MyContext.Provider>;
};

export default ContextProvider;
