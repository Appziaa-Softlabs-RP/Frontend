import React from "react";
import styles from './PromoBanner.module.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const PromoBanner = () => {
    return (
        <React.Fragment>
            <div className="col-12 d-inline-flex flex-column p-3">
                <div className={`${styles.categoryBox} col-12 d-inline-flex flex-column p-3`}>
                    <h5 className={`${styles.exploreByCategoryHeader} col-12 d-inline-flex mt-0 mb-3`}>Promo for you</h5>
                    <OwlCarousel className={`${styles.bannerContainer} col-12 d-inline-flex pb-4 owl-theme`} margin={10} loop dots stagePadding={50}>
                        <div className={styles.item}>
                            <img src="" alt="" className="object-fit-cover col-12 d-inline-block" />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </React.Fragment>
    )
}