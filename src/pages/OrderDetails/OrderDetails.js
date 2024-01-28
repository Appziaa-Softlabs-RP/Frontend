import React, {useEffect, useState} from "react";
import { MyOrdersDetail } from "../../Components/MyOrdersDetail/MyOrdersDetail";
import { OrderAddress } from "../../Components/OrderAddress/OrderAddress";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import ApiService from "../../services/ApiService";
import { useLocation } from "react-router-dom";
import { useApp } from "../../context/AppContextProvider";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { MyAccountMenu } from "../MyAccount/MyAccount";

export const OrderDetails = () => {
    const location = useLocation();
    const [orderDetail, setOrderDetail] = useState('');
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;

    useEffect(() => {
        let orderDetail = location.state.payload;
        ApiService.getOrderDetail(orderDetail).then((res) => {
            setOrderDetail(res.payload_orderDetails);
        }).catch((err) => {

        });
    }, []);
    return (
        <React.Fragment>
            {windowWidth === "mobile" ? (
                <React.Fragment>
                    <PageHeader title="Order Detail" />
                    {orderDetail !== '' && 
                        <React.Fragment>
                            <OrderAddress orderDetail={orderDetail} />
                            <MyOrdersDetail orderDetail={orderDetail} />
                        </React.Fragment>
                    }
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Header />
                    <div className="col-12 d-inline-flex mt-4">
                        <div className="container">
                            <div className="d-flex gap-3 col-12 align-items-start">
                                <MyAccountMenu />
                                <div className="d-flex flex-column flex-grow-1">
                                    {orderDetail !== '' && 
                                        <React.Fragment>
                                            <OrderAddress orderDetail={orderDetail} />
                                            <MyOrdersDetail orderDetail={orderDetail} />
                                        </React.Fragment>
                                    }
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