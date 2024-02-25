import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import { AppNotification } from "../../utils/helper";
import styles from './ProductCard.module.css';
import noImage from '../../assets/images/image-not-available.jpg';

export const ProductCard = ({ item, index }) => {
    const [prodAdded, setProdAdded] = useState(false);
    const [prodAddedQty, setProdAddedQty] = useState(0);
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();
    const appData = useApp();

    const setNoImage = (e) => {
        if(e.target){
            e.target.src =noImage;
        }
    }

    const showProductDetail = (id) => {
        const payload = {
            product_id: id,
            company_id: parseInt(enviroment.COMPANY_ID),
            store_id: parseInt(enviroment.STORE_ID)
        }
        ApiService.productDetails(payload).then((res) => {
            if (res.message === "Product Detail") {
                navigate('/product', { state: { product: res.payload } })
            } else {
                AppNotification('Error', 'Sorry, Product detail not found.', 'danger');
            }
        }).catch((err) => {
            AppNotification('Error', 'Sorry, Product detail not found.', 'danger');
        });
    }

    const addToCart = (e, item) => {
        e.preventDefault();
        let cartInfo = appData?.appData?.cartData;
        let ProdId = item.product_id ? item.product_id : item?.id;
        let prodName = item?.name;
        let Mrp = item?.mrp;
        let sellingPrice = item?.selling_price;
        let Quantity = 1;
        let noQty = item?.no_of_quantity_allowed;
        let dealType = item?.deal_type ? item?.deal_type : 0;
        let dealId = item?.deal_type_id;

        let cardObj = {
            company_id: parseInt(enviroment.COMPANY_ID),
            store_id: parseInt(enviroment.STORE_ID),
            product_id: ProdId,
            image: item?.image ? item.image : item?.image_url,
            product_name: prodName,
            no_of_quantity_allowed: noQty,
            is_hot_deals: dealType,
            mrp: Mrp,
            selling_price: sellingPrice,
            quantity: 1,
            deal_type_id: dealId
        }
        if (cartInfo === null) {
            cartInfo = [cardObj];
        } else {
            let cartID = cartInfo?.findIndex((obj) => obj.product_id === ProdId);
            if (cartID === null || cartID === undefined || cartID === -1) {
                cartInfo.push(cardObj);
            }
        }
        appData.setAppData({ ...appData.appData, cartData: cartInfo, cartCount: cartInfo?.length });
        localStorage.setItem('cartData', JSON.stringify(cartInfo));
        AppNotification('Success', 'Product added into the cart successfully.', 'success');

        let cartData = {
            product_id: ProdId,
            product_name: prodName,
            mrp: Mrp,
            selling_price:sellingPrice,
            quantity: Quantity,
            no_of_quantity_allowed: noQty,
            is_hot_deals: dealType,
            deal_type_id: dealId
        }

        if (appData.appData?.user?.customer_id) {
            const payload = {
                company_id: parseInt(enviroment.COMPANY_ID),
                store_id: parseInt(enviroment.STORE_ID),
                customer_id: userInfo.customer_id,
                cartJson: JSON.stringify(cartData)
            }
            ApiService.addMultipleCart(payload).then((res) => {
                if(res?.message === 'Add successfully.'){
                    appData.setAppData({ ...appData.appData, cartSaved: true });
                    localStorage.setItem('cartSaved', true);
                    let resCart = res.payload_addTocart;
                    let resProdId = resCart.findIndex((obj) => obj.product_id === ProdId);
                    let cartID = resCart[resProdId].cart_id;
                    let cartProdID = cartInfo.findIndex((obj) => obj.product_id === ProdId);
                    cartInfo[cartProdID].cart_id = cartID;
                    
                    appData.setAppData({ ...appData.appData, cartData: cartInfo, cartCount: cartInfo?.length });
                    localStorage.setItem('cartData', JSON.stringify(cartInfo));
                }
            }).catch((err) => {
                return err;
            });
        }
        e.stopPropagation();
    }

    const updateProdQty = (e, prodID, allowQty, currQty, type) => {
        e.preventDefault();
        let cartInfo = appData?.appData?.cartData;
        let cartProdID = cartInfo.findIndex((obj) => obj.product_id === prodID);
        if (type === 'plus') {
            if (currQty === allowQty) {
                AppNotification('Error', 'You have reached the product quantity limit.', 'danger');
            } else {
                let newQty = currQty + 1;
                cartInfo[cartProdID].quantity = newQty;
            }
        } else {
            let newQty = currQty - 1;
            if (newQty === 0) {
                let cartID = cartInfo[cartProdID].cart_id;
                if(appData.appData.cartSaved === true && cartID !== null && cartID != undefined){
                    const payload = {
                        store_id: parseInt(enviroment.STORE_ID),
                        customer_id: userInfo.customer_id,
                        cart_id: cartID
                    }
                    ApiService.removeCart(payload).then((res) => {

                    }).catch((err) => {

                    });
                }
                let newCartInfo = cartInfo.filter((obj) => obj.product_id !== prodID);
                cartInfo = newCartInfo;
                AppNotification('Success', 'Product removed from cart successfully', 'success');
            } else {
                cartInfo[cartProdID].quantity = newQty;
            }
        }
        appData.setAppData({ ...appData.appData, cartData: cartInfo, cartCount: cartInfo?.length });
        localStorage.setItem('cartData', JSON.stringify(cartInfo));
        e.stopPropagation();
    }

    const checkProdAdded = () => {
        if (appData.appData.cartData?.length) {
            let productID = item?.product_id ? item.product_id : item.id
            let cartID = appData.appData.cartData.findIndex((obj) => obj.product_id === productID);
            if (cartID !== -1) {
                setProdAdded(true);
                setProdAddedQty(appData.appData.cartData[cartID].quantity);
            } else {
                setProdAdded(false);
                setProdAddedQty(0);
            }
        } else {
            setProdAdded(false);
            setProdAddedQty(0);
        }
    }

    useEffect(() => {
        checkProdAdded();
        setUserInfo(appData.appData.user);
    }, [appData.appData]);

    return (
        <React.Fragment>
            <div className={`${styles.singleFeaturedProduct} flex-shrink-0 d-inline-block position-relative overflow-hidden col-12 h-100`} role="button" key={index}>
                {parseFloat(item.mrp) > parseFloat(item.selling_price) &&
                    <span className={`${styles.featureOffBox} position-absolute d-inline-flex align-items-center`}>{Math.ceil(((item?.mrp - item?.selling_price) * 100) / item?.mrp)}%  OFF</span>
                }

                <div className={`${styles.featuredImageBox} position-relative col-12 mt-1 float-left overflow-hidden mb-1`} onClick={() => showProductDetail(item?.product_id ? item.product_id : item.id)}>
                    {item.stock === 0 &&
                        <span className={`${styles.soldOutText} position-absolute d-block`}>Sold Out</span>}
                        <img onError={(e) => setNoImage(e)} src={item?.image ? item.image?.replace('https://rewardsplus.in/uploads/app/public/cogendermpany', 'https://merchant.rewardsplus.in/uploads/app/public/company') : item?.image_url } className="position-absolute h-100 col-12 p-0" />
                </div>

                <span onClick={() => showProductDetail(item?.product_id ? item.product_id : item.id)} className={`${styles.offerItemName} col-12 p-0 mb-1`}>{item.name}</span>
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
                    <React.Fragment>
                        {!prodAdded ? (
                            <span role="button" className={`${styles.addCartBtn} d-inline-flex align-items-center justify-content-center position-absolute text-uppercase`} onClick={(e) => addToCart(e, item)}>Add to cart</span>
                        ) : (
                            <div className={`${styles.itemQuantityBtnBox} position-absolute`}>
                                <span role="button" onClick={(e) => updateProdQty(e, item?.product_id ? item.product_id : item.id, item?.no_of_quantity_allowed, prodAddedQty, 'minus')} className={`${styles.decrease_btn} ${styles.minusIcon} d-inline-flex align-items-center justify-content-center`}>-</span>
                                <span className="d-inline-flex flex-shrink-0">
                                    <input type="text" readOnly value={prodAddedQty} className={`${styles.countValue} d-inline-block text-center`} />
                                </span>
                                <span role="button" onClick={(e) => updateProdQty(e, item?.product_id ? item.product_id : item.id, item?.no_of_quantity_allowed, prodAddedQty, 'plus')} className={`${styles.increase_btn} ${styles.plusIcon} d-inline-flex align-items-center justify-content-center`}>+</span>
                            </div>
                        )}
                    </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
}