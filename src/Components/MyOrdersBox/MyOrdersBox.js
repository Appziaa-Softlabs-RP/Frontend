import React from "react";
import styles from './MyOrdersBox.module.css';

export const MyOrdersBox = () => {
    return (
        <React.Fragment>
            <div className="col-12 d-inline-flex px-3 flex-column gap-2">
                <div className={`${styles.orderBox} col-12 d-inline-flex flex-column`}>
                    <h1 className={`${styles.orderLabel} col-12 d-inline-flex`}></h1>
                    <div className="d-inline-flex col-12 justify-content-between">
                        <span className={`${styles.orderImag} flex-shrink-0 d-inline-flex`}>
                            <img src="" alt="" className="object-fit-contain"/>
                        </span>
                        <div className="flex-grow-1 d-inline-flex flex-column gap-1">
                            <span className={`${styles.itemName} col-12 d-inline-flex`}></span>
                            <span className={`${styles.itemName} col-12 d-inline-flex`}><b>Item: </b></span>
                            <span className={`${styles.itemName} col-12 d-inline-flex`}><b>Seller: </b></span>
                            <span className={`${styles.itemName} col-12 d-inline-flex`}><b>Ordered On: </b></span>
                            <span className={`${styles.itemName} col-12 d-inline-flex`}><b>Delivery Date: </b></span>
                        </div>
                        <span className={`${styles.itemPrice} flex-shrink-0 d-inline-flex`}><b>RS. </b></span>
                    </div>
                    <div className={`d-inline-flex flex-wrap gap-2 ps-5 col-12`}>
                        <span className={`${styles.assurityTabs} d-inline-flex align-items-center`}>Fastest Delivery</span>
                        <span className={`${styles.assurityTabs} d-inline-flex align-items-center`}>100% Genuine Product</span>
                    </div>
                    <div className={`col-12 d-inline-flex justify-content-end`}>
                        <span className={`${styles.orderDetailBtn} d-inline-flex align-items-center`}>View Details</span>
                        <span className={`${styles.reSchduleBtn} d-inline-flex align-items-center`}>Reschedule</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}