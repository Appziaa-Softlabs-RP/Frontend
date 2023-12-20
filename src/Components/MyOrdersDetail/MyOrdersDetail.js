import React, {useState, useEffect} from "react";
import styles from './MyOrdersDetail.module.css';
import ApiService from "../../services/ApiService";
import { enviroment } from "../../enviroment";
import { useApp } from "../../context/AppContextProvider";
import { useNavigate } from "react-router-dom";

export const MyOrdersDetail = () => {
    const [orders, allOrder] = useState([]);
    const appData = useApp();
    const navigate = useNavigate();
    const userInfo = JSON.parse(appData.appData.user);

    useEffect(() => {
        if(userInfo?.user_id !== ''){
            const payload = {
                company_id:enviroment.COMPANY_ID,
                store_id: enviroment.STORE_ID,
                customer_id:userInfo?.user_id
            }
            ApiService.orderList(payload).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        }
    }, []);
    return (
        <React.Fragment>
            <div className="col-12 d-inline-flex px-3 flex-column gap-2 pt-0 p-3">
                <h1 className={`${styles.orderItems} col-12 d-inline-flex mb-2`}>Items</h1>
                <div className={`${styles.orderBox} col-12 d-inline-flex flex-column rounded p-2`}>
                    <h1 className={`${styles.orderLabel} col-12 d-inline-flex mb-2`}>Order ID: </h1>
                    <div className="d-inline-flex col-12 justify-content-between gap-3">
                        <span className={`${styles.orderImag} flex-shrink-0 d-inline-flex`}>
                            <img src="" alt="" className="h-100 w-100 object-fit-cover"/>
                        </span>
                        <div className="flex-grow-1 d-inline-flex flex-column gap-1">
                            <span className={`${styles.orderItemName} col-12 d-inline-flex`}></span>
                            <div className="col-12 d-inline-flex justify-content-between">
                                <span className={`${styles.itemName} d-inline-flex`}><b>Item: </b></span>
                                <span className={`${styles.itemPrice} flex-shrink-0 d-inline-flex`}><b>RS. </b></span>
                            </div>
                            <span className={`${styles.itemName} col-12 d-inline-flex`}><b>Seller: </b></span>
                            <span className={`${styles.itemName} col-12 d-inline-flex`}><b>Ordered On: </b></span>
                            <span className={`${styles.itemName} col-12 d-inline-flex`}><b>Delivery Date: </b></span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}