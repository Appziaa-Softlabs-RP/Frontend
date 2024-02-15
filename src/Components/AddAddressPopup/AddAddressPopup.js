import React from "react";
import { AddAddressForm } from "../AddAddressForm/AddAddressForm";
import styles from './AddAddressPopup.module.css';

export const AddAddressPopup = () => {
    return (
        <React.Fragment>
            <div className={`${styles.addresssLayerBox} position-fixed top-0 bottom-0 start-0 end-0 d-inline-flex align-items-center justify-content-center`}>
                <div className={`${styles.addressContainer} d-flex m-auto position-relative`}>
                    <span className={`${styles.closeLogin} position-absolute d-inline-flex align-items-center justify-content-center`} role="button" onClick={() => hideLoginPop(false)}>&times;</span>
                    <AddAddressForm />
                </div>
            </div>
        </React.Fragment>
    );
}