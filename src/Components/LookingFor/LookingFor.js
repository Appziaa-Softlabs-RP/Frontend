import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContextProvider";
import styles from './LookingFor.module.css';

import { useAppStore } from "../../store";
import { enviroment } from "../../enviroment";
import { LookingForBannerLoader } from "../Loader/Loader";


export const LookingFor = () => {
    const categories = useAppStore(state => state.categories);
    const [loading, setLoading] = useState(true);
    const appData = useApp();
    const navigate = useNavigate();
    let windowWidth = appData.appData.windowWidth;

    const subCatProduts = (id, name, verticalId) => {
        const payload = {
            store_id: parseInt(enviroment.STORE_ID),
            category_id: id
        }
        let category = name?.replaceAll("[^A-Za-z0-9]", "-");
        navigate(`/store-product/${category}`, { state: { payload: payload, verticalId: verticalId } });
    }

    useEffect(() => {
        if (categories.length > 0) {
            console.log('verticalId ',categories);
        setLoading(false);
        }
    }, [categories]);

    return (
        <React.Fragment>
            {loading ? (
                <LookingForBannerLoader />
            ) :  (
                <div className={`${styles.shopAgeBox} px-3 col-12 d-inline-flex mb-3`}>
                    <div className={`${windowWidth === "mobile" && 'p-0'} container d-flex flex-column m-auto`}>
                        <h5 className={`${styles.categoryHeaderTitle} col-12 d-inline-flex justify-content-center mt-4 mb-3`}>✨ What are you looking for? ✨</h5>
                        <div className="col-12 d-inline-flex">
                        <ReactOwlCarousel className={`carousel-looking-for col-12 d-inline-block owl-theme`} margin={10} loop={true} dots={false} items={8} stagePadding={0} nav={true}>
                            {categories?.map((item, idx) => {
                            return (
                                <div className={`${styles.thumbItem} col-12 d-inline-flex flex-column gap-2 mouse-cursor`} key={idx} onClick={() => subCatProduts(item?.category?.category_id, item?.category?.name, item?.verticalId)}>
                                <img src={item?.category?.image} alt={item?.category?.name} className="object-fit-cover col-12 d-inline-block" />
                                <p className={`${styles.thumbName} text-truncate col-12 text-center mb-0`}>{item?.category?.name}</p>
                                </div>
                            );
                            })}
                        </ReactOwlCarousel>
                        </div>
                    </div>
                </div>
            )
        }
        </React.Fragment>
    )
}