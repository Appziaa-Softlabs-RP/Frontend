import React,{ useEffect, useState } from "react";
import styles from './HeroBanner.module.css';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ApiService from "../../services/ApiService";
import { enviroment } from "../../enviroment";
import { useApp } from "../../context/AppContextProvider";

export const HeroBanner = () => {
    const [allBanner, setAllBanner] = useState([]);
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;

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
            {windowWidth === "mobile" ? (
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
            ): windowWidth === "desktop" ? (
                <div className={`col-12 d-inline-flex`}>
                    <ReactOwlCarousel className={`${styles.desktopBanner} col-12 d-inline-block owl-theme`} margin={0} loop={true} dots={false} nav={true} stagePadding={0} items={1}>
                        {allBanner.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {item?.image !== '' &&
                                    <div className={styles.item}>
                                        <img src={item?.image} alt={item?.name} className="object-fit-cover col-12 d-inline-block" />
                                    </div>}
                                </React.Fragment>
                            )
                        })}
                    </ReactOwlCarousel>
                </div>
            ): ('')}
        </React.Fragment>
    );
}