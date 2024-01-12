import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import { AppNotification } from "../../utils/helper";
import styles from './CategoryPage.module.css';

export const CategoryPage = () => {
    const locationState = useLocation();
    const ProductData = locationState?.state?.product;
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
            <Header />
            <div className="col-12 d-inline-flex mt-5">
                <div className="container">
                    <div className={`d-inline-flex flex-wrap gap-3 col-12 mb-3 px-4`}>
                        {ProductData?.length > 0 && ProductData?.map((item, index) => {
                            return (
                                <div className={`${styles.singleFeaturedProduct} d-inline-block position-relative overflow-hidden mouse-cursor`} key={index} onClick={() => showProductDetail(item.product_id)}>
                                    {item.mrp > item.selling_price && 
                                    <span className={`${styles.featureOffBox} float-right`}>{Math.ceil(((item?.mrp - item?.selling_price) * 100) / item?.mrp)}  OFF</span>
                                    }
                                        
                                    <div className={`${styles.featuredImageBox} position-relative col-12 mt-1 float-left overflow-hidden mb-1`}>
                                        {item.stock === 0 &&
                                        <span className={`${styles.soldOutText} position-absolute d-block`}>Sold Out</span>}
                                            
                                        <img src={item?.image} className="position-absolute h-100 col-12 p-0"/>
                                    </div>

                                    <span className={`${styles.offerItemName} col-12 p-0 mt-4`}>{item.name}</span>
                                    {item.mrp > item.selling_price ? (
                                    <div className="col-12 float-left p-0 d-inline-block my-4">
                                        <span className={`${styles.offerPrice} col-12 p-0 d-inline-block float-left`}><b>₹{item.selling_price}</b></span>
                                        <del className={`${styles.offerDiscountPrice} col-12 p-0 d-inline-block float-left`}>₹{item.mrp}</del>
                                    </div>
                                    ) : (	
                                    <div className="col-12 float-left p-0 d-inline-block my-2">
                                        <span className={`${styles.offerPrice} col-12 p-0 d-inline-block float-left`}><b>₹{item.mrp}</b></span>
                                    </div>
                                    )}
                                        
                                    {/* add to cart button */}
                                    <div className={`${styles.addCartBtn}`}>Add to Cart</div>
                                    
                                    <div className={`${styles.itemQuantityBtnBox} position-absolute`}>
                                        {/* <span className={`d-inline-flex align-items-center justify-content-center ${styles.increaseBtn}`}>+</span> */}
                                        
                                        {/* <React.Fragment>
                                        <span className={`${styles.decrease_btn} ${styles.minusIcon} d-inline-flex`}>-</span>
                                        <span className="d-inline-flex flex-shrink-0">
                                            <input type="text" readOnly  value="" className={`${styles.countValue} d-inline-block`}/>
                                        </span>
                                        <span className={`${styles.increase_btn} ${styles.plusIcon} d-inline-flex`}>+</span>
                                        </React.Fragment> */}

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}