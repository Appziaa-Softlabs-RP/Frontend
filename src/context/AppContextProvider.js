import { createContext, useState, useContext } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const initialValues = {
    user: localStorage.getItem("bettoken"),
    loggedIn: localStorage.getItem("bettoken") ? true : false,
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
