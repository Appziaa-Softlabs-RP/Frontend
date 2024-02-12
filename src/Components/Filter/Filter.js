import React from "react";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import styles from './Filter.module.css';

export const Filter = ({filterVert, seProductData}) => {
    const filterPrice = (min,max) => {
        console.log(min,max);
        const payload = {
            store_id: enviroment.STORE_ID,
            vertical_id:filterVert,
            from_price:min,
            to_price:max,
            page:1,
            result_per_page: 1000
        }
        ApiService.storeFilter(payload).then((res) => {
            if(res.message === "Fetch successfully."){
                seProductData(res.payload_FilterByProduct);
            }
        }).catch((err) => {

        })
    }

    return (
        <React.Fragment>
            <div className="col-12 d-inline-flex flex-column gap-3">
                <div className={`${styles.filterBox} d-inline-flex flex-column col-12 p-3`}>
                    <h5 className={`${styles.filterTitle} col-12 d-inline-flex mb-4`}>Price</h5>
                    <ul className="col-12 d-inline-flex list-unstyled flex-column gap-3">
                        <li className={`${styles.filterRow} col-12 d-inline-flex align-items-center`}>
                            <label className="d-inline-flex align-items-center gap-2" onClick={() => filterPrice(0,100)}>
                                <input type="radio" className={`${styles.address_option}`} value="1,100" name="price"/>
                                <div className={`${styles.customRadio} d-inline-flex flex-shrink-0 me-1 position-relative`}></div>
                                Under ₹100
                            </label>
                        </li>
                        <li className={`${styles.filterRow} col-12 d-inline-flex align-items-center`}>
                            <label className="d-inline-flex align-items-center gap-2" onClick={() => filterPrice(100,500)}>
                                <input type="radio" className={`${styles.address_option}`} value="101,500" name="price"/>
                                <div className={`${styles.customRadio} d-inline-flex flex-shrink-0 me-1 position-relative`}></div>
                                ₹101 - ₹500
                            </label>
                        </li>
                        <li className={`${styles.filterRow} col-12 d-inline-flex align-items-center`}>
                            <label className="d-inline-flex align-items-center gap-2" onClick={() => filterPrice(501,1000)}>
                                <input type="radio" className={`${styles.address_option}`} value="501,1000" name="price"/>
                                <div className={`${styles.customRadio} d-inline-flex flex-shrink-0 me-1 position-relative`}></div>
                                ₹501 - ₹1000
                            </label>
                        </li>
                        <li className={`${styles.filterRow} col-12 d-inline-flex align-items-center`}>
                            <label className="d-inline-flex align-items-center gap-2" onClick={() => filterPrice(1001,10000)}>
                                <input type="radio" className={`${styles.address_option}`} value="1001,10000" name="price"/>
                                <div className={`${styles.customRadio} d-inline-flex flex-shrink-0 me-1 position-relative`}></div>
                                ₹1001 and Above
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}