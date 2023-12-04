import React from "react";
import styles from './HeroBanner.module.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const HeroBanner = () => {
    return (
        <React.Fragment>
            <div className={`${styles.heroBannerContainer} col-12 d-inline-flex p-3 mb-3`}>
                <OwlCarousel className={`${styles.bannerContainer} col-12 d-inline-flex pb-4 owl-theme`} margin={10} loop dots stagePadding={50}>
                    <div className={styles.item}>
                        <img src="" alt="" className="object-fit-cover col-12 d-inline-block" />
                    </div>
                </OwlCarousel>
            </div>
        </React.Fragment>
    );
}