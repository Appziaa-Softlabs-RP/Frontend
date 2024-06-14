import React from "react";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { useApp } from "../../context/AppContextProvider";
import { Header } from "../../Components/Header/Header";
import { MyAccountMenu } from "../MyAccount/MyAccount";
import { Footer } from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { AddAddressForm } from "../../Components/AddAddressForm/AddAddressForm";

export const AddAddress = () => {
    const appData = useApp();
    const location = useLocation();
    const addresState = location.state;
    let windowWidth = appData.appData.windowWidth;
    
    return (
        <React.Fragment>
            {windowWidth === 'mobile' ? (
                <React.Fragment>
                    <PageHeader title={`${addresState.addressEdit === true ? 'Edit Address' : 'Add Address'}`}/>
                    <AddAddressForm />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Header />
                    <div className="col-12 d-inline-flex mt-4">
                        <div className="container">
                            <div className="d-flex gap-3 col-12 align-items-start">
                                <MyAccountMenu />
                                <div className="w-full flex-grow-1">
                                    <AddAddressForm />        
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </React.Fragment>
            )}
        </React.Fragment>
    )
}