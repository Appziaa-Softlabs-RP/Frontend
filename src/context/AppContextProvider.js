import { createContext, useState, useContext } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const initialValues = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
    loggedIn: localStorage.getItem("loggedIn") ? true : false,
    fetchWallet: localStorage.getItem("bettoken") ? true : false,
    windowWidth: window.innerWidth > 900 ? "desktop" : "mobile",
    cartCount: localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData")).length : 0,
    cartData: localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData")) : [],
    cartID: localStorage.getItem("cartID") ? localStorage.getItem("cartID") : '',
    cartSaved: localStorage.getItem("cartSaved") ? true : false,
  };
  const [appData, setAppData] = useState(initialValues);
  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
