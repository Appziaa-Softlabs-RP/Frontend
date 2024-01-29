import React, { useEffect, useState } from "react";
import styles from './ProductPage.module.css';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { Link, useLocation } from "react-router-dom";
import { FeaturedProducts } from "../../Components/FeaturedProducts/FeaturedProducts";
import { SimilarProduct } from "../../Components/SimilarProduct/SimilarProduct";
import { useApp } from "../../context/AppContextProvider";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { DownArrowIcon, LocationIcon } from "../../Components/siteIcons";
import { AppNotification } from "../../utils/helper";
import { enviroment } from "../../enviroment";
import axios from "axios";

let otherInfo = false;
export const ProductPage = () => {
    const appData = useApp();
    const locationState = useLocation();
    const [prodMainImg, setProdMainImg] = useState(0);
    const [pincode, setPincode] = useState('');
    const [deliveryDetail, setDeliveryDetail] = useState({});
    const [activeImg, setActiveImg] = useState(0);
    const [prodDiscount, setProdDiscount] = useState(0);
    const [descActive, setDescActive] = useState(true);
    const [prodAdded, setProdAdded] = useState(false);
    const [prodAddedQty, setProdAddedQty] = useState(0);
    const userInfo = appData?.appData?.user;
    let windowWidth = appData.appData.windowWidth;
    const ProductData = locationState?.state?.product;

    const setMainImage = (image, count) => {
        setActiveImg(count);
        setProdMainImg(image);
    }

    const openProductColpse = () => {

    }

    const openDescription = () => {
        if (descActive === false) {
            setDescActive(true);
        } else {
            setDescActive(false);
        }
    }

    const addToCart = (e, item) => {
        let cartInfo = appData?.appData?.cartData;
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
            company_id: parseInt(enviroment.COMPANY_ID),
            store_id: parseInt(enviroment.STORE_ID),
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
        if (cartInfo === null) {
            cartInfo = [cardObj];
        } else {
            let cartID = cartInfo.findIndex((obj) => obj.product_id === ProdId);
            if (cartID === null || cartID === undefined || cartID === -1) {
                cartInfo.push(cardObj);
            }
        }
        appData.setAppData({ ...appData.appData, cartData: cartInfo, cartCount: cartInfo?.length });
        localStorage.setItem('cartData', JSON.stringify(cartInfo));

        if (appData.appData?.user?.customer_id) {
            
        }
        e.stopPropagation();
    }

    const updateProdQty = (e, prodID, allowQty, currQty, type) => {
        e.preventDefault();
        let cartInfo = appData?.appData?.cartData;
        let cartID = cartInfo.findIndex((obj) => obj.product_id === prodID);
        if (type === 'plus') {
            if (currQty === allowQty) {
                AppNotification('Error', 'You have reached the product quantity limit.', 'danger');
            } else {
                let newQty = currQty + 1;
                cartInfo[cartID].quantity = newQty;
            }
        } else {
            let newQty = currQty - 1;
            if (newQty === 0) {
                let newCartInfo = cartInfo.filter((obj) => obj.product_id !== prodID);
                cartInfo = newCartInfo;
            } else {
                cartInfo[cartID].quantity = newQty;
            }
        }
        appData.setAppData({ ...appData.appData, cartData: cartInfo, cartCount: cartInfo?.length });
        localStorage.setItem('cartData', JSON.stringify(cartInfo));
        e.stopPropagation();
    }

    const checkProdAdded = () => {
        if (appData.appData.cartData?.length) {
            let cartID = appData.appData.cartData.findIndex((obj) => obj.product_id === ProductData?.product_id);
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

    const getDeliveyPincode = (val) => {
        setPincode(val);
        if(val.length < 6){
            setDeliveryDetail({});
        }
    }

    const getDeliveyInfo = (val) => {
        if(val.length > 5){
            axios.post(`${enviroment.DELIVERY_URL}/pincode-status`, {
                store_email: 'knickk8@gmail.com',
                pincode:val
            }).then(function (res) {
                if(res.data.message === "Delivery found"){
                    AppNotification('Success', 'Product Delivery Found', 'success');
                    setDeliveryDetail(res.data.data);
                }
            }).catch(function (error) {
                console.log(error);
            });
        }else{
            setDeliveryDetail({});
        }
    }

    useEffect(() => {
        checkProdAdded();
    }, [appData.appData.cartData]);

    useEffect(() => {
        window.scrollTo(0, 0);
        let discountOff = '';
        if (ProductData?.mrp > ProductData?.selling_price) {
            discountOff = ((ProductData?.mrp - ProductData?.selling_price) * 100) / ProductData?.mrp;
            discountOff = Math.ceil(discountOff);
            setProdDiscount(discountOff);
        }
        setProdMainImg(ProductData.image);
        {
            Object.values(ProductData?.other).map((item) => {
                if (item !== '' && item !== null && item !== undefined) {
                    otherInfo = true;
                }
            })
        }
    }, [locationState]);
    return (
        <React.Fragment>
            {windowWidth === "mobile" ? (
                <React.Fragment>
                    <PageHeader title={ProductData?.name} />
                    <div className="col-12 d-inline-block position-relative">
                        {ProductData.stock === 0 &&
                            <div className={`${styles.productSoldOutBox} position-absolute col-12 p-0 h-100`}>
                                <span className={`${styles.soldOutText} text-center text-uppercase position-absolute d-block`}>Sold Out</span>
                            </div>
                        }
                        <ReactOwlCarousel className={`${styles.bannerContainer} col-12 owl-theme`} margin={0} loop={false} dots={true} items={1}>
                            {ProductData?.gallery?.map((item, index) => {
                                return (
                                    <div className={`col-12 d-inline-block`} key={index}>
                                        <img src={item.image_url} alt={ProductData.name} className="object-fit-cover col-12 d-inline-block" />
                                    </div>
                                )
                            })}
                        </ReactOwlCarousel>
                    </div>

                    <div className={`${styles.productAllDetail} col-12 d-inline-block p-4`}>
                        <h2 className={`${styles.productDetailName} col-12 mb-1`}>{ProductData.name}</h2>
                        <span className='ml-3 mb-2'>Item Code: {ProductData?.barcode} </span>
                        <div className={`d-inline-flex align-items-center col-12 mb-0 position-relative`}>
                            {ProductData.selling_price === ProductData.mrp ? (
                                <span className={`${styles.offerPrice}`}><b>₹{ProductData.mrp}</b></span>
                            ) : (
                                <React.Fragment>
                                    <span className={`${styles.offerPrice}`}><b>₹{ProductData.selling_price}</b> <del>₹{ProductData.mrp}</del></span>
                                    {prodDiscount !== '' &&
                                        <span className={`${styles.offerPercentage} d-inline-flex`}>{prodDiscount}% &nbsp;OFF</span>}
                                </React.Fragment>
                            )}
                        </div>
                        <span className={`${styles.inclusivTax} col-12 d-inline-block`}>(Inclusive of all taxes)</span>
                    </div>

                    <div className={`${styles.productDesciptionBox} col-12 d-inline-block mb-3 p-4`}>
                        <h2 className={`${styles.availSizeTitle} mb-3 col-12 d-inline-block p-0`}>Product Details</h2>
                        <div className={`${styles.productCollapseBox} mb-4 active col-12 d-inline-block p-0`} onClick={openProductColpse(this)}>
                            <button className={`${styles.productTabBox} col-12 d-inline-flex align-items-center justify-content-between`}><span>About product</span>&nbsp;<span className="close-icon position-relative"></span></button>
                            <div className={`${styles.productDetailText} col-12 p-0`}>{ProductData?.description?.replace(/(<([^>]+)>)/gi, " ")}</div>
                        </div>

                        {otherInfo === true &&
                            <div className={`${styles.productCollapseBox} col-12 d-inline-block p-0`} onClick={openProductColpse(this)}>
                                <button className={`${styles.productTabBox} col-12 text-decoration-none cursor-pointer d-inline-flex align-items-center justify-content-between`}><span>Other Info</span>&nbsp;<span className="close-icon position-relative"></span></button>
                                <p className={`${styles.productDetailText} col-12 p-0`}>
                                    {ProductData?.other?.type && <React.Fragment><strong>Type: </strong>{ProductData?.other?.type}<br /></React.Fragment>}
                                    {ProductData?.other?.model_name && <React.Fragment><strong>Model Name: </strong>{ProductData?.other?.model_name} <br /></React.Fragment>}
                                    {ProductData?.other?.shelf_life && <React.Fragment><strong>Shelf Life: </strong>{ProductData?.other?.shelf_life} <br /></React.Fragment>}
                                    {ProductData?.other?.shelf_life_month_years && <React.Fragment><strong>Shelf Life Month Years: </strong>{ProductData?.other?.shelf_life_month_years} <br /></React.Fragment>}
                                    {ProductData?.other?.container_type && <React.Fragment><strong>Container Type: </strong>{ProductData?.other?.container_type} <br /></React.Fragment>}
                                    {ProductData?.other?.organic && <React.Fragment><strong>Organic: </strong>{ProductData?.other?.organic} <br /></React.Fragment>}
                                    {ProductData?.other?.polished && <React.Fragment><strong>Polished: </strong>{ProductData?.other?.polished} <br /></React.Fragment>}
                                    {ProductData?.other?.package_dimension_length && <React.Fragment><strong>Package Dimension Length: </strong>{ProductData?.other?.package_dimension_length} <br /></React.Fragment>}
                                    {ProductData?.other?.package_dimension_width && <React.Fragment><strong>Package Dimension Width: </strong>{ProductData?.other?.package_dimension_width} <br /></React.Fragment>}
                                    {ProductData?.other?.package_dimension_height && <React.Fragment><strong>Package Dimension Height: </strong>{ProductData?.other?.package_dimension_height} <br /></React.Fragment>}
                                    {ProductData?.other?.manufactured_by && <React.Fragment><strong>Manufactured By: </strong>{ProductData?.other?.manufactured_by} <br /></React.Fragment>}
                                    {ProductData?.other?.packed_by && <React.Fragment><strong>Packed By: </strong>{ProductData?.other?.packed_by} <br /></React.Fragment>}
                                    {ProductData?.other?.exp_date && <React.Fragment><strong>Exp Date: </strong>{ProductData?.other?.exp_date} <br /></React.Fragment>}
                                </p>
                            </div>
                        }
                    </div>
                    <div className={`col-12 d-inline-block mb-5`}>
                        <FeaturedProducts product={ProductData.featured} />
                        <SimilarProduct product={ProductData.similar} />
                    </div>
                    <div className={`${styles.productBtnBox} d-inline-flex align-items-stretch col-12 position-fixed bottom-0 start-0`}>
                        <span className={`${styles.goCartBtn} position-relative col-6 d-inline-flex align-items-center justify-content-center`}>Go to Cart</span>
                        <span className={`${styles.AddCartBtn} position-relative col-6 d-inline-flex align-items-center justify-content-center`} onClick={(e) => addToCart(e, ProductData)}>Add to Cart</span>
                    </div>
                </React.Fragment>
            ) : windowWidth === 'desktop' ? (
                <React.Fragment>
                    <Header />
                    <div className="col-12 d-inline-flex mt-5">
                        <div className="container">
                            <div className={`col-12 d-inline-flex align-items-start position-relative p-3 mb-4`}>
                                <div className={`${styles.productContainer} d-inline-flex flex-column gap-3 col-7 p-3 position-sticky top-0`}>
                                    <div className={`${styles.productMainImage} col-12 d-inline-block position-relative`}>
                                        <img src={prodMainImg} alt={ProductData.name} className="object-fit-contain m-auto bottom-0 end-0 h-100 top-0 start-0 col-12 d-inline-block position-absolute" />
                                    </div>
                                    <ReactOwlCarousel key={activeImg} className={`${styles.productGalleryRow} col-12 owl-theme galleryBox`} margin={10} loop={false} dots={false} items={6}>
                                        {ProductData?.gallery?.map((item, index) => {
                                            return (
                                                <div className={`${styles.galleryBox} ${activeImg === index ? styles.activeGallery : ''} col-12 d-inline-flex align-items-center justify-content-center`} onClick={() => setMainImage(item.image_url, index)} key={index}>
                                                    <img src={item.image_url} alt={ProductData.name} className="object-fit-cover col-12 d-inline-block" />
                                                </div>
                                            )
                                        })}
                                    </ReactOwlCarousel>
                                </div>
                                <div className={`${styles.productDetailBox} d-inline-flex flex-column gap-3 col-5 align-items-start justify-content-start px-4`}>
                                    <h2 className={`${styles.productDetailName} col-12 mb-1`}>{ProductData.name}</h2>
                                    <span className='ml-3 mb-1'>Item Code: {ProductData?.barcode} </span>
                                    <div className={`d-inline-flex align-items-start flex-column gap-2 col-12 mb-4 position-relative`}>
                                        <h2 className={`${styles.specialTitle} d-inline-flex m-0`}>Special Price</h2>
                                        {ProductData.selling_price === ProductData.mrp ? (
                                            <span className={`${styles.offerPrice}`}><b>₹{ProductData.mrp}</b></span>
                                        ) : (
                                            <div className="col-12 d-inline-flex align-items-center gap-3">
                                                <span className={`${styles.offerPrice} d-inline-flex align-items-center gap-2`}><b>₹{ProductData.selling_price}</b><del>₹{ProductData.mrp}</del></span>
                                                {prodDiscount !== '' &&
                                                    <span className={`${styles.offerPercentage} d-inline-flex`}>{prodDiscount}% &nbsp;OFF</span>}
                                            </div>
                                        )}
                                    </div>
                                    {ProductData?.description !== '' && ProductData?.description !== null && ProductData?.description !== "Not available" &&
                                        <div className={`col-12 d-inline-flex flex-column my-3`}>
                                            <div className={`${styles.productDescHeader} col-12 d-inline-flex align-items-center justify-content-between`} onClick={() => openDescription()} role="button">
                                                <h3 className={`${styles.productDescTitle} d-inline-flex m-0`}>Product Description</h3>
                                                <span className={`${styles.headerArrow} ${descActive === true && styles.arrowActive} d-inline-flex`}>
                                                    <DownArrowIcon /></span>
                                            </div>
                                            {descActive === true &&
                                                <div className={`${styles.prodDescAnswer} d-inline-flex col-12`}>{ProductData?.description?.replace(/(<([^>]+)>)/gi, " ")}</div>
                                            }
                                        </div>
                                    }
                                    <span role="button" className={`${styles.continueShop} col-5 d-inline-flex align-items-center justify-content-center text-uppercase`} onClick={(e) => addToCart(e, ProductData)}>Add to cart</span>
                                    <div className="col-12 d-inline-block mt-3 mb-3">
                                        <h3 className={`${styles.deliveryHeading} col-12 d-inline-block mt-0 mb-4`}>Delivery &amp; Services</h3>
                                        <div className={`col-12 d-inline-block`}>
                                            <div className={`${styles.deliveryInputBox} d-inline-flex align-items-center col-12 position-relative mb-1`}>
                                                <LocationIcon color="#151515" />
                                                <input type="number" className={`${styles.deliveryInput} col-12 d-inline-block position-relative`} maxLength="6" minLength="6" placeholder="Enter Delivery Pincode" onChange={(e) => getDeliveyPincode(e.target.value)} value={pincode} />
                                                <button onClick={() => getDeliveyInfo(pincode)} type="button" className={`${styles.deliveryBtn} position-absolute d-inline-flex h-100 align-items-center justify-content-center`}>Check</button>
                                            </div>
                                            <span className={`${styles.checkZiperror} col-12 d-inline-block`}></span>
                                            {Object.keys(deliveryDetail)?.length > 0 &&
                                                <div className={`${styles.checkDeliveryResponse} d-inline-flex flex-column col-12 mt-3 p-3`}>
                                                    {deliveryDetail.max_days !== '' || deliveryDetail.min_days !== '' ? (
                                                        <p className={`${styles.checkDeliveryDateOuter} col-12 mb-1 d-inline-block`}>
                                                            <span className={`${styles.checkDeliveryLabel} d-inline-flex`}>Expected Delivery - &nbsp;</span>
                                                            {deliveryDetail.min_days !== '' ? (<span>Min:&nbsp;<strong className={`${styles.checkDeliveryDate} d-inline-flex`}>{deliveryDetail.min_days} Days</strong></span>) : null}
                                                            {deliveryDetail.max_days !== '' && deliveryDetail.min_days !== '' && 
                                                                <span>&nbsp;and&nbsp;</span>
                                                            }
                                                            {deliveryDetail.max_days !== '' ? (<span>Max:&nbsp;<strong className={`${styles.checkDeliveryDate} d-inline-flex`}>{deliveryDetail.max_days} Days</strong></span>) : null}
                                                        </p>
                                                    ): null}

                                                    {/* <p className={`${styles.checkDeliveryDateOuter} col-12 mb-1 d-inline-block`}><span>Available for Pickup at: </span><strong id="deliveryLoc" className={`${styles.checkDeliveryLabel} d-inline-flex`}>32, Chhattarpur Main Road, Chandan Hola, New Delhi 110074</strong></p>
                                                    <p className={`${styles.checkDeliveryDateOuter} col-12 mb-1 d-inline-block`}><span>Store Contact: </span><span className={`${styles.checkDeliveryLabel} d-inline-flex`}><Link href="tel:+919911163300" id="storeTel">+91-9911163300</Link></span></p>
                                                    <p className={`${styles.checkDeliveryDateOuter} col-12 mb-1 d-inline-block`}><span>Locate Store: </span><span className={`${styles.checkDeliveryLabel} d-inline-flex`}><a href="https://goo.gl/maps/kZkVQaE2PuH39BWz9" target="_blank">Google Map</a></span></p> */}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-12 d-inline-block mb-5`}>
                        <FeaturedProducts product={ProductData.featured} />
                        <SimilarProduct product={ProductData.similar} />
                    </div>
                    <Footer />
                </React.Fragment>
            ) : (
                <React.Fragment></React.Fragment>
            )}
        </React.Fragment>
    )
}