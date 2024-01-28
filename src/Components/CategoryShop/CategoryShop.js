import React, {useEffect, useState} from "react";
import styles from './CategoryShop.module.css';
import ApiService from "../../services/ApiService";
import { enviroment } from "../../enviroment";
import { useNavigate } from "react-router-dom";

export const CategoryShop = () => {
    const [shopCategory, setShopCategory] = useState([]);
    const navigate = useNavigate();

    const getCategoryProd = (name, id) => {
        let category = name?.replaceAll("[^A-Za-z0-9]","-");
        navigate(`/store/${category}`, {state: {cat: id}})
    }

    useEffect(() => {
        const payload = {
            store_id: parseInt(enviroment.STORE_ID)
        }
        ApiService.StoreCategory(payload).then((res) => {
            setShopCategory(res?.payload_verticalList?.vertical);
        }).catch((err) => {
            
        });
    }, []);
    return (
        <React.Fragment>
            {shopCategory.length > 0 &&
            <div className="col-12 d-inline-flex flex-column p-3">
                <div className={`${styles.categoryBox} col-12 d-inline-flex flex-column p-3`}>
                    <h5 className={`${styles.exploreByCategoryHeader} col-12 d-inline-flex`}>Explore by Category</h5>
                    <div className={`${styles.lookingContainer} col-12 d-inline-flex flex-wrap align-items-stretch p-0 row-gap-3`}>
                        {shopCategory.map((item, index) => {
                            return (
                                <div key={index} className={`${styles.categoryblock} d-inline-flex flex-column gap-2`} onClick={() => getCategoryProd(item?.name, item?.vertical_id)}>
                                    <div className={`${styles.imgBox} d-inline-flex align-items-center justify-content-center overflow-hidden`}>
                                        <img src={item.image} alt={item?.name} className="object-fit-cover h-100 col-12 d-inline-block start-0 top-0"/>
                                    </div>        
                                    <p className={`${styles.categoryProdName} col-12 text-center m-0`}>{item?.name}</p>
                                </div>
                            );
                        })} 
                    </div>
                </div>
            </div>
            }
        </React.Fragment>
    )
}