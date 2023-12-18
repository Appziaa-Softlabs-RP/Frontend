import React from "react";
import styles from './OrderAddress.module.css';

export const OrderAddress = () => {
    return (
        <React.Fragment>
            <div className="col-12 d-inline-flex flex-column gap-3 p-3">
                <div className={`${styles.orderDetailBox} col-12 d-inline-flex flex-column p-3`}>
                    <h2 className={`${styles.orderDetailTitle} col-12 d-inline-block mb-2`}>Delivery Slot</h2>
                    <span className={`${styles.orderDescript} col-12 d-inline-flex`}></span>
                </div>
                <div className={`${styles.orderDetailBox} col-12 d-inline-flex flex-column p-3`}>
                    <h2 className={`${styles.orderDetailTitle} col-12 d-inline-block mb-2`}>Delivery Address</h2>
                    <span className={`${styles.orderDescript} col-12 d-inline-flex`}></span>
                </div>
                <div className={`${styles.orderDetailBox} col-12 d-inline-flex flex-column p-3`}>
                    <h2 className={`${styles.orderDetailTitle} col-12 d-inline-block mb-2`}>Invoice Details</h2>
                    <div className="col-12 d-inline-flex">
                        <span className={`${styles.orderDescript} col-12 d-inline-flex`}>Invoice No.</span>
                        <b className={`${styles.orderDescript} col-12 d-inline-flex`}></b>
                    </div>
                    <div className="col-12 d-inline-flex">
                        <span className={`${styles.orderDescript} col-12 d-inline-flex`}>Order No.</span>
                        <b className={`${styles.orderDescript} col-12 d-inline-flex`}></b>
                    </div>
                    <div className="col-12 d-inline-flex">
                        <span className={`${styles.orderDescript} col-12 d-inline-flex`}>Payment Mode</span>
                        <b className={`${styles.orderDescript} col-12 d-inline-flex`}></b>
                    </div>
                    <div className="col-12 d-inline-flex">
                        <span className={`${styles.orderDescript} col-12 d-inline-flex`}>Total Payment</span>
                        <b className={`${styles.orderDescript} col-12 d-inline-flex`}></b>
                    </div>
                    <div className="col-12 d-inline-flex">
                        <span className={`${styles.orderDescript} col-12 d-inline-flex`}>Coupon Discount</span>
                        <b className={`${styles.orderDescript} col-12 d-inline-flex`}></b>
                    </div>
                    <div className="col-12 d-inline-flex mt-3">
                        <span className={`${styles.amountLabel} col-12 d-inline-flex`}>Amount Payable</span>
                        <b className={`${styles.amountTotal} col-12 d-inline-flex justify-content-end`}></b>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}