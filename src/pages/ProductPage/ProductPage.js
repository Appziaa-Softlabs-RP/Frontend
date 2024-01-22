import React, {useEffect, useState} from "react";
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
import { AddToCart, AppNotification } from "../../utils/helper";

let otherInfo = false;
export const ProductPage = () => {
    const locationState = useLocation();
    const [prodMainImg, setProdMainImg] = useState(0);
    const [pincode, setPincode] = useState('');
    const [activeImg, setActiveImg] = useState(0);
    const [prodDiscount, setProdDiscount] = useState(0);
    const [descActive, setDescActive] = useState(true);
    const [allProdAdded, setAllProdAdded] = useState(null);
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;
    const ProductData = locationState?.state?.product;

    let userInfo = '';
    const isJSON = (str) => {
        try {
            JSON.stringify(JSON.parse(str));
            return true;
        } catch (e) {
            return false;
        }
    }

    if (isJSON(appData)) {
        userInfo = appData?.appData?.user;
    } else {
        userInfo = JSON.parse(appData?.appData?.user);
    }

    const setMainImage = (image, count) => {
        setActiveImg(count);
        setProdMainImg(image);
    }

    const openProductColpse = () => {

    }

    const getDeliveyInfo = () => {

    }

    const openDescription = () => {
        if(descActive === false){
            setDescActive(true);
        }else{
            setDescActive(false);
        }
    }

    const addToCart = (e,productId) => {
        e.preventDefault();
        console.log(ProductData);
        if(userInfo?.customer_id !== '' && userInfo?.customer_id !== null && userInfo?.customer_id !== undefined){
            let ProdId = ProductData.product_id;
            let prodName = ProductData?.name;
            let Mrp = ProductData?.mrp;
            let sellingPrice = ProductData?.selling_price;
            let Quantity = 1;
            let noQty = ProductData?.no_of_q_a;
            let dealType = ProductData?.deal_type;
            let dealId = ProductData?.deal_type_id;
            const res = AddToCart(userInfo?.customer_id,ProdId,prodName,Mrp,sellingPrice,Quantity,noQty,dealType,dealId);
            console.log(res);
            e.stopPropagation();
        }else{
            AppNotification('Error', 'You need to login in first to start shopping.', 'danger');
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        let discountOff = '';
        if(ProductData?.mrp > ProductData?.selling_price){
            discountOff = ((ProductData?.mrp - ProductData?.selling_price) * 100) / ProductData?.mrp;
            discountOff = Math.ceil(discountOff);
            setProdDiscount(discountOff);
        }
        setProdMainImg(ProductData.image);
        {Object.values(ProductData?.other).map((item) => {
            if(item !== '' && item !== null && item !== undefined){
                otherInfo = true;  
            }
        })}
    },[locationState]);
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
                                return(
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
                                    <span className={`${styles.offerPercentage} d-inline-flex`}>{prodDiscount}% &nbsp;OFF</span> }
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
                                {ProductData?.other?.type && <React.Fragment><strong>Type: </strong>{ProductData?.other?.type}<br/></React.Fragment>}
                                {ProductData?.other?.model_name && <React.Fragment><strong>Model Name: </strong>{ProductData?.other?.model_name} <br/></React.Fragment>}
                                {ProductData?.other?.shelf_life && <React.Fragment><strong>Shelf Life: </strong>{ProductData?.other?.shelf_life} <br/></React.Fragment>}
                                {ProductData?.other?.shelf_life_month_years && <React.Fragment><strong>Shelf Life Month Years: </strong>{ProductData?.other?.shelf_life_month_years} <br/></React.Fragment>}
                                {ProductData?.other?.container_type && <React.Fragment><strong>Container Type: </strong>{ProductData?.other?.container_type} <br/></React.Fragment>}
                                {ProductData?.other?.organic && <React.Fragment><strong>Organic: </strong>{ProductData?.other?.organic} <br/></React.Fragment>}
                                {ProductData?.other?.polished && <React.Fragment><strong>Polished: </strong>{ProductData?.other?.polished} <br/></React.Fragment>}
                                {ProductData?.other?.package_dimension_length && <React.Fragment><strong>Package Dimension Length: </strong>{ProductData?.other?.package_dimension_length} <br/></React.Fragment>}
                                {ProductData?.other?.package_dimension_width && <React.Fragment><strong>Package Dimension Width: </strong>{ProductData?.other?.package_dimension_width} <br/></React.Fragment>}
                                {ProductData?.other?.package_dimension_height && <React.Fragment><strong>Package Dimension Height: </strong>{ProductData?.other?.package_dimension_height} <br/></React.Fragment>}
                                {ProductData?.other?.manufactured_by && <React.Fragment><strong>Manufactured By: </strong>{ProductData?.other?.manufactured_by} <br/></React.Fragment>}
                                {ProductData?.other?.packed_by && <React.Fragment><strong>Packed By: </strong>{ProductData?.other?.packed_by} <br/></React.Fragment>}
                                {ProductData?.other?.exp_date && <React.Fragment><strong>Exp Date: </strong>{ProductData?.other?.exp_date} <br/></React.Fragment>}
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
                        <span className={`${styles.AddCartBtn} position-relative col-6 d-inline-flex align-items-center justify-content-center`} onClick={(e) => addToCart(e,ProductData)}>Add to Cart</span>
                    </div>
                </React.Fragment>
            ) : windowWidth === 'desktop' ? (
                <React.Fragment>
                    <Header/>
                    <div className="col-12 d-inline-flex mt-5">
                        <div className="container">
                            <div className={`col-12 d-inline-flex align-items-start position-relative p-3 mb-4`}>
                                <div className={`${styles.productContainer} d-inline-flex flex-column gap-3 col-7 p-3 position-sticky top-0`}>
                                    <div className={`${styles.productMainImage} col-12 d-inline-block position-relative`}>
                                        <img src={prodMainImg} alt={ProductData.name} className="object-fit-contain m-auto bottom-0 end-0 h-100 top-0 start-0 col-12 d-inline-block position-absolute" />
                                    </div>
                                    <ReactOwlCarousel key={activeImg} className={`${styles.productGalleryRow} col-12 owl-theme galleryBox`} margin={10} loop={false} dots={false} items={6}>
                                        {ProductData?.gallery?.map((item, index) => {
                                            return(
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
                                                <span className={`${styles.offerPercentage} d-inline-flex`}>{prodDiscount}% &nbsp;OFF</span> }
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
                                    <span role="button" className={`${styles.continueShop} col-5 d-inline-flex align-items-center justify-content-center text-uppercase`}  onClick={(e) => addToCart(e,ProductData)}>Add to cart</span>
                                    <div className="col-12 d-inline-block mt-3 mb-3">
                                        <h3 className={`${styles.deliveryHeading} col-12 d-inline-block mt-0 mb-4`}>Delivery &amp; Services</h3>
                                        <div className={`col-12 d-inline-block`}>
                                            <div className={`${styles.deliveryInputBox} d-inline-flex align-items-center col-12 position-relative mb-1`}>
                                                <LocationIcon color="#151515" />
                                                <input type="number" className={`${styles.deliveryInput} col-12 d-inline-block position-relative`} maxLength="6" minLength="6" placeholder="Enter Delivery Pincode" onChange={(e) => setPincode(e.target.value)} value={pincode} />
                                                <button onClick={() => getDeliveyInfo()} type="button" className={`${styles.deliveryBtn} position-absolute d-inline-flex h-100 align-items-center justify-content-center`}>Check</button>
                                            </div>
                                            <span className={`${styles.checkZiperror} col-12 d-inline-block`}></span>
                                            <div className={`${styles.checkDeliveryResponse} d-none flex-column col-12 mt-3 p-3`}>
                                                <p className={`${styles.checkDeliveryDateOuter} col-12 mb-1 d-inline-block`}><span className={`${styles.checkDeliveryLabel} d-inline-flex`}>Expected Delivery Date: </span><strong className={`${styles.checkDeliveryDate} d-inline-flex`} id="expectedDelivery"></strong></p>
                                                <p className={`${styles.checkDeliveryDateOuter} col-12 mb-1 d-inline-block`}><span>Available for Pickup at: </span><strong id="deliveryLoc" className={`${styles.checkDeliveryLabel} d-inline-flex`}>32, Chhattarpur Main Road, Chandan Hola, New Delhi 110074</strong></p>
                                                <p className={`${styles.checkDeliveryDateOuter} col-12 mb-1 d-inline-block`}><span>Store Contact: </span><span className={`${styles.checkDeliveryLabel} d-inline-flex`}><Link href="tel:+919911163300" id="storeTel">+91-9911163300</Link></span></p>
                                                <p className={`${styles.checkDeliveryDateOuter} col-12 mb-1 d-inline-block`}><span>Locate Store: </span><span className={`${styles.checkDeliveryLabel} d-inline-flex`}><a href="https://goo.gl/maps/kZkVQaE2PuH39BWz9" target="_blank">Google Map</a></span></p>
                                            </div>
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
                    <Footer/>
                </React.Fragment>
            ) : ( 
                <React.Fragment></React.Fragment> 
            )}
        </React.Fragment>
    )
}