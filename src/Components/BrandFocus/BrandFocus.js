import React from "react";
import styles from './BrandFocus.module.css';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const BrandFocus = () => {
    return (
        <React.Fragment>
            <div className={`col-12 p-3 mt-4 d-inline-block`}>
                <div className={`col-12 p-3 d-inline-block`}>
                    <h6 className={`${styles.brandInTitle} col-12 mb-3 mt-0`}>Brands in Focus</h6>
                    <ReactOwlCarousel className={`${styles.bannerContainer} col-12 pb-4 owl-theme`} margin={15} stagePadding={10} item={1}>
                        
                        <div className={`${styles.brandItemCard} item flex-shrink-1 d-inline-block position-relative text-decoration-none col-12`}>
                            <span className={`${styles.brandItemPhotoBox} position-relative col-12 d-inline-block`}>
                                <img src="" alt="" className="object-contain p-0 col-12 d-inline-block position-absolute h-100 start-0 top-0"/>
                            </span>
                            <div className={`${styles.brandTextBlock} position-relative col-12 p-0 d-inline-flex flex-column align-items-center`}>
                                <img src="" alt="" className="object-contain p-0 col-12 d-inline-block"/>
                                <label className={`${styles.productPromoteText} col-12 p-0 text-center`}> </label>
                                <div className="col-12 p-0 d-inline-flex justify-content-center mb-2"><span className={`${styles.productShopText} text-uppercase d-inline-block text-center`}>Shop Now</span></div>
                            </div>
                        </div>

                    </ReactOwlCarousel>
                </div>
            </div>
        </React.Fragment>
    )
}