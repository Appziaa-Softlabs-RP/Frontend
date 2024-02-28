import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { useApp } from "../../context/AppContextProvider";

export const Press = () => {
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;
    return (
        <React.Fragment>
            {windowWidth === "mobile" ? (
                <PageHeader title="Privacy Policy" hide={true} />
            ) : ( 
                <Header />
            )}
            <div className="min-vh-100 col-12 d-inline-flex flex-column my-5">
                <div className="container">


                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}