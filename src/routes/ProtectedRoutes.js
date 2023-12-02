import React from "react";
import { useApp } from "../context/AppContextProvider";
import { Login } from "../pages/Login/Login";

export const ProtectedRoutes = (props) => {
	const appData = useApp();
    const { element } = props;
    if (appData.appData.loggedIn) return element;
    else return <Login />;
};
