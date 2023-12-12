import { createContext, useState, useContext } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const initialValues = {
    user: localStorage.getItem("user"),
    loggedIn: localStorage.getItem("loggedIn") ? true : false,
    fetchWallet : localStorage.getItem("bettoken") ? true : false,
  };
  const [appData, setAppData] = useState(initialValues);
  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
