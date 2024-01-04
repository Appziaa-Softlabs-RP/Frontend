import React from "react";
import styles from './LoginPopup.module.css';

export const LoginPopup = () => {
    return (
        <React.Fragment>
            <div className={`${styles.loginLayer} position-fixed top-0 bottom-0 start-0 end-0`}></div>
            <div className={`position-fixed top-0 bottom-0 start-0 end-0 d-inline-flex align-items-center justify-content-center`}>
                <div className={`${styles.loginContainer} col-6 d-inline-block`}>
                    <div class="col-4">
                        <div className={`${styles.loginGradientBox} col-12 d-inline-flex flex-column align-items-center gap-3`}>
                            <div className="col-12 d-inline-flex flex-column">
                                <h2>Original Products</h2>
                                <p>All of the toys on our site have been obtained straight from the manufacturers.</p>
                            </div>
                            <div className="col-12 d-inline-flex flex-column">
                                <h2>Easy Returns</h2>
                                <p>Didn’t the products? Don't worry, you may return the items for a full refund within 7 days.</p>
                            </div>
                            <div className="col-12 d-inline-flex flex-column">
                                <h2>Rewards</h2>
                                <p>Get extra off on return purchase</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-8">
                        <span className={`${styles.closeLogin} position-absolute d-inline-flex align-items-center justify-content-center`}>&times;</span>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}