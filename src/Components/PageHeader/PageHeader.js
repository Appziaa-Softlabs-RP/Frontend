import React from "react";
import { BackArrowIcon, CartIcon, SearchIcon } from "../siteIcons";
import styles from './PageHeader.module.css';
import { useNavigate } from "react-router-dom";

export const PageHeader = ({title, hide}) => {
    const navigate = useNavigate();

    const openCart = () => {
        navigate('/checkout')
    }
    return (
        <React.Fragment>
            <div className={`${styles.PageHeader} col-12 d-inline-flex gap-2`}>
                <div className={`${styles.backBox} d-inline-flex align-items-center justify-content-center flex-shrink-0`} onClick={() => navigate(-1)}>
                    <BackArrowIcon color="#FFF" />
                </div>
                <div className="d-inline-flex align-items-center mw-100 flex-shrink-1 col-6 me-auto">
                    <label className={`${styles.currentName} text-truncate col-12 d-inline-block`}>{title}</label>
                </div>
                <div className={`${hide === true ? 'd-none' : 'd-inline-flex'} align-items-center`}>
                    <div className={`${styles.backBox} d-inline-flex align-items-center justify-content-center flex-shrink-0`}>
                        <SearchIcon color="#FFF" />
                    </div>
                    <div className={`${styles.backBox} d-inline-flex align-items-center justify-content-center flex-shrink-0`} onClick={() => openCart()}>
                        <CartIcon color="#FFF" />
                        <span className={`${styles.cartQtyCount} d-inline-flex align-items-center justify-content-center text-center position-absolute align-top`}>0</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}