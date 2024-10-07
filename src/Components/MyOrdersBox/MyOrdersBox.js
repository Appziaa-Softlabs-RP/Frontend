import React, { useState, useEffect } from "react";
import styles from './MyOrdersBox.module.css';
import ApiService from "../../services/ApiService";
import { enviroment } from "../../enviroment";
import { useApp } from "../../context/AppContextProvider";
import { useNavigate } from "react-router-dom";

export const MyOrdersBox = () => {
    const [orders, allOrder] = useState([]);
    const appData = useApp();
    const navigate = useNavigate();
    const userInfo = appData?.appData?.user;

    const openOrderDetail = (id) => {
        const payload = {
            company_id: parseInt(enviroment.COMPANY_ID),
            store_id: parseInt(enviroment.STORE_ID),
            customer_id: userInfo?.customer_id,
            order_id: id
        }
        navigate('/order-details', { state: { payload: payload } });
    }

    useEffect(() => {
        if (userInfo?.customer_id) {
            const payload = {
                company_id: parseInt(enviroment.COMPANY_ID),
                store_id: parseInt(enviroment.STORE_ID),
                customer_id: userInfo?.customer_id
            }
            ApiService.orderList(payload).then((res) => {
                allOrder(res?.payload_orderList);
            }).catch((err) => {

            });
        }
    }, []);
    return (
        <React.Fragment>
            <div className="col-12 d-inline-flex px-3 flex-column gap-2 p-3">
                {orders?.length > 0 && orders.map((item, index) => {
                    return (
                        <div className={`${styles.orderBox} col-12 d-inline-flex flex-column rounded p-2`} key={index}>
                            <h1 className={`${styles.orderLabel} col-12 d-inline-flex mb-2`}>Order ID: {item?.order_id}</h1>
                            <div className="d-inline-flex col-12 justify-content-between gap-3">
                                <span className={`${styles.orderImag} flex-shrink-0 d-inline-flex`}>
                                    <img src={item?.image} alt={item?.name} className="h-100 w-100 object-fit-cover" />
                                </span>
                                <div className="flex-grow-1 d-inline-flex flex-column gap-1">
                                    <span className={`${styles.orderItemName} col-12 d-inline-flex`}></span>
                                    <div className="col-12 d-inline-flex justify-content-between gap-2">
                                        <span className={`${styles.itemName} d-inline-flex`}><b>Item: {item?.item_name}</b></span>
                                        <span className={`${styles.itemPrice} flex-shrink-0 d-inline-flex`}><b>₹{item.total_paid_amount}</b></span>
                                    </div>
                                    <span className={`${styles.itemName} col-12 d-inline-flex`}><b>Seller: {item?.store_name}</b></span>
                                    <span className={`${styles.itemName} col-12 d-inline-flex`}><b>Ordered On: {item?.ordered_on}</b></span>
                                    {/* <span className={`${styles.itemName} col-12 d-inline-flex`}><b>Delivery Date: {item?.delivery_date}</b></span> */}
                                </div>
                            </div>
                            <div className={`d-inline-flex flex-wrap gap-2 ps-5 col-12 mb-3 mt-3`}>
                                <span className={`${styles.assurityTabs} d-inline-flex align-items-center`}>Fastest Delivery</span>
                                <span className={`${styles.assurityTabs} d-inline-flex align-items-center`}>100% Genuine Product</span>
                            </div>
                            <div className={`col-12 d-inline-flex justify-content-end gap-2`}>
                                <span className={`${styles.orderDetailBtn} d-inline-flex align-items-center px-3`} role="button" onClick={() => openOrderDetail(item.order_id)}>View Details</span>
                                {/* <span role="button" className={`${styles.reSchduleBtn} d-inline-flex align-items-center px-3`}>Reschedule</span> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    )
}