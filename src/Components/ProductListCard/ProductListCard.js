import React from "react";
import styles from './ProductListCard.module.css';
import notAvail from '../../assets/images/image-not-available.jpg';
import { AddToCart, AppNotification } from "../../utils/helper";
import { useApp } from "../../context/AppContextProvider";
import ApiService from "../../services/ApiService";
import { enviroment } from "../../enviroment";
import { useNavigate } from "react-router-dom";

export const ProductListCard = ({Product}) => {
    const appData = useApp();
    const navigate = useNavigate();
    const userInfo = JSON.parse(appData.appData.user);
    let discountOff = '';
    if(Product?.mrp > Product?.selling_price){
        discountOff = ((Product?.mrp - Product?.selling_price) * 100) / Product?.mrp;
        discountOff = Math.ceil(discountOff);
    }

    const addToCart = (e,productId) => {
        if(userInfo?.user_id !== ''){
            let ProdId = productId;
            let prodName = Product?.name;
            let Mrp = Product?.mrp;
            let sellingPrice = Product?.selling_price;
            let Quantity = 1;
            let noQty = Product?.no_of_q_a;
            let dealType = Product?.deal_type;
            let dealId = Product?.deal_type_id;
            const res = AddToCart(userInfo?.user_id,ProdId,prodName,Mrp,sellingPrice,Quantity,noQty,dealType,dealId);
            console.log(res);
            e.stopPropagation();
        }else{
            AppNotification('Error', 'You need to login in first to start shopping.', 'danger');
        }
    }

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
            <div className="col-12 d-inline-flex flex-column px-3">
                <div className={`${styles.productsGlance} col-12 d-inline-block position-relative`} onClick={() => showProductDetail(Product.product_id)}>
                    <div className="col-12 p-0 d-inline-flex align-items-center">
                        <div className={`${styles.offerImgContainer} flex-shrink-0 text-decoration-none position-relative d-inline-block`}>
                            {Product?.image !== '' ? (
                                <img src={Product?.image} alt={Product?.name} className="object-fit-contain"/>
                            ) : (   
                                <img src={notAvail} alt={Product?.name} className="object-fit-contain"/>
                            )}
                            
                            {Product?.stock === 0 &&
                                <span className={`${styles.soldOutText} position-absolute d-inline-flex align-items-center`}>Sold Out</span>
                            }
                            
                        </div>
                        <div className="col-8 float-left ps-3">
                            <div className="col-12 d-inline-flex">
                                <span className={`${styles.offerItemName}`}>{Product?.name}</span>
                            </div>
                            <div className={`d-inline-flex align-items-center col-12 mb-1 flex-wrap`}>
                                    {Product.selling_price === Product.mrp ? (
                                        <span className={`${styles.offerPrice}`}><b>₹ {Product.mrp}</b></span>
                                    ) : (
                                        <React.Fragment>
                                            <span className={`${styles.offerPrice}`}><b>₹ {Product.selling_price}</b> <del>₹ {Product.mrp}</del></span>
                                            <span className={`${styles.offerPercentage} d-inline-flex`}>{discountOff} &nbsp;OFF</span>
                                            <span className={`${styles.savePrice} col-12 d-inline-block p-0 float-left`}>Save ₹ {Product?.mrp - Product?.selling_price}</span>
                                        </React.Fragment>
                                    )}
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.itemQuantityBtnBox} position-absolute`}>
                        <div className={`${styles.itemQuantityBtn} col-2`}>
                            <div className="col-12 p-0">
                                <div className={`${styles.itemPeice}`}>
                                    <button className="d-inline-flex flex-shrink-0" onClick={(e) => addToCart(e,Product?.product_id)}>
                                        <span className={`${styles.increaseBtn} d-inline-flex align-items-center justify-content-center`}>+</span>
                                    </button>
                                </div>
                                
                                {/* <div className={`${styles.itemPeice}`}>
                                    <button className="d-inline-flex flex-shrink-0">
                                        <span className={`${styles.decreaseBtn} d-inline-flex align-items-center justify-content-center`}>-</span>
                                    </button>
                                                    
                                    <span className="d-inline-flex flex-shrink-0">
                                        <input type="text" readOnly className={`${styles.countValue} d-inline-block`}/>
                                    </span>

                                    <button className="d-inline-flex flex-shrink-0">
                                        <span className={`${styles.increaseBtn} d-inline-flex align-items-center justify-content-center`}>+</span>
                                    </button>
                                </div> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}