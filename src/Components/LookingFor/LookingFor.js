import React, {useState, useEffect} from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import styles from './LookingFor.module.css';

export const LookingFor = ({allSubCat}) => {
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;

    const subCatProduts = (id) => {

    }

    useEffect(() => {
        console.log(allSubCat);
    }, []);

    return (
        <React.Fragment>
            {allSubCat?.length > 0 &&
                <div className={`${styles.shopAgeBox} px-3 col-12 d-inline-flex`}>
                    <div className={`${windowWidth === "mobile" && 'p-0'} container d-flex flex-column m-auto`}>
                        <h5 className={`${styles.categoryHeaderTitle} col-12 d-inline-flex justify-content-center mt-4 mb-3`}>✨ What are you looking for? ✨</h5>
                        <div className="col-12 d-inline-flex">
                        <ReactOwlCarousel className={`carousel-looking-for col-12 d-inline-block owl-theme`} margin={10} loop={true} dots={false} items={8} stagePadding={0} nav={true}>
                            {allSubCat?.map((item, idx) => {
                                return(
                                    <div className={`${styles.thumbItem} col-12 d-inline-flex flex-column gap-2 mouse-cursor`} key={idx} onClick={() => subCatProduts(item.category_id)}>
                                        <img src={item?.image} alt={item?.name} className="object-fit-cover col-12 d-inline-block" />
                                        <p className={`${styles.thumbName} text-truncate col-12 text-center mb-0`}>{item?.name}</p>
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