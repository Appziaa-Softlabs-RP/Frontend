import React, { useEffect, useState } from "react";
import { CartSummery } from "../../Components/CartSummery/CartSummery";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { OrderSummery } from "../../Components/OrderSummery/OrderSummery";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { useApp } from "../../context/AppContextProvider";
import { DeliveryAddress } from "../../Components/DeliveryAddress/DeliveryAddress";
import ApiService from "../../services/ApiService";
import { enviroment } from "../../enviroment";

export const ShoppingCart = () => {
    const appData = useApp();
    const windowWidth = appData.appData.windowWidth;
    const [cartData, setCartData] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [checkoutTotal, setCheckoutTotal] = useState(0);
    const [checkoutSaving, setCheckoutSaving] = useState(0);
    const [deliveryCost, setDelivryCost] = useState(0);
    const [orderStatus, setOrderStatus] = useState('Cart');
    const [shopcartID, setShopCartId] = useState('');

    const setCartTotal = (cartData) => {
        let allTotal = 0;
        let allSaving = 0;
        if (cartData?.length) {
            cartData?.map((item) => {
                let qtyTotal = item?.quantity * item?.selling_price;
                allTotal = allTotal + qtyTotal;
                let saveTotal = item?.mrp - item?.selling_price;
                allSaving = allSaving + saveTotal;
            });
            setCheckoutTotal(allTotal);
            setCheckoutSaving(allSaving);

            if(userInfo?.customer_id !== undefined && userInfo?.customer_id !== null){
                const payload = {
                    company_id: parseInt(enviroment.COMPANY_ID),
                    store_id: parseInt(enviroment.STORE_ID),
                    customer_id: userInfo?.customer_id,
                    sub_total: allTotal
                }
                ApiService.getDeliveryCost(payload).then((res) => {
                    if (res.message === "Delivery Details.") {
                        setDelivryCost(res?.payload_deliveryCharge?.delivery_charge);
                    }
                }).catch((err) => {
        
                });
            }
        }
    }

    useEffect(() => {
        setCartData(appData?.appData?.cartData);
        setCartTotal(appData?.appData?.cartData);
    }, []);

    useEffect(() => {
        setCartTotal(appData?.appData?.cartData);
        setUserInfo(appData.appData.user);
    }, [appData?.appData]);
    return (
        <React.Fragment>
            {windowWidth === "mobile" ? (
                <React.Fragment>
                    <PageHeader title="Personal Cart" hide={true} />
                    <Footer />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Header />
                    <div className="col-12 d-inline-flex my-5">
                        <div className="container d-inline-flex">
                            <div className="col-12 d-inline-flex gap-5 align-items-start">
                                <div className="col-9 flex-shrink-1">
                                    {orderStatus === 'Cart' ? (
                                        <CartSummery setOrderStatus={setOrderStatus} cartData={cartData} setShopCartId={setShopCartId} />
                                    ) : orderStatus === 'Place Order' ? (
                                        <DeliveryAddress checkoutTotal={checkoutTotal} checkoutSaving={checkoutSaving} deliveryCost={deliveryCost} shopcartID={shopcartID} />
                                    ) : null}
                                </div>
                                <div className="col-3 flex-shrink-0">
                                    <OrderSummery checkoutTotal={checkoutTotal} checkoutSaving={checkoutSaving} deliveryCost={deliveryCost} />
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