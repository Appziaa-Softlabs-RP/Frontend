import React, {useEffect, useState} from "react";
import { MyOrdersDetail } from "../../Components/MyOrdersDetail/MyOrdersDetail";
import { OrderAddress } from "../../Components/OrderAddress/OrderAddress";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import ApiService from "../../services/ApiService";
import { useLocation } from "react-router-dom";

export const OrderDetails = () => {
    const location = useLocation();
    const [orderDetail, setOrderDetail] = useState('');

    useEffect(() => {
        let orderDetail = location.state.payload;
        ApiService.getOrderDetail(orderDetail).then((res) => {
            setOrderDetail(res.payload_orderDetails);
        }).catch((err) => {

        });
    }, []);
    return (
        <React.Fragment>
            <PageHeader title="Order Detail" />
            {orderDetail !== '' && 
                <React.Fragment>
                    <OrderAddress orderDetail={orderDetail} />
                    <MyOrdersDetail orderDetail={orderDetail} />
                </React.Fragment>
            }
        </React.Fragment>
    )
}