import React from "react";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { MyOrdersBox } from "../../Components/MyOrdersBox/MyOrdersBox";
import { Header } from "../../Components/Header/Header";
import { useApp } from "../../context/AppContextProvider";
import { MyAccountMenu } from "../MyAccount/MyAccount";
import { Footer } from "../../Components/Footer/Footer";

export const MyOrders = () => {
  const appData = useApp();
  let windowWidth = appData.appData.windowWidth;
  return (
    <React.Fragment>
      {
        windowWidth === "mobile"
          ? <PageHeader title="My Orders" />
          : <>
            <Header />
            <div className="container">
              <div className="d-flex gap-3 mt-4">
                <MyAccountMenu />
                <div className="w-full flex-grow-1">
                  <MyOrdersBox />
                </div>
              </div>
            </div>
            <Footer />
          </>
      }


    </React.Fragment>
  )
}