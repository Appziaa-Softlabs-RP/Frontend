import React, { useEffect, useState } from "react";
import styles from './ProductPage.module.css';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { FeaturedProducts } from "../../Components/FeaturedProducts/FeaturedProducts";
import { SimilarProduct } from "../../Components/SimilarProduct/SimilarProduct";
import { useApp } from "../../context/AppContextProvider";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { CrossIcon, DownArrowIcon, FacebookIcon, LocationIcon, ShareIcon, TwitterIcon, WhatsAppIcon, PinterestIcon, CopyIcon } from "../../Components/siteIcons";
import { AppNotification } from "../../utils/helper";
import { enviroment } from "../../enviroment";
import axios from "axios";
import delivery from '../../assets/images/free-delivery.png';
import orignal from '../../assets/images/original.png';
import replacement from '../../assets/images/7-days-money-back-guarantee-icon.png';
import ApiService from "../../services/ApiService";

let otherInfo = false;
export const ProductPage = () => {
    const appData = useApp();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const locationState = useLocation();
    const [prodMainImg, setProdMainImg] = useState('');
    const [pincode, setPincode] = useState('');
    const [deliveryDetail, setDeliveryDetail] = useState({});
    const [activeImg, setActiveImg] = useState('');
    const [prodDiscount, setProdDiscount] = useState(0);
    const [descActive, setDescActive] = useState(true);
    const [prodAdded, setProdAdded] = useState(false);
    const [prodAddedQty, setProdAddedQty] = useState(0);
    const [prodSharePop, setProdSharePop] = useState(false);
    const [ProductData, setProductData] = useState(locationState?.state?.product);
    const [shareProdName, setShareProdName] = useState(encodeURIComponent(ProductData?.name));
    const userInfo = appData?.appData?.user;
    let windowWidth = appData.appData.windowWidth;
    const pageCurrentURL = encodeURIComponent(window.location.href);

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
        e.preventDefault();
        let cartInfo = appData?.appData?.cartData;
        let ProdId = ProductData.product_id ? ProductData.product_id : ProductData?.id;
        let prodName = ProductData?.name;
        let Mrp = ProductData?.mrp;
        let sellingPrice = ProductData?.selling_price;
        let Quantity = 1;
        let noQty = ProductData?.no_of_quantity_allowed;
        let dealType = ProductData?.deal_type ? ProductData?.deal_type : 0;
        let dealId = ProductData?.deal_type_id;

        let cardObj = {
            company_id: parseInt(enviroment.COMPANY_ID),
            store_id: parseInt(enviroment.STORE_ID),
            product_id: ProdId,
            image: ProductData?.image ? ProductData.image : ProductData?.image_url,
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

        let cartDataJson = [{
            product_id: ProdId,
            product_name: prodName,
            mrp: Mrp,
            selling_price:sellingPrice,
            quantity: Quantity,
            no_of_quantity_allowed: noQty,
            is_hot_deals: dealType,
            deal_type_id: dealId
        }];

        if (appData.appData?.user?.customer_id) {
            const payload = {
                company_id: parseInt(enviroment.COMPANY_ID),
                store_id: parseInt(enviroment.STORE_ID),
                customer_id: userInfo.customer_id,
                cartJson: JSON.stringify(cartDataJson)
            }
            ApiService.addMultipleCart(payload).then((res) => {
                if(res?.message === 'Add successfully.'){
                    let resCart = res.payload_cartList_items;
                    appData.setAppData({ ...appData.appData, cartSaved: true, cartData: resCart, cartCount: resCart?.length, cartID: res.payload_cartList_id });
                    localStorage.setItem('cartSaved', true);
                    localStorage.setItem('cartID', res.payload_cartList_id);
                    localStorage.setItem('cartData', JSON.stringify(resCart));
                }
            }).catch((err) => {
                return err;
            });
        }
        e.stopPropagation();
    }
    

    const updateProdQty = (e, prodID, allowQty, currQty, type, stock) => {
        e.preventDefault();
        let cartInfo = appData?.appData?.cartData;
        let cartProdID = cartInfo.findIndex((obj) => obj.product_id === prodID);
        if (type === 'plus') {
            if(stock >= currQty){
                if (currQty === allowQty) {
                    AppNotification('Error', 'You have reached the product quantity limit.', 'danger');
                } else {
                    let newQty = currQty + 1;
                    cartInfo[cartProdID].quantity = newQty;
                }
            }else {
                AppNotification('Error', 'You have reached the product quantity limit.', 'danger');
            }
        } else {
            let newQty = currQty - 1;
            if (newQty === 0) {
                let cartID = cartInfo[cartProdID].cart_id;
                if(appData.appData.cartSaved === true && cartID !== null && cartID != undefined){
                    const payload = {
                        store_id: parseInt(enviroment.STORE_ID),
                        customer_id: userInfo.customer_id,
                        cart_id: cartID,
                        product_id: prodID
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
            let productID = ProductData?.product_id ? ProductData.product_id : ProductData.id
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

    const getDeliveyPincode = (val) => {
        setPincode(val);
        if(val.length < 6){
            setDeliveryDetail({});
        }
    }

    const getDeliveyInfo = (val) => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var day = new Date();

        if(val.length > 5){
            axios.post(`${enviroment.DELIVERY_URL}/pincode-status`, {
                store_email: 'knickk8@gmail.com',
                pincode:val
            }).then(function (res) {
                if(res.data.message === "Delivery found"){
                    AppNotification('Success', 'Product Delivery Found', 'success');
                    if(res?.data?.data?.max_days && res?.data?.data?.min_days){
                        var fromDay = new Date(day);
                        fromDay.setDate(day.getDate() + res.data.data.min_days);
                        let fromMonth = weekNames[fromDay.getDay()];
                        let fromWeek = monthNames[fromDay.getMonth()];
                        let fromDate = fromDay.getDate();
                        fromDay = fromMonth+', '+fromDate+' '+fromWeek;
                        var nextDay = new Date(day);
                        nextDay.setDate(day.getDate() + res.data.data.max_days);
                        let nextMonth = weekNames[nextDay.getDay()];
                        let nextWeek = monthNames[nextDay.getMonth()];
                        let nextDate = nextDay.getDate();
                        nextDay = nextMonth+', '+nextDate+' '+nextWeek;
                        setDeliveryDetail({minDays: fromDay, maxDays: nextDay});
                    }else if(res?.data?.data?.max_days){
                        var nextDay = new Date(day);
                        nextDay.setDate(day.getDate() + res.data.data.max_days);
                        let nextMonth = weekNames[nextDay.getDay()];
                        let nextWeek = monthNames[nextDay.getMonth()];
                        let nextDate = nextDay.getDate();
                        nextDay = nextMonth+', '+nextDate+' '+nextWeek;
                        setDeliveryDetail({maxDays: nextDay});
                    }else if(res?.data?.data?.min_days){
                        var fromDay = new Date(day);
                        fromDay.setDate(day.getDate() + res.data.data.min_days);
                        let fromMonth = weekNames[fromDay.getDay()];
                        let fromWeek = monthNames[fromDay.getMonth()];
                        let fromDate = fromDay.getDate();
                        fromDay = fromMonth+', '+fromDate+' '+fromWeek;
                        setDeliveryDetail({minDays: fromDay});
                    }else{
                        setDeliveryDetail({});
                    }
                }
            }).catch(function (error) {
            });
        }else{
            setDeliveryDetail({});
        }
    }

    const showCheckoutPage = () => {
        navigate('/checkout');
    }

    const copylinkUrl = () => {
        var copyText = document.getElementById("myUrlInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        AppNotification('Copied', 'URL Copied to clipboard.', 'success');
    }

    useEffect(() => {
        checkProdAdded();
    }, [appData.appData.cartData]);

    useEffect(() => {
        if(ProductData === undefined){
            let prodId = searchParams.get('id');
            const payload = {
                product_id: prodId,
                company_id: parseInt(enviroment.COMPANY_ID),
                store_id: parseInt(enviroment.STORE_ID)
            }
            ApiService.productDetails(payload).then((res) => {
                if (res.message === "Product Detail") {
                    setProductData(res.payload);
                } else {
                    AppNotification('Error', 'Sorry, Product detail not found.', 'danger');
                }
            }).catch((err) => {
                AppNotification('Error', 'Sorry, Product detail not found.', 'danger');
            });
        }else{
            window.scrollTo(0, 0);
            setProductData(locationState?.state?.product)
            setProdMainImg(ProductData?.image);

            let discountOff = '',
            ProductMrp = parseFloat(ProductData?.mrp),
            ProdutSellPrice = parseFloat(ProductData?.selling_price);

            if (ProductMrp > ProdutSellPrice) {
                discountOff = ((ProductData?.mrp - ProductData?.selling_price) * 100) / ProductData?.mrp;
                discountOff = Math.ceil(discountOff);
                setProdDiscount(discountOff);
            }
            
            if(ProductData?.specifications !== null || ProductData?.specifications !== undefined){
                Object.values(ProductData?.specifications).map((item) => {
                    if (item !== '' && item !== null && item !== undefined) {
                        otherInfo = true;
                    }
                });
            }
        }
    }, [locationState?.state?.product]);

    useEffect(() => {    
        setShareProdName(encodeURIComponent(ProductData?.name));
        setProdAddedQty(ProductData.no_of_quantity_allowed);
        setProdMainImg(ProductData?.image);
        let discountOff = '',
        ProductMrp = parseFloat(ProductData?.mrp),
        ProdutSellPrice = parseFloat(ProductData?.selling_price);

        if (ProductMrp > ProdutSellPrice) {
            discountOff = ((ProductData?.mrp - ProductData?.selling_price) * 100) / ProductData?.mrp;
            discountOff = Math.ceil(discountOff);
            setProdDiscount(discountOff);
        }
        
        if(ProductData?.specifications !== null || ProductData?.specifications !== undefined){
            Object.values(ProductData?.specifications).map((item) => {
                if (item !== '' && item !== null && item !== undefined) {
                    otherInfo = true;
                }
            });
        }
    }, [ProductData]);

    return (
        <React.Fragment>
            {windowWidth === "mobile" ? (
                <React.Fragment>
                    <PageHeader title={ProductData?.name} />
                    <div className="col-12 d-inline-block position-relative">
                        {ProductData?.stock === 0 &&
                            <div className={`${styles.productSoldOutBox} position-absolute col-12 p-0 h-100`}>
                                <span className={`${styles.soldOutText} text-center text-uppercase position-absolute d-block`}>Sold Out</span>
                            </div>
                        }
                        <ReactOwlCarousel className={`${styles.bannerContainer} col-12 owl-theme`} margin={0} loop={false} dots={true} items={1}>
                            {ProductData?.gallery?.map((item, index) => {
                                return (
                                    <div className={`col-12 d-inline-block`} key={index}>
                                        <img src={item.image_url} alt={ProductData?.name} className="object-fit-cover col-12 d-inline-block" />
                                    </div>
                                )
                            })}
                        </ReactOwlCarousel>
                    </div>

                    <div className={`${styles.productAllDetail} col-12 d-inline-block p-4`}>
                        <h2 className={`${styles.productDetailName} col-12 mb-1`}>{ProductData?.name}</h2>
                        <span className='ml-3 mb-2'>Item Code: {ProductData?.barcode} </span>
                        <div className={`d-inline-flex align-items-center col-12 mb-0 position-relative`}>
                            {ProductData?.selling_price === ProductData?.mrp ? (
                                <span className={`${styles.offerPrice}`}><b>₹{ProductData?.mrp}</b></span>
                            ) : (
                                <React.Fragment>
                                    <span className={`${styles.offerPrice}`}><b>₹{ProductData?.selling_price}</b> <del>₹{ProductData?.mrp}</del></span>
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
                        <FeaturedProducts product={ProductData?.featured} />
                        <SimilarProduct product={ProductData?.similar} />
                    </div>
                    <div className={`${styles.productBtnBox} d-inline-flex align-items-stretch col-12 position-fixed bottom-0 start-0`}>
                        <span className={`${styles.goCartBtn} position-relative col-6 d-inline-flex align-items-center justify-content-center`} onClick={() => showCheckoutPage()}>Go to Cart</span>
                        <span className={`${styles.AddCartBtn} ${ProductData?.stock === 0 ? styles.disableCartBtn: ''} position-relative col-6 d-inline-flex align-items-center justify-content-center`} onClick={(e) => addToCart(e, ProductData)}>Add to Cart</span>
                    </div>
                </React.Fragment>
            ) : windowWidth === 'desktop' ? (
                <React.Fragment>
                    <Header />
                    <div className="col-12 d-inline-flex">
                        <div className="container">
                            <div className={`col-12 d-inline-flex align-items-start position-relative gap-4 mb-4`}>
                                <div className={`d-inline-flex flex-column gap-3 col-6 flex-shrink-1 position-sticky top-0 mt-5`}>
                                    <div className={`${styles.productContainer} d-inline-flex flex-column gap-3 col-12 pb-3`}>
                                        <div className={`${styles.productMainImage} col-12 d-inline-block position-relative`}>
                                            <span className={`${styles.shareIcon} d-inline-flex align-items-center justify-content-center position-absolute top-0 end-0 p-3`} role="button" onClick={() => setProdSharePop(true)}>
                                                <ShareIcon color="#CF112D" />
                                            </span>
                                            <img src={prodMainImg} alt={ProductData?.name} className="object-fit-contain m-auto bottom-0 end-0 h-100 top-0 start-0 col-12 d-inline-block position-absolute" />
                                        </div>
                                        <ReactOwlCarousel key={activeImg} className={`${styles.productGalleryRow} col-12 owl-theme galleryBox px-3`} margin={10} loop={false} dots={false} items={6}>
                                            {ProductData?.gallery?.map((item, index) => {
                                                return (
                                                    <div className={`${styles.galleryBox} ${activeImg === index ? styles.activeGallery : ''} col-12 d-inline-flex align-items-center justify-content-center`} onClick={() => setMainImage(item.image_url, index)} key={index}>
                                                        <img src={item.image_url} alt={ProductData?.name} className="object-fit-cover col-12 d-inline-block" />
                                                    </div>
                                                )
                                            })}
                                        </ReactOwlCarousel>
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
                                </div>
                                <div className={`${styles.productDetailBox} d-inline-flex flex-column gap-3 col-6 flex-shrink-1 align-items-start justify-content-start px-4 pt-5`}>
                                    <h2 className={`${styles.productDetailName} col-12 mb-1 mt-4`}>{ProductData?.name}</h2>
                                    <div className={`${styles.productSubLine} d-inline-flex align-items-center gap-2 col-12 mb-0 position-relative`}>
                                        {ProductData?.gender ? ProductData?.gender+'Y+' : ''}
                                        {ProductData?.gender !== null && ProductData?.gender_name !== null &&
                                            <span className={`${styles.spaceLine} d-inline-flex`}>|</span>
                                        }
                                        {ProductData?.gender_name ? ProductData?.gender_name : ''}
                                        {ProductData?.brand_name !== null && ProductData?.gender_name !== null &&
                                            <span className={`${styles.spaceLine} d-inline-flex`}>|</span>
                                        }
                                        {ProductData?.brand_name ? ProductData?.brand_name : ''}
                                    </div>
                                    <span className='ml-3 mb-0'>Item Code: {ProductData?.barcode} </span>
                                    <div className={`d-inline-flex align-items-start flex-column gap-2 col-12 mb-4 position-relative`}>
                                        <h2 className={`${styles.specialTitle} d-inline-flex m-0`}>Special Price</h2>
                                        {ProductData?.selling_price === ProductData?.mrp ? (
                                            <span className={`${styles.offerPrice}`}><b>₹{ProductData?.mrp}</b></span>
                                        ) : (
                                            <div className="col-12 d-inline-flex align-items-center gap-3">
                                                <span className={`${styles.offerPrice} d-inline-flex align-items-center gap-2`}><b>₹{ProductData?.selling_price}</b><del>₹{ProductData?.mrp}</del></span>
                                                {prodDiscount !== '' &&
                                                    <span className={`${styles.offerPercentage} d-inline-flex`}>{prodDiscount}% &nbsp;OFF</span>}
                                            </div>
                                        )}
                                    </div>
                                    {!prodAdded ? (
                                        <span role="button" className={`${styles.continueShop} ${ProductData?.stock === 0 ? styles.disableCartBtn: ''} col-5 d-inline-flex align-items-center justify-content-center text-uppercase`} onClick={(e) => addToCart(e, ProductData)}>Add to cart</span>
                                    ) : (
                                        <div className={`${styles.itemQuantityBtnBox} d-inline-flex align-items-center position-relative`}>
                                            <span role="button" onClick={(e) => updateProdQty(e, ProductData?.product_id ? ProductData.product_id : ProductData.id, ProductData?.no_of_quantity_allowed, prodAddedQty, 'minus', ProductData?.stock)} className={`${styles.decrease_btn} ${styles.minusIcon} d-inline-flex align-items-center justify-content-center`}>-</span>
                                            <span className="d-inline-flex flex-shrink-0">
                                                <input type="text" readOnly value={prodAddedQty} className={`${styles.countValue} d-inline-block text-center`} />
                                            </span>
                                            <span role="button" onClick={(e) => updateProdQty(e, ProductData?.product_id ? ProductData.product_id : ProductData.id, ProductData?.no_of_quantity_allowed, prodAddedQty, 'plus', ProductData?.stock)} className={`${styles.increase_btn} ${styles.plusIcon} d-inline-flex align-items-center justify-content-center`}>+</span>
                                        </div>
                                    )}
                                    <div className={`${styles.qualityAssured} col-12 d-inline-flex aliign-items-stretch gap-4 mt-4 p-4`}>
                                        <div className={`${styles.assuredBox} col-4 flex-shrink-1 d-inline-flex flex-column align-items-center gap-2`}>
                                            <img src={delivery} alt="delivery" className="object-fit-contain"/>
                                            <h6 className={`${styles.assuredTitle} col-12 d-inline-flex justify-content-center mb-0`}>Free Home Delivery</h6>
                                            <p className={`${styles.assuredDesc} m-0 col-12 d-inline-flex justify-content-center text-center`}>More than 19,000 pincodes, seamlessly connected.</p>
                                        </div>
                                        <div className={`${styles.assuredBox} col-4 flex-shrink-1 d-inline-flex flex-column align-items-center gap-2`}>
                                            <img src={orignal} alt="orignal" className="object-fit-contain"/>
                                            <h6 className={`${styles.assuredTitle} col-12 d-inline-flex justify-content-center mb-0`}>100% Original</h6>
                                            <p className={`${styles.assuredDesc} m-0 col-12 d-inline-flex justify-content-center text-center`}>Backed by manufacturer warranty.</p>
                                        </div>
                                        <div className={`${styles.assuredBox} col-4 flex-shrink-1 d-inline-flex flex-column align-items-center gap-2`}>
                                            <img src={replacement} alt="replacement" className="object-fit-contain"/>
                                            <h6 className={`${styles.assuredTitle} col-12 d-inline-flex justify-content-center mb-0`}>7 Days Replacement</h6>
                                            <p className={`${styles.assuredDesc} m-0 col-12 d-inline-flex justify-content-center text-center`}>Shop risk-free with our 7-day return policy.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 d-inline-block mt-3 mb-3">
                                        <h3 className={`${styles.deliveryHeading} col-12 d-inline-block mt-0 mb-4`}>Delivery &amp; Services</h3>
                                        <div className={`col-12 d-inline-block`}>
                                            <div className={`${styles.deliveryInputBox} d-inline-flex align-items-center col-12 position-relative mb-1`}>
                                                <LocationIcon color={enviroment.PRIMARY_COLOR} />
                                                <input type="number" className={`${styles.deliveryInput} col-12 d-inline-block position-relative`} maxLength="6" minLength="6" placeholder="Enter Delivery Pincode" onChange={(e) => getDeliveyPincode(e.target.value)} value={pincode || ''} />
                                                <button onClick={() => getDeliveyInfo(pincode)} type="button" className={`${styles.deliveryBtn} position-absolute d-inline-flex h-100 align-items-center justify-content-center`}>Check</button>
                                            </div>
                                            <span className={`${styles.checkZiperror} col-12 d-inline-block`}></span>
                                            {Object.keys(deliveryDetail)?.length > 0 &&
                                                <div className={`${styles.checkDeliveryResponse} d-inline-flex flex-column col-12 mt-3 p-3`}>
                                                    {deliveryDetail.maxDays !== '' || deliveryDetail.minDays !== '' ? (
                                                    <p className={`${styles.checkDeliveryDateOuter} col-12 mb-1 d-inline-block`}>
                                                        <span className={`${styles.checkDeliveryLabel} d-inline-flex`}>Expected Delivery Date - &nbsp;</span>
                                                        {deliveryDetail.minDays !== '' ? (<span><strong className={`${styles.checkDeliveryDate} d-inline-flex`}>{deliveryDetail.minDays}</strong></span>) : null}
                                                        {deliveryDetail.maxDays !== '' && deliveryDetail.min_days !== '' && 
                                                            <span>&nbsp;-&nbsp;</span>
                                                        }
                                                        {deliveryDetail.maxDays !== '' ? (<span><strong className={`${styles.checkDeliveryDate} d-inline-flex`}>{deliveryDetail.maxDays}</strong></span>) : null}
                                                    </p>
                                                    ): ''}

                                                    <p className={`${styles.checkDeliveryDateOuter} col-12 mb-1 d-inline-block`}><span>Available for Pickup at: </span><strong id="deliveryLoc" className={`${styles.checkDeliveryLabel} d-inline-flex`}>42, Cycle Market, Jhandewalan Extension, New Delhi 110055.</strong></p>
                                                    <p className={`${styles.checkDeliveryDateOuter} col-12 mb-1 d-inline-block`}><span>Store Contact: </span><span className={`${styles.checkDeliveryLabel} d-inline-flex`}><Link className={`${styles.checkDeliveryDateOuter} text-decoration-none d-inline-flex`} to={`tel:${enviroment.PHONE_NUMBER}`} id="storeTel">{enviroment.PHONE_NUMBER}</Link></span></p>
                                                    <p className={`${styles.checkDeliveryDateOuter} col-12 mb-1 d-inline-block`}><span>Locate Store: </span><span className={`${styles.checkDeliveryLabel} d-inline-flex`}><Link to="https://maps.app.goo.gl/gyhzfKFKBJZJkPfa6" target="_blank" className={`${styles.checkDeliveryDateOuter} text-decoration-none d-inline-flex`}>Google Map</Link></span></p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-12 d-inline-block mb-5`}>
                        <FeaturedProducts product={ProductData?.featured} />
                        <SimilarProduct product={ProductData?.similar} />
                    </div>
                    <Footer />
                </React.Fragment>
            ) : (
                <React.Fragment></React.Fragment>
            )}
            <div className={`${styles.productShare} position-fixed top-0 bottom-0 start-0 end-0 align-items-center justify-content-center ${prodSharePop === true ? 'd-inline-flex' : 'd-none'}`}>
                <div className={`${styles.productShareContainer} col-4 d-inline-flex flex-column position-relative p-3`}>
                    <div className="col-12 d-inline-flex align-items-center justify-content-between px-2 mb-4">
                        <h4 className={`${styles.shareProdTitle} d-inline-flex`}>Share this product</h4>
                        <span role="button" onClick={() => setProdSharePop(false)} className={`${styles.closeIcon} d-inline-flex align-items-center justify-content-center`}>
                            <CrossIcon color="#000" />
                        </span>
                    </div>
                    <div className="col-12 mb-5 d-inline-flex justify-content-center align-items-center">
						<div className={`${styles.prodCustomUrl} col-10 position-relative d-inline-flex align-items-center`}>
							<span className={`${styles.customUrl} col-12 d-inline-block p-2 `}>{window.location.href}</span>
                            <span className={`${styles.copyLink} position-absolute d-inline-flex align-items-center justify-content-center`} onClick={() => copylinkUrl()}>
                                <CopyIcon color="#000" />    
                            </span>
							<input type="text" readOnly={true} value={window.location.href} className="d-none" id="myUrlInput"/>
						</div>
					</div>

                    <div className={`${styles.socialShare} col-12 d-inline-flex justify-content-evenly align-items-center mb-5`}>
						<Link to={`https://facebook.com/sharer/sharer.php?u=${pageCurrentURL}`} target="_blank" id="ShareFacebook" className={`${styles.shareicon} col-3 text-center d-inline-block`}><FacebookIcon color="#3b5998" /></Link>
						<Link to={`https://pinterest.com/pin/create/bookmarklet/?&url=${pageCurrentURL}&description=${shareProdName}`} target="_blank" id="SharePinterest" className={`${styles.shareicon} col-3 text-center d-inline-block`}><PinterestIcon color="#ce2029" /></Link>
						<Link to={`https://twitter.com/share?url=${pageCurrentURL}&text=${shareProdName}`} target="_blank" id="ShareTwitter" className={`${styles.shareicon} col-3 text-center d-inline-block`}><TwitterIcon color="#00b0ed" /></Link>
						<Link to={`https://web.whatsapp.com://send?text=${pageCurrentURL}${shareProdName}`} target="_blank" id="ShareWhatsapp" className={`${styles.shareicon} col-3 text-center d-inline-block`}><WhatsAppIcon color="#4ced69" /></Link>
					</div>
                </div>
            </div>
        </React.Fragment>
    )
}