import React from "react";
import styles from "./OrderAddress.module.css";

export const OrderAddress = ({ orderDetail }) => {
    return (
        <React.Fragment>
            <div className="col-12 d-inline-flex flex-column gap-3 p-3">
                {/* <div className={`${styles.orderDetailBox} col-12 d-inline-flex flex-column p-3`}>
                    <h2 className={`${styles.orderDetailTitle} col-12 d-inline-block mb-2`}>Delivery Slot</h2>
                    <span className={`${styles.orderDescript} col-12 d-inline-flex`}>{orderDetail.slot_date} {orderDetail.start_time} to {orderDetail.end_time}</span>
                </div> */}
                <div
                    className={`${styles.orderDetailBox} col-12 d-inline-flex flex-column p-3`}
                >
                    <h2
                        className={`${styles.orderDetailTitle} col-12 d-inline-block mb-2 ms-0`}
                    >
                        Delivery Address
                    </h2>
                    <p>
                        <b className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            {orderDetail.delivered_name}
                        </b>
                    </p>
                    <span className={`${styles.orderDescript} col-12 d-inline-flex`}>
                        {orderDetail.delivered_city} - {orderDetail.delivered_state}
                    </span>
                    <span className={`${styles.orderDescript} col-12 d-inline-flex`}>
                        {orderDetail.delivered_house_no} - {orderDetail.delivered_pincode}
                    </span>
                    <span className={`${styles.orderDescript} col-12 d-inline-flex`}>
                        {orderDetail.delivered_landmark}
                        {
                            orderDetail.delivered_landmark && (
                                <>-</>
                            )
                        }
                        {orderDetail.delivered_street}
                    </span>

                    <p>
                        <b className={`${styles.orderDescript} d-inline-flex`}>
                            Phone Number
                        </b> {orderDetail.delivered_contact}
                    </p>

                </div>
                <div
                    className={`${styles.orderDetailBox} col-12 d-inline-flex flex-column p-3`}
                >
                    <h2
                        className={`${styles.orderDetailTitle} col-12 d-inline-block mb-2 ms-0`}
                    >
                        Invoice Details
                    </h2>
                    <div className="col-12 d-inline-flex">
                        <span className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            Invoice No.
                        </span>
                        <b className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            {orderDetail.transection_id}
                        </b>
                    </div>
                    <div className="col-12 d-inline-flex">
                        <span className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            Order Date
                        </span>
                        <b className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            {orderDetail.order_date?.split(" ")[0]}
                        </b>
                    </div>
                    <div className="col-12 d-inline-flex">
                        <span className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            Order No.
                        </span>
                        <b className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            {orderDetail.order_string}
                        </b>
                    </div>
                    <div className="col-12 d-inline-flex items-center">
                        <span className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            Payment Mode
                        </span>
                        <b
                            className={`${styles.orderDescript} col-6 d-inline-flex text-uppercase`}
                            style={{
                                background: "green",
                                color: "white",
                                padding: "3px",
                                width: "fit-content",
                                borderRadius: "5px",
                            }}
                        >
                            {orderDetail.paymentmode}
                        </b>
                    </div>
                    <div className="col-12 d-inline-flex">
                        <span className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            Total Payment
                        </span>
                        <b className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            ₹{orderDetail.totalsellingprice}
                        </b>
                    </div>
                    <div className="col-12 d-inline-flex">
                        <span className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            Delivery Charge
                        </span>
                        <b className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            ₹{orderDetail.deliveryCharge}
                        </b>
                    </div>
                    <div className="col-12 d-inline-flex">
                        <span className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            Coupon Discount
                        </span>
                        <b className={`${styles.orderDescript} col-6 d-inline-flex`}>
                            ₹{orderDetail.couponValue}
                        </b>
                    </div>
                    <div className="col-12 d-inline-flex mt-3">
                        <span className={`${styles.amountLabel} col-6 d-inline-flex`}>
                            Amount Payable
                        </span>
                        <b
                            className={`${styles.amountTotal} col-6 d-inline-flex justify-content-start`}
                        >
                            ₹{orderDetail.total_paid_amount}
                        </b>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
