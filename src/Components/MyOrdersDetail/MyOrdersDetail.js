import React from "react";
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import { AppNotification } from "../../utils/helper";
import styles from './MyOrdersDetail.module.css';

export const MyOrdersDetail = ({orderDetail}) => {
    const appData = useApp();
    const userInfo = appData.appData.user;

    const cancelItem = (itemID, name) => {
        const payload = {
            company_id: parseInt(enviroment.COMPANY_ID),
            store_id: parseInt(enviroment.STORE_ID),
            customer_id: userInfo.customer_id,
            order_id:orderDetail.order_id,
            item_id:itemID
        }
        ApiService.orderItemCancel(payload).then((res) => {
            if(res.message === "Order item cancelled successfully."){
                AppNotification('Success', 'Your order has been canceled successfully', 'success');
            }else {
                AppNotification('Error', 'We are un-able to cancel your order. Please try later.', 'danger');
            }
        }).catch((err) => {
            AppNotification('Error', 'We are un-able to cancel your order. Please try later.', 'danger');
        });
    }
    return (
        <React.Fragment>
            {orderDetail.orderdetails.length > 0 && 
            <div className="col-12 d-inline-flex px-3 flex-column pt-0 p-3 mt-2">
                <h1 className={`${styles.orderItems} col-12 d-inline-flex mb-3`}>Items</h1>    
                {orderDetail.orderdetails.map((item, index) => {
                    return (
                        <div className={`${styles.orderBox} col-12 d-inline-flex flex-column rounded p-3 mb-3`} key={index}>
                            <h1 className={`${styles.orderLabel} col-12 d-inline-flex mb-2`}>Order ID: {orderDetail.order_id}</h1>
                            <div className="d-inline-flex col-12 justify-content-between gap-3">
                                <span className={`${styles.orderImag} flex-shrink-0 d-inline-flex`}>
                                    <img src={item?.image} alt={item?.name} className="h-100 w-100 object-fit-cover"/>
                                </span>
                                <div className="flex-grow-1 d-inline-flex flex-column gap-1">
                                    <span className={`${styles.orderItemName} col-12 d-inline-flex`}></span>
                                    <div className="col-12 d-inline-flex justify-content-between gap-3">
                                        <span className={`${styles.itemName} d-inline-flex`}><b>Item: {item?.product_name}</b></span>
                                        <span className={`${styles.itemPrice} flex-shrink-0 d-inline-flex`}><b>₹{item.total}</b></span>
                                    </div>
                                    <span className={`${styles.itemName} col-12 d-inline-flex gap-3`}><span>Qty:&nbsp;<b>({item?.quantity})</b></span><span>Item:&nbsp;<b>(1)</b></span></span>
                                </div>
                            </div>
                            <div className={`d-inline-flex flex-wrap gap-2 ps-5 col-12 mb-3 mt-3`}>
                                <span className={`${styles.assurityTabs} d-inline-flex align-items-center`}>Fastest Delivery</span>
                                <span className={`${styles.assurityTabs} d-inline-flex align-items-center`}>100% Genuine Product</span>
                            </div>
                            {item.cancel_status !== 1 &&
                                <React.Fragment>
                                    <div className={`${styles.progressTrack} col-12 d-inline-flex mt-2 mb-4 px-2`}>
                                        <ul className="list-unstyled col-12 d-inline-flex position-relative">
                                            <li className={`${styles.step} ${styles.step1} ${styles.stepActive} d-inline-flex justify-content-start position-relative col-3`}>
                                                <span className={`${styles.stepName} col-12 text-start position-absolute`}>Order placed</span>
                                            </li>
                                            <li className={`${styles.step} ${styles.step2} ${item.packed_action === 1 && styles.stepActive} d-inline-flex justify-content-start position-relative col-3`}>
                                                <span className={`${styles.stepName} col-12 text-center position-absolute`}>Item Packed</span>
                                            </li>
                                            <li className={`${styles.step} ${styles.step3} ${item.out_for_delivery_action === 1 && styles.stepActive} d-inline-flex justify-content-start position-relative col-3`}>
                                                <span className={`${styles.stepName} col-12 text-center position-absolute`}>Out&nbsp;for&nbsp;Delivery</span>
                                            </li>
                                            <li className={`${styles.step} ${styles.step4} ${item.delivered_action === 1 && styles.stepActive} d-inline-flex justify-content-start position-relative col-3`}>
                                                <span className={`${styles.stepName} col-12 text-end position-absolute`}>Delivered</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {
                                            !orderDetail?.is_shiprocket_shipment_created ?
                                                <div className="d-inline-flex justify-content-end col-12">
                                                    <span role="button" className={`${styles.reSchduleBtn} d-inline-flex align-items-center px-3`} onClick={() => cancelItem(item.item_id, item.name)}>Cancel Item</span>
                                                </div>
                                                : null
                                        }
                                </React.Fragment>
                            }
                        </div>
                    );
                })}
            </div>
            }
        </React.Fragment>
    )
}