import React from "react";
import styles from './ProductOffers.module.css';

export const ProductOffers = () => {
    return (
        <React.Fragment>
            <div className={`${styles.offerContainer} col-12 p-3 d-inline-flex`}>
                <h5 className={`${styles.exploreByCategoryHeader} col-12  d-inline-flex mb-3`}></h5>
                <div className="col-12 d-inline-flex flex-wrap align-items-stretch p-0">

                    <div className={`${styles.singleFruitBlock} position-relative`}>
                        <div className={`${styles.fruitImgBlock} position-relative overflow-hidden`}>
                            <img src="" className="object-fit-cover position-absolute col-12 h-100 top-0 start-0"/>
                        </div>
                        <span className={`${styles.bottomLabelName} position-absolute d-inline-flex align-items-center justify-content-center align-content-center text-center`}></span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}