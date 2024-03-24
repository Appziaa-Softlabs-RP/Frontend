import React, { useEffect } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { useApp } from "../../context/AppContextProvider";

export const Cancellation = () => {
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            {windowWidth === "mobile" ? (
                <PageHeader title="Cancellation Policy" hide={true} />
            ) : ( 
                <Header />
            )}
            <div className="min-vh-100 col-12 d-inline-flex flex-column">
                <div className="container">
                    <h1>Cancellation Policy</h1>


                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}