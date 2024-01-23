import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContextProvider";
import { AppNotification } from "../../utils/helper";
import styles from './CartAside.module.css';

export const CartAside = ({setCartPop}) => {
    const [cartData, setCartData] = useState([]);
    const [checkoutTotal, setCheckoutTotal] = useState(0);
    const appData = useApp();
    const userInfo = appData?.appData?.user;

    const closeDrawer = () => {
        setCartPop(false);
    }

    const updateProdQty = (e, prodID, allowQty, currQty, type) => {
        e.preventDefault();
        let cartInfo = localStorage.getItem("cartData");
        cartInfo = JSON.parse(cartInfo);
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

    const setCartTotal = (cartData) => {
        let allTotal = 0;
        if(cartData?.length){
            cartData?.map((item) => {
                let qtyTotal = item?.quantity * item?.selling_price;
                allTotal = allTotal + qtyTotal;
            });
            setCheckoutTotal(allTotal);
        }
    }

    useEffect(() => {
        setCartData(appData?.appData?.cartData);
        setCartTotal(appData?.appData?.cartData);
    }, []);

    useEffect(() => {
        setCartData(appData?.appData?.cartData);
        setCartTotal(appData?.appData?.cartData);
    }, [appData.appData.cartData]);
    return (
        <React.Fragment>
            <div className={`${styles.cartDrawer} start-0 top-0 position-fixed h-100 col-12 d-inline-block overflow-hidden`}>
					<div className={`${styles.cartDrawerOverlay} start-0 top-0 position-fixed h-100 col-12 d-inline-block`}></div>
					<div className={`${styles.drawerInner} position-absolute h-100 d-inline-flex flex-column`}>
						<div className={`${styles.drawerHeader} col-12 d-inline-flex justify-content-center position-relative p-0`}>
							<h2 className={`${styles.drawerHeading} m-0 d-inline-block pt-3 pb-3`}>SHOPPING BAG</h2>
							<a className={`${styles.drawerClose} position-absolute h-100 d-inline-flex align-items-center p-2 ml-2`} type="button" onClick={() => closeDrawer()}>
								<svg viewBox="0 0 512 512" height="15"><path d="M25 512a25 25 0 0 1-17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462A24.93 24.93 0 0 1 25 512z" fill="#000000"></path><path d="M487 512a24.93 24.93 0 0 1-17.68-7.32l-462-462A25 25 0 0 1 42.68 7.32l462 462A25 25 0 0 1 487 512z" fill="#000000"></path></svg>
							</a>
						</div>
                        {cartData.length > 0 &&
                            <React.Fragment>
                                <div className={`${styles.drawerContents} col-12 pt-2 pb-4 d-inline-flex flex-column`}>
                                {cartData.map((item, indx) => {
                                    return(    
                                        <div className={`${styles.drawerCartItemsWrapper} mb-2 col-12 position-relative d-inline-flex`} key={indx}>
                                            <a className={`${styles.cartItemLink} position-absolute d-inline-block`}>
                                                <img src={item?.image} alt={item?.product_name} className="col-12 d-inline-block object-fit-contain"/>
                                            </a>
                                            <div className={`${styles.productCartDetails} col-12 d-inline-block`}>
                                                <div className={`${styles.cartItemPrice} col-12 p-0 d-inline-flex align-items-start justify-content-between gap-4`}>
                                                    <div className={`flex-grow-1 flex-column d-inline-flex`}>
                                                        <Link className={`${styles.cartItemName} d-inline-block col-12 p-0 text-decoration-none`}>{item?.product_name}</Link>
                                                        <span className={`${styles.productOption} d-inline-block`}> Qty({item?.quantity})</span>
                                                    </div>
                                                    <span className={`${styles.priceEnd} d-inline-block`}>₹{item?.selling_price}</span>
                                                </div>
                                                <div className={`col-12 p-0 d-inline-flex align-items-center justify-content-between position-relative mt-2`}>
                                                    <div className={`d-inline-flex align-items-center`}>
                                                        <span className={`${styles.quantityButton} flex-shrink-0 d-inline-flex align-items-center justify-content-center`} name="minus" role="button" onClick={(e) => updateProdQty(e,item.product_id, item?.no_of_quantity_allowed, item?.quantity, 'minus')}>
                                                            <svg className="icon iconMinus" fill="none" viewBox="0 0 10 2">
                                                                <path  d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor"></path>
                                                            </svg>
                                                        </span>
                                                        <input className={`${styles.quantityInput} flex-shrink-0 d-inline-block text-center`} type="number" value={item.quantity || ''} minLength="1" maxLength="5"/>
                                                        <span className={`${styles.quantityButton} flex-shrink-0 d-inline-flex align-items-center justify-content-center`} name="plus" role="button"  onClick={(e) => updateProdQty(e,item.product_id, item?.no_of_quantity_allowed, item?.quantity, 'plus')}>
                                                            <svg className="icon iconPlus" fill="none" viewBox="0 0 10 10">
                                                                <path  d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <span role="button" className={`${styles.removeButton}  position-absolute d-inline-flex align-items-center justify-content-center`}>
                                                        <svg viewBox="0 0 16 16">
                                                            <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                                                            <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })}
                                </div>
                                <div className={`${styles.drawerFooter} p-3 col-12 d-inline-block`}>
                                    <div className={`${styles.totals} col-12 d-inline-flex align-items-center justify-content-between p-0`}>
                                        <h2 className={`${styles.totalsSubtotal} m-0 d-inline-block`}>Subtotal</h2>
                                        <p className={`${styles.totalsSubtotalValue} m-0 d-inline-block`}>₹{checkoutTotal}</p>
                                    </div>
                                    <small className={`${styles.taxNote} col-12 p-0 mt-2 mb-2 d-inline-block`}>Tax included and shipping calculated at checkout
                                    </small>
                                    <div className={`${styles.cartCtas} col-12 p-0 d-inline-block`}>
                                        <button className={`${styles.cartCheckoutButton} col-12 p-0 d-inline-flex align-items-center justify-content-center`}>CHECKOUT</button>
                                    </div>
                                </div>
                            </React.Fragment>
                        }

						{cartData.length === 0 &&
                            <div className={`${styles.drawerContents} ${styles.emptyDrawerContents} position-absolute col-12 pt-2 pb-4 d-inline-flex flex-column align-items-center justify-content-center`}>
                                <div className={`${styles.cartDrawerEmptyContent} d-inline-flex flex-wrap justify-content-center align-content-center`}>
                                    <h4 className={`${styles.cartEmptyText} text-center col-12 p-0 mb-4`}>Your cart is empty</h4>
                                    <span role="button" onClick={() => closeDrawer()} className={`${styles.continueShop} d-inline-flex align-items-center justify-content-center`}>Continue shopping</span>
                                </div>
                            </div>
						}
					</div>
				</div>
        </React.Fragment>
    )
}