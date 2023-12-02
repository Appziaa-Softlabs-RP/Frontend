import React, {useState} from "react";
import styles from './Header.module.css';
import { MenuIcons, CartIcon } from "../siteIcons";
import siteLogo from '../../assets/images/site_logo.png';

export const Header = () => {
    const [cartCount, setCartCount] = useState(0);
    const [searchProd, setSearchProd] = useState('');

    return (
        <React.Fragment>
            <div className={`${styles.siteHeader} col-12 d-inline-flex flex-column gap-3`}>
                <div className={`col-12 d-inline-flex align-items-center`}>
                    <span className={`${styles.menuIconBox} d-inline-flex align-items-center justify-content-center`}>
                        <MenuIcons color={process.env.REACT_APP_SECONDARY_COLOR} />
                    </span>
                    <span className={`${styles.siteLogoBox} d-inline-flex align-items-center justify-content-center m-auto`}>
                        <img src={siteLogo} alt="Logo" className="object-fit-contain" />
                    </span>
                    <span className={`${styles.cartIconBox} d-inline-flex align-items-center justify-content-center position-relative`}>
                        <span className={`${styles.cartCount} position-absolute d-inline-flex align-items-center`}>{cartCount}</span>
                        <CartIcon color={process.env.REACT_APP_SECONDARY_COLOR} />
                    </span>
                </div>
                <div className="col-12 d-inline-flex position-relative px-3">
                    <input type="text" placeholder={process.env.REACT_APP_SEARCH_PLACEHOLDER} className={`${styles.searchProdInput} col-12 d-inline-block`} value={searchProd} onChange={(e) => setSearchProd(e.target.value)} />
                </div>
            </div>
        </React.Fragment>
    )
}