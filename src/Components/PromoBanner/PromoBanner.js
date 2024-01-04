import React, { useEffect, useState } from "react";
import styles from './PromoBanner.module.css';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const PromoBanner = ({type, allPromoBanner}) => {
    const [allBanner, setAllBanner] = useState([]);

    useEffect(() => {
        if(type === 'Promo Banner') {
            setAllBanner(allPromoBanner?.payload_banner?.promobanner);
        }else if(type === 'Offers'){
            setAllBanner(allPromoBanner?.payload_banner?.offeroftheday);
        }
    }, []);
    return (
        <React.Fragment>
            {allBanner?.length > 0 && 
            <div className={`col-12 d-inline-flex flex-column p-3`}>
                <div className={`${type === 'Promo Banner' ? styles.categoryBox : type === 'Offers' ? styles.offersBox : ''} col-12 d-inline-flex flex-column p-3`}>
                    <h5 className={`${styles.exploreByCategoryHeader} col-12 d-inline-flex mt-0 mb-3`}>
                        {type === 'Promo Banner' ? 'Promo for you' : type === 'Offers' ? 'Offers Of The Day' : ''}
                    </h5>
                    <ReactOwlCarousel className={`${styles.bannerContainer} col-12 d-inline-block pb-4 owl-theme`} margin={10} loop={true} dots={false} items={1} stagePadding={15}>
                        {allBanner.map((item, index) => {
                            return (
                                <div className={styles.item} key={index}>
                                    <img src={item?.image} alt={item?.name} className="object-fit-cover col-12 d-inline-block" />
                                </div>
                            )
                        })}
                    </ReactOwlCarousel>
                </div>
            </div>
        }
        </React.Fragment>
    )
}