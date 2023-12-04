import React from "react";
import styles from './ShopAge.module.css';

export const ShopAge = () => {
    return(
    <div className={`${styles.shopAgeBox} p-3 col-12`}>
		<div className={`${styles.shopAgeContainer} col-12 pt-4 pb-4 pl-0 pr-0`}>
			<h5 className={`${styles.exploreByCategoryHeader} mb-2 ps-3 d-inline-block col-12`}>Shop By Age</h5>
            <div className={`${styles.scrollAgeBox} col-12 flex-wrap d-inline-flex justify-content-center p-3 pb-0`}>
                
                <div className={`${styles.ageBlock} d-inline-block p-0 flex-shrink-0`}>
                    <div className="col-12 pl-1 pr-1 d-inline-flex flex-column justify-content-center align-items-center position-relative text-decoration-none">
                        <div className={`${styles.ageBlockIcon} overflow-hidden d-inline-block col-12 position-relative`}>
                            <img src="https://rewardsplus.in/" className="position-absolute col-12 h-100 d-inline-block p-0"/>
                        </div>
                        <h6 className={`${styles.shopAgeNumber} text-center col-12 p-0 m-0`}>--</h6>
                    </div>
                </div>
                
            </div>
		</div>
	</div>
    );
}