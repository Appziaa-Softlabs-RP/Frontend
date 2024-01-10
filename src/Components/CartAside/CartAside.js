import React, {useState} from "react";
import styles from './CartAside.module.css';

export const CartAside = ({setCartPop}) => {
    const [cartData, setCartData] = useState('');

    const closeDrawer = () => {
        setCartPop(false);
    }
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
                        {cartData !== '' &&
                            <React.Fragment>
                                <div className={`${styles.drawerContents} col-12 pt-2 pb-4 d-inline-flex flex-column`}>
                                    
                                    <div className={`${styles.drawerCartItemsWrapper} mb-2 col-12 position-relative d-inline-flex`}>
                                        <a className={`${styles.cartItemLink} position-absolute d-inline-block`}>
                                            <img src=""/>
                                        </a>
                                        <div className="product-cart_details col-12 d-inline-block">
                                            <div className="cart-item-price col-12 p-0 d-inline-flex align-items-start">
                                                <div className="cart-item__details">
                                                    <a className="cart-item__name d-inline-block col-12 p-0"></a>
                                                    <span className="product-option d-inline-block"> Qty()</span>
                                                </div>
                                                <span className="price price--end d-inline-block">₹</span>
                                            </div>
                                            <div className="cart-item__quantity-wrapper col-12 p-0 d-inline-flex align-items-center justify-content-between position-relative mt-2">
                                                <div className="quantity d-inline-flex align-items-center">
                                                    <button className="quantity__button flex-shrink-0 d-inline-flex align-items-center justify-content-center" name="minus" type="button">
                                                        <svg className="icon icon-minus" fill="none" viewBox="0 0 10 2">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor"></path>
                                                        </svg>
                                                    </button>
                                                    <input className="quantity__input flex-shrink-0 d-inline-block" type="number" value="" min="1" max="5"/>
                                                    <button className="quantity__button flex-shrink-0 d-inline-flex align-items-center justify-content-center" name="plus" type="button">
                                                        <svg className="icon icon-plus" fill="none" viewBox="0 0 10 10">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <button type="button" className="button button--tertiary position-absolute d-inline-flex align-items-center justify-content-center">
                                                    <svg viewBox="0 0 16 16" className="icon icon-remove">
                                                        <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                                                        <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                        
                                </div>
                                <div className={`${styles.drawerFooter} p-3 col-12 d-inline-block`}>
                                    <div className={`${styles.totals} col-12 d-inline-flex align-items-center justify-content-between p-0`}>
                                        <h2 className={`${styles.totalsSubtotal} m-0 d-inline-block`}>Subtotal</h2>
                                        <p className={`${styles.totalsSubtotalValue} m-0 d-inline-block`}>₹0.00</p>
                                    </div>
                                    <small className={`${styles.taxNote} col-12 p-0 mt-2 mb-2 d-inline-block`}>Tax included and shipping calculated at checkout
                                    </small>
                                    <div className={`${styles.cartCtas} col-12 p-0 d-inline-block`}>
                                        <button className={`${styles.cartCheckoutButton} col-12 p-0 d-inline-flex align-items-center justify-content-center`}>CHECKOUT</button>
                                    </div>
                                </div>
                            </React.Fragment>
                        }

						{cartData === '' &&
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