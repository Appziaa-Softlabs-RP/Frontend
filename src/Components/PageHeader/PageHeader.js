import React from "react";
import { BackArrowIcon, CartIcon, SearchIcon } from "../siteIcons";
import styles from './PageHeader.module.css';

export const PageHeader = ({title}) => {
    return (
        <React.Fragment>
            <div className={`${styles.PageHeader} col-12 d-inline-flex gap-2`}>
                <div className={`${styles.backBox} d-inline-flex align-items-center justify-content-center flex-shrink-0`}>
                    <BackArrowIcon color="#FFF" />
                </div>
                <label className={`${styles.currentName} d-inline-flex`}>{title}</label>
                <div className={`${styles.backBox} d-inline-flex align-items-center justify-content-center flex-shrink-0`}>
                    <SearchIcon color="#FFF" />
                </div>
                <div className={`${styles.backBox} d-inline-flex align-items-center justify-content-center flex-shrink-0`}>
                    <CartIcon color="#FFF" />
                    <span className={`${styles.cartQtyCount} d-inline-flex align-items-center justify-content-center text-center position-absolute align-top`}>0</span>
                </div>
            </div>
        </React.Fragment>
    )
}