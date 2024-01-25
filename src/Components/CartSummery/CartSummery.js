import React, { useEffect, useState } from "react";
import { useApp } from "../../context/AppContextProvider";
import { AppNotification } from "../../utils/helper";
import { DeleteIcon } from "../siteIcons";
import styles from './CartSummery.module.css';

export const CartSummery = ({cartData, setOrderStatus}) => {
    const appData = useApp();
    const [cartSummryData, setCartSummyData] = useState(cartData);
    const userInfo = appData?.appData?.user;

    const updateProdQty = (e, prodID, allowQty, currQty, type) => {
        e.preventDefault();
        let cartInfo = appData?.appData?.cartData;
        let cartID = cartInfo.findIndex((obj) => obj.product_id === prodID);
        if(type === 'plus'){
            if(currQty === allowQty){
                AppNotification('Error', 'You have reached the product quantity limit.', 'danger');
            }else{
                let newQty = currQty + 1;
                cartInfo[cartID].quantity = newQty;
            }
        }else{
            let newQty = currQty - 1;
            if(newQty === 0){
                let newCartInfo = cartInfo.filter((obj) => obj.product_id !== prodID);
                cartInfo = newCartInfo;
            }else{
                cartInfo[cartID].quantity = newQty;
            }
        }
        appData.setAppData({ ...appData.appData, cartData: cartInfo, cartCount: cartInfo?.length  });
        localStorage.setItem('cartData', JSON.stringify(cartInfo));
        e.stopPropagation();
    }

    const removeThisProd = (id) => {
        let cartInfo = appData?.appData?.cartData;
        let newCartInfo = cartInfo.filter((obj) => obj.product_id !== id);
        cartInfo = newCartInfo;

        appData.setAppData({ ...appData.appData, cartData: cartInfo, cartCount: cartInfo?.length  });
        localStorage.setItem('cartData', JSON.stringify(cartInfo));
    }

    useEffect(() => {
        setCartSummyData(appData?.appData?.cartData);
    }, [appData?.appData?.cartData]);

    return (
        <React.Fragment>
            <div className={`${styles.cartSummryBox} col-12 d-inline-flex flex-column`}>
                <h1 className={`${styles.cartTitle} col-12 p-3 d-inline-flex`}>My Cart ({appData?.appData?.cartCount})</h1>
                <div className="col-12 d-inline-flex flex-column">
                    <div className="col-12 d-inline-flex align-items-center p-2">
                        <label className={`${styles.detailTitle} d-inline-flex col-3`}>Item Descriptions</label>
                        <label className={`${styles.detailTitle} d-inline-flex col-2`}>Unit Price</label>
                        <label className={`${styles.detailTitle} d-inline-flex col-2`}>Quantity</label>
                        <label className={`${styles.detailTitle} d-inline-flex col-2`}>SubTotal</label>
                        <label className={`${styles.detailTitle} d-inline-flex col-2`}>Savings</label>
                        <label className={`${styles.detailTitle} d-inline-flex col-1`}></label>
                    </div>
                    {cartSummryData?.length > 0 && cartSummryData?.map((item, idx) => {
                        return (
                        <div className={`${styles.cartDataBox} col-12 d-inline-flex align-items-center p-2`} key={idx}>
                            <div className="d-inline-flex align-items-center col-3 gap-1">
                                <span className={`${styles.itemImage} d-inline-flex flex-shrink-0`}>
                                    <img src={item?.image} alt={item?.product_name}/>
                                </span>
                                <span className={`${styles.productName}`}>{item?.product_name}</span>
                            </div>
                            <div className="col-2 d-inline-flex flex-column">
                                <span className={`${styles.productPrice} d-inline-flex`}>₹{item.selling_price}</span>
                                {item.selling_price !== item.mrp &&
                                    <del className={`${styles.productMrpPrice} d-inline-flex`}>₹{item?.mrp}</del>
                                }
                            </div>
                            <div className="col-2 d-inline-flex align-items-center">
                                <span role="button" onClick={(e) => updateProdQty(e,item.product_id, item.no_of_quantity_allowed, item.quantity, 'minus')} className={`${styles.decrease_btn} ${styles.minusIcon} d-inline-flex align-items-center justify-content-center`}>-</span>
                                <span className="d-inline-flex flex-shrink-0">
                                    <input type="text" readOnly  value={item.quantity} className={`${styles.countValue} d-inline-block text-center`}/>
                                </span>
                                <span role="button" onClick={(e) => updateProdQty(e,item.product_id, item.no_of_quantity_allowed, item.quantity, 'plus')} className={`${styles.increase_btn} ${styles.plusIcon} d-inline-flex align-items-center justify-content-center`}>+</span>
                            </div>
                            <div className="col-2 d-inline-flex flex-column">
                                <span className={`${styles.productPrice} d-inline-flex`}>₹{item.selling_price}</span>
                            </div>
                            <div className="col-2 d-inline-flex flex-column">
                                <span className={`${styles.savingPrice} d-inline-flex`}>₹{item.mrp - item.selling_price}</span>
                            </div>
                            <div className="col-1 d-inline-flex flex-column">
                                <span className={`${styles.removeProd} d-inline-flex`} role="button" onClick={() => removeThisProd(item.product_id)}>
                                    <DeleteIcon color="#FF0000"/>
                                </span>
                            </div>
                        </div>
                        );
                    })}
                    {cartSummryData?.length === 0 && 
                        <div className={`${styles.emtpyCartText} col-12 d-inline-flex align-items-center justify-content-center p-5`}>
                            No Product Added into the Cart
                        </div>
                    }
                    {cartSummryData?.length > 0 && 
                        <div className={`${styles.placeOrderBtnBox} col-12 p-3 d-inline-flex align-items-center justify-content-end gap-3`}>
                            <span className={`${styles.continueShop} d-inline-flex align-items-center px-3 text-uppercase`}>Continue Shopping</span>
                            <span className={`${styles.placeOrderBtn} d-inline-flex align-items-center px-3 text-uppercase`} onClick={() => setOrderStatus('Place Order')}>Place Order</span>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    );
}