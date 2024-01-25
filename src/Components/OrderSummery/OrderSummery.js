import React, { useEffect, useState } from "react";
import styles from './OrderSummery.module.css';

export const OrderSummery = ({checkoutTotal, checkoutSaving}) => {
    const [finalTotal, setFinalTotal] = useState(0);

    useEffect(() => {
        setFinalTotal(checkoutTotal + 499);
    }, [checkoutTotal]);
    return (
        <React.Fragment>
            <div className={`${styles.orderSummryBox} col-12 d-inline-flex flex-column p-3`}>
                <h2 className={`${styles.summeryTitle} col-12 d-inline-flex`}>Order Summery</h2>
                <div className="col-12 d-inline-flex flex-column">
                    <div className="col-12 d-inline-flex align-items-center justify-content-between">
                        <div className={`${styles.subTotalLabel} d-inline-flex`}>
                            Subtotal
                        </div>
                        <div className={`${styles.subTotalPrice} d-inline-flex`}>
                            ₹{checkoutTotal}
                        </div>
                    </div>
                    <div className="col-12 d-inline-flex align-items-center justify-content-between">
                        <div className={`${styles.subTotalLabel} d-inline-flex`}>
                            Delivery
                        </div>
                        <div className={`${styles.subTotalSaving} d-inline-flex`}>
                            ₹499
                        </div>
                    </div>
                </div>
                <div className="col-12 d-inline-flex flex-column">
                    <div className="col-12 d-inline-flex align-items-center justify-content-between">
                        <div className={`${styles.finalTotalLabel} d-inline-flex`}>Total Amount Payable</div>
                        <div className={`${styles.subTotalPrice} d-inline-flex`}>
                            ₹{finalTotal}
                        </div>
                    </div>
                    <div className="col-12 d-inline-flex align-items-center justify-content-between">
                        <div className={`${styles.finalSavingLabel} d-inline-flex`}>Your Total Saving</div>
                        <div className={`${styles.subTotalSaving} d-inline-flex`}>₹{checkoutSaving}</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}