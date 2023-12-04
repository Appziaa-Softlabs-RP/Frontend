import React from "react";
import styles from './CategoryShop.module.css';

export const CategoryShop = () => {
    return (
        <React.Fragment>
            <div className="col-12 d-inline-flex flex-column p-3">
                <div className={`${styles.categoryBox} col-12 d-inline-flex flex-column p-3`}>
                    <h5 className={`${styles.exploreByCategoryHeader} col-12 d-inline-flex`}>Explore by Category</h5>
                    <div className={`${styles.lookingContainer} col-md-12 d-inline-flex flex-wrap align-items-stretch p-0 row-gap-3`}>
                            
                        <div className={`${styles.categoryblock} d-inline-flex flex-column gap-3`}>
                            <div className={`${styles.imgBox} d-inline-flex align-items-center justify-content-center overflow-hidden`}>
                                <img src="" className="object-fit-cover h-100 col-12 d-inline-block start-0 top-0"/>
                            </div>        
                            <p className={`${styles.categoryProdName} col-md-12 text-center mb-0 mt-2`}></p>
                        </div>
                            
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}