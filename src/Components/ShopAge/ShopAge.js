import React, {useEffect, useState} from "react";
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import styles from './ShopAge.module.css';

export const ShopAge = () => {
    const [categAge, setCategAge] = useState([]);
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;

    const openAgeProd = (ageId, banner) => {

    }

    useEffect(() => {
        const payload = {
            store_id: enviroment.STORE_ID
        }
        ApiService.ageGroupBox(payload).then((res) => {
            if(res.message === "Fetch successfully."){
                setCategAge(res.payload_ageGroupList.age_group);
            }
            console.log(res.payload_ageGroupList.age_group);
        }).catch((err) => {

        });
    }, []);
    return(
    <div className={`${styles.shopAgeBox} p-3 col-12 d-inline-flex`}>
        <div className={`${windowWidth === "mobile" && 'p-0'} container`}>
            {windowWidth === 'desktop' && 
               <h5 className={`${styles.categoryHeaderTitle} col-12 d-inline-flex justify-content-center mt-4 mb-3`}>✨ Shop By Age ✨</h5>
            }
            <div className={`${styles.shopAgeContainer} col-12 pt-4 pb-4 pl-0 pr-0`}>
                {windowWidth === "mobile" &&
                    <h5 className={`${styles.exploreByCategoryHeader} mb-2 ps-3 d-inline-block col-12`}>Shop By Age</h5>
                }
                <div className={`${styles.scrollAgeBox} col-12 flex-wrap d-inline-flex justify-content-center px-4 pb-0`}>
                    {categAge.map((item, index) => {
                        return (
                            <div className={`${styles.ageBlock} d-inline-block p-0 flex-shrink-0`} key={index} onClick={() => openAgeProd(item.age_group_id, item.age_group_banner)}>
                                <div className="col-12 pl-1 pr-1 d-inline-flex flex-column justify-content-center align-items-center position-relative text-decoration-none">
                                    <div className={`${styles.ageBlockIcon} overflow-hidden d-inline-block col-12 position-relative`}>
                                        <img src={item.image} alt={item.name} className="position-absolute col-12 h-100 d-inline-block p-0"/>
                                    </div>
                                    <h6 className={`${styles.shopAgeNumber} text-center col-12 p-0 mb-0`}>{item.name}</h6>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
	</div>
    );
}