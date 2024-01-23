import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import { AddToCart, AppNotification } from "../../utils/helper";
import styles from './ProductCard.module.css';

export const ProductCard = ({item, index}) => {
    const [prodAdded, setProdAdded] = useState(false);
    const [prodAddedQty, setProdAddedQty] = useState(0);
    const navigate = useNavigate();
    const appData = useApp();

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

    const addToCart = (e,item) => {
        let cartInfo = localStorage.getItem("cartData");
        e.preventDefault();
        let ProdId = item.product_id;
        let prodName = item?.name;
        let Mrp = item?.mrp;
        let sellingPrice = item?.selling_price;
        let Quantity = 1;
        let noQty = item?.no_of_q_a;
        let dealType = item?.deal_type ? item?.deal_type : 0;
        let dealId = item?.deal_type_id;

        let cardObj = {
            company_id:enviroment.COMPANY_ID,
            store_id: enviroment.STORE_ID,
            product_id: ProdId,
            image: item?.image,
            product_name: prodName,
            no_of_quantity_allowed: item?.no_of_quantity_allowed,
            is_hot_deals: dealType,
            mrp: Mrp,
            selling_price: sellingPrice,
            quantity: 1,
            deal_type_id: dealId
        }
        if(cartInfo === null){
            cartInfo = [cardObj];
        }else{
            cartInfo = JSON.parse(cartInfo);
            let cartID = cartInfo.findIndex((obj) => obj.product_id === ProdId);
            if(cartID === null || cartID === undefined || cartID === -1){
                cartInfo.push(cardObj);
            }
        }
        appData.setAppData({ ...appData.appData, cartData: cartInfo, cartCount: cartInfo?.length });
        localStorage.setItem('cartData', JSON.stringify(cartInfo));

        if(appData.appData?.user?.customer_id){
            const res = AddToCart(appData.appData?.user?.customer_id,ProdId,prodName,Mrp,sellingPrice,Quantity,noQty,dealType,dealId);
        }
        e.stopPropagation();
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

    const checkProdAdded = () => {
        if(appData.appData.cartData?.length){
            let cartID = appData.appData.cartData.findIndex((obj) => obj.product_id === item?.product_id);
            if(cartID !== -1){
                setProdAdded(true);
                setProdAddedQty(appData.appData.cartData[cartID].quantity);
            }else{
                setProdAdded(false);
                setProdAddedQty(0);
            }
        }else{
            setProdAdded(false);
            setProdAddedQty(0);
        }
    }

    useEffect(() => {
        checkProdAdded();
    }, [appData.appData.cartData]);

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
                    <React.Fragment>
                        {!prodAdded ? (
                            <span role="button" className={`${styles.addCartBtn} d-inline-flex align-items-center justify-content-center position-absolute text-uppercase`}  onClick={(e) => addToCart(e,item)}>Add to cart</span>
                        ) : (
                            <div className={`${styles.itemQuantityBtnBox} position-absolute`}>
                                <span onClick={(e) => updateProdQty(e,item.product_id, item?.no_of_quantity_allowed, prodAddedQty, 'minus')} className={`${styles.decrease_btn} ${styles.minusIcon} d-inline-flex align-items-center justify-content-center`}>-</span>
                                <span className="d-inline-flex flex-shrink-0">
                                    <input type="text" readOnly  value={prodAddedQty} className={`${styles.countValue} d-inline-block text-center`}/>
                                </span>
                                <span onClick={(e) => updateProdQty(e,item.product_id, item?.no_of_quantity_allowed, prodAddedQty, 'plus')} className={`${styles.increase_btn} ${styles.plusIcon} d-inline-flex align-items-center justify-content-center`}>+</span>
                            </div>
                        )}
                    </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
}