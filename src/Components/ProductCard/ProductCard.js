import React from "react";
import { useNavigate } from "react-router-dom";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import { AppNotification } from "../../utils/helper";
import styles from './ProductCard.module.css';

export const ProductCard = ({item, index}) => {
    const navigate = useNavigate();

    const showProductDetail = (id) => {
        const payload = {
            product_id: id,
            company_id: enviroment.COMPANY_ID,
            store_id: enviroment.STORE_ID
        }
        ApiService.productDetails(payload).then((res) => {
            if(res.message === "Product Detail"){
                navigate('/product', {state: {product: res.payload}})
            }else{
                AppNotification('Error', 'Sorry, Product detail not found.', 'danger');     
            }
        }).catch((err) => {
            AppNotification('Error', 'Sorry, Product detail not found.', 'danger'); 
        });
    }

    return (
        <React.Fragment>
            <div className={`${styles.singleFeaturedProduct} flex-shrink-0 d-inline-block position-relative overflow-hidden col-12 h-100`} role="button" key={index} onClick={() => showProductDetail(item.product_id)}>
                {item.mrp > item.selling_price && 
                <span className={`${styles.featureOffBox} position-absolute d-inline-flex align-items-center`}>{Math.ceil(((item?.mrp - item?.selling_price) * 100) / item?.mrp)}%  OFF</span>
                }
                    
                <div className={`${styles.featuredImageBox} position-relative col-12 mt-1 float-left overflow-hidden mb-1`}>
                    {item.stock === 0 &&
                    <span className={`${styles.soldOutText} position-absolute d-block`}>Sold Out</span>}  
                    <img src={item?.image} className="position-absolute h-100 col-12 p-0"/>
                </div>

                <span className={`${styles.offerItemName} col-12 p-0 mb-1`}>{item.name}</span>
                {item.mrp > item.selling_price ? (
                <div className="col-12 p-0 d-inline-flex align-items-center gap-2 flex-wrap">
                    <span className={`${styles.offerPrice} d-inline-flex`}><b>₹{item.selling_price}</b></span>
                    <del className={`${styles.offerDiscountPrice} d-inline-flex`}>₹{item.mrp}</del>
                </div>
                ) : (	
                <div className="col-12 float-left p-0 d-inline-block">
                    <span className={`${styles.offerPrice} col-12 p-0 d-inline-block float-left`}><b>₹{item.mrp}</b></span>
                </div>
                )}
                {item.stock !== 0 &&
                    <span role="button" className={`${styles.addCartBtn} d-inline-flex align-items-center justify-content-center position-absolute text-uppercase`}>Add to cart</span>
                }
                <div className={`${styles.itemQuantityBtnBox} position-absolute`}>
                    
                    {/* <React.Fragment>
                    <span className={`${styles.decrease_btn} ${styles.minusIcon} d-inline-flex`}>-</span>
                    <span className="d-inline-flex flex-shrink-0">
                        <input type="text" readOnly  value="" className={`${styles.countValue} d-inline-block`}/>
                    </span>
                    <span className={`${styles.increase_btn} ${styles.plusIcon} d-inline-flex`}>+</span>
                    </React.Fragment> */}

                </div>
            </div>
        </React.Fragment>
    )
}