import React, { useEffect, useState } from "react";
import { CartSummery } from "../../Components/CartSummery/CartSummery";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { OrderSummery } from "../../Components/OrderSummery/OrderSummery";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { useApp } from "../../context/AppContextProvider";

export const ShoppingCart = () => {
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;
    const [cartData, setCartData] = useState([]);
    const [checkoutTotal, setCheckoutTotal] = useState(0);
    const [checkoutSaving, setCheckoutSaving] = useState(0);

    const setCartTotal = (cartData) => {
        let allTotal = 0;
        let allSaving = 0;
        if(cartData?.length){
            cartData?.map((item) => {
                let qtyTotal = item?.quantity * item?.selling_price;
                allTotal = allTotal + qtyTotal;
            });
            setCheckoutTotal(allTotal);
            setCheckoutSaving(allSaving);
        }
    }

    useEffect(() => {
        setCartData(appData?.appData?.cartData);
        setCartTotal(appData?.appData?.cartData);
    }, []);

    useEffect(() => {
        setCartData(appData?.appData?.cartData);
        setCartTotal(appData?.appData?.cartData);
    }, [appData?.appData?.cartData]);
    return (
        <React.Fragment>
            {windowWidth === "mobile" ? (
                <React.Fragment>
                    <PageHeader title="Personal Cart" hide={true}/>
                    <Footer />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Header />
                    <div className="col-12 d-inline-flex my-5">
                        <div className="container d-inline-flex">
                            <div className="col-12 d-inline-flex gap-4 align-items-start">
                                <div className="col-8 flex-shrink-1">
                                    <CartSummery cartData={cartData} />
                                </div>
                                <div className="col-4 flex-shrink-0">
                                    <OrderSummery checkoutTotal={checkoutTotal} checkoutSaving={checkoutSaving} />
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