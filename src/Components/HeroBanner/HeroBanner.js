import React,{ useEffect, useState } from "react";
import styles from './HeroBanner.module.css';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ApiService from "../../services/ApiService";
import { enviroment } from "../../enviroment";

export const HeroBanner = () => {
    const [allBanner, setAllBanner] = useState([]);

    const fetchMobileBanner = (payload) => {
        ApiService.banner(payload).then((res) => {
            setAllBanner(res.payload_banner?.banner);
        }).catch((err) => {
            console.log(err)
        });
    }

    useEffect(() => {
        const payload = {
            store_id: enviroment.STORE_ID
        };
        fetchMobileBanner(payload);
    }, []);
    return (
        <React.Fragment>
            <div className={`${styles.heroBannerContainer} col-12 d-inline-flex p-3`}>
                <ReactOwlCarousel className={`${styles.bannerContainer} col-12 d-inline-block owl-theme`} margin={5} loop={true} dots={true} stagePadding={10} items={1}>
                    {allBanner.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                {item?.mobile_image !== '' &&
                                <div className={styles.item}>
                                    <img src={item?.mobile_image} alt={item?.name} className="object-fit-cover col-12 d-inline-block" />
                                </div>}
                            </React.Fragment>
                        )
                    })}
                </ReactOwlCarousel>
            </div>
        </React.Fragment>
    );
}