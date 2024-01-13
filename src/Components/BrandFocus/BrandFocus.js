import React, { useEffect, useState } from "react";
import styles from './BrandFocus.module.css';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";

export const BrandFocus = () => {
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;
    const [brandData, setBrandData] = useState([]);

    useEffect(() => {
        const payload = {
            company_id: enviroment.COMPANY_ID
        }
        ApiService.brandInFocus(payload).then((res) => {
            setBrandData(res.payload_brandOffer.brand_offer);
        }).catch((err) => {

        });
    }, []);
    return (
        <React.Fragment>
            {brandData?.length > 0 && 
                <div className={`col-12 p-3 mt-4 d-inline-flex`}>
                    <div className={`${windowWidth === "mobile" && 'p-0'} container`}>
                        <div className={`col-12 p-3 d-inline-flex flex-column`}>
                            <h6 className={`${styles.brandInTitle} col-12 mb-3 mt-0`}>{windowWidth === 'mobile' ? 'Brands in Focus' : '✨ Brands in Focus ✨'}</h6>
                            <ReactOwlCarousel className={`col-12 pb-4 owl-theme`} margin={10} stagePadding={20} dots={false} items={`${windowWidth === 'mobile' ? 1 : 5 }`} loop={true}>
                                {brandData?.map((item, index) => {
                                    return (
                                        <div key={index} className={`${styles.brandItemCard} item flex-shrink-1 d-inline-block position-relative text-decoration-none col-12`}>
                                            <span className={`${styles.brandItemPhotoBox} position-relative col-12 d-inline-block`}>
                                                <img src={item.offer_image} alt="" className="object-contain p-0 col-12 d-inline-block position-absolute h-100 start-0 top-0"/>
                                            </span>
                                            <div className={`${styles.brandTextBlock} position-relative col-12 p-0 d-inline-flex flex-column align-items-center`}>
                                                <img src={item.brand_icon} alt="" className="object-contain p-0 col-12 d-inline-block"/>
                                                <label className={`${styles.productPromoteText} col-12 p-0 text-center mb-2`}>{item.brand_offer}</label>
                                                <div className="col-12 p-0 d-inline-flex justify-content-center mb-4"><span className={`${styles.productShopText} text-uppercase d-inline-block text-center`}>Shop Now</span></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </ReactOwlCarousel>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}