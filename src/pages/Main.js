import React, { useEffect } from "react";
import { PublicRoutes } from "../routes/PublicRoutes";
import { clarity } from "react-microsoft-clarity";

export const Main = () => {
  useEffect(() => {
    clarity.init('n7bkkje8c4');
  }, []);

  return <PublicRoutes />;
};
