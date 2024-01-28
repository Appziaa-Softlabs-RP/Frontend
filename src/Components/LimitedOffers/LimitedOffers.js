import React, { useEffect, useState } from "react";
import styles from './LimitedOffers.module.css';
import ApiService from "../../services/ApiService";
import { enviroment } from "../../enviroment";
import { useApp } from "../../context/AppContextProvider";
import ReactOwlCarousel from "react-owl-carousel";
import { ProductCard } from "../ProductCard/ProductCard";
import superSaving from "../../assets/images/super-savings.jpg";

export const LimitedOffers = () => {
    const [offerProd, setOfferProd] = useState([]);
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;

    useEffect(() => {
        const payload = {
            store_id: parseInt(enviroment.STORE_ID)
        }
        ApiService.HotDealsProduct(payload).then((res) => {
            if(res.message === "Fetch successfully."){
                setOfferProd(res?.payload_hotDeals?.product);
            }
        }).catch((err) => {

        });
    }, []);
    return (
        <React.Fragment>
            {offerProd?.length > 0 &&
                <React.Fragment>
                    {windowWidth === "mobile" ? (
                        <div className="col-12 d-inline-flex">
                            <div className={`p-3 container d-flex flex-column`}>
                                <h5 className={`${styles.exploreByCategoryHeader} mb-2 ps-3 d-inline-block col-12`}>Hot Deals</h5>
                                <div className={`${styles.limitedOfferBox} col-12 d-inline-flex`}>
                                    <div className="col-12 d-inline-flex flex-wrap align-items-stretch">
                                        {offerProd?.map((item, indx) => {
                                            return (
                                                <div className="col-6 px-1 mb-3">
                                                    <ProductCard item={item} index={indx} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : windowWidth === "desktop" ? (
                        <div className="col-12 d-inline-flex">
                            <div className={`${windowWidth === "mobile" && 'p-3'} container d-flex flex-column`}>
                                <div className={`${styles.limitedOfferBox} col-12 d-inline-flex mt-4 p-3 gap-3 align-items-stretch`}>
                                    <div className="col-3 d-inline-flex overflow-hidden">
                                        <img src={superSaving} className="object-fit-cover col-12 d-inline-block"/>
                                    </div>
                                    <div className="col-9 d-inline-flex flex-column">
                                        <h5 className={`${styles.categoryHeaderTitle} col-12 d-inline-flex mb-0 position-relative`}>Limited Time Offers</h5>
                                        <ReactOwlCarousel className={`limitedOfferSlider col-12 d-inline-block owl-theme`} margin={10} loop={false} dots={false} nav={true} items={`${windowWidth === 'desktop' ? 3 : windowWidth === 'mobile' ? 1 : ''}`} stagePadding={`${windowWidth === 'desktop' ? 20 : windowWidth === 'mobile' ? 10 : ''}`}>
                                            {offerProd?.map((item, indx) => {
                                                return (
                                                    <ProductCard item={item} key={indx} index={indx} />
                                                )
                                            })}
                                        </ReactOwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ): ('')}
                </React.Fragment>
            }
        </React.Fragment>
    )
}