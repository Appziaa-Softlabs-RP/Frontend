import React, {useEffect} from "react";
import styles from './ProductPage.module.css';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { useLocation } from "react-router-dom";
import { FeaturedProducts } from "../../Components/FeaturedProducts/FeaturedProducts";
import { SimilarProduct } from "../../Components/SimilarProduct/SimilarProduct";
import { useApp } from "../../context/AppContextProvider";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";

export const ProductPage = () => {
    const locationState = useLocation();
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;
    const ProductData = locationState?.state?.product;
    let discountOff = '';
    if(ProductData?.mrp > ProductData?.selling_price){
        discountOff = ((ProductData?.mrp - ProductData?.selling_price) * 100) / ProductData?.mrp;
        discountOff = Math.ceil(discountOff);
    }
    let otherInfo = false;
    {Object.values(ProductData?.other).map((item, idx) => {
        if(item !== '' && item !== null && item !== undefined){
            otherInfo = true   
        }
    })}

    const openProductColpse = () => {

    }

    useEffect(() => {
        window.scrollTo(0, 0);
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
                                    <span className={`${styles.offerPercentage} d-inline-flex`}>{discountOff} &nbsp;OFF</span>
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
                        <span className={`${styles.AddCartBtn} position-relative col-6 d-inline-flex align-items-center justify-content-center`}>Add to Cart</span>
                    </div>
                </React.Fragment>
            ) : windowWidth === 'desktop' ? (
                <React.Fragment>
                    <Header/>
                    <div className="col-12 d-inline-flex mt-5">
                        <div className="container">
                            <div className={`${styles.productContainer} col-12 d-inline-flex align-items-stretch p-3 mb-4`}>
                                <div className={`d-inline-flex flex-column gap-3 col-5 p-3`}>
                                    <div className={`${styles.productMainImage} col-12 d-inline-block`}>
                                        <img src={ProductData?.image} alt={ProductData.name} className="object-fit-contain col-12 d-inline-block" />
                                    </div>
                                    <ReactOwlCarousel className={`${styles.productGalleryRow} col-12 owl-theme galleryBox`} margin={10} loop={false} dots={true} items={4}>
                                        {ProductData?.gallery?.map((item, index) => {
                                            return(
                                                <div className={`${styles.galleryBox} col-12 d-inline-flex align-items-center justify-content-center`} key={index}>
                                                    <img src={item.image_url} alt={ProductData.name} className="object-fit-cover col-12 d-inline-block" />
                                                </div>
                                            )
                                        })}
                                    </ReactOwlCarousel>
                                </div>
                                <div className={`${styles.productDetailBox} d-inline-flex flex-column gap-3 col-7 align-items-start justify-content-start p-3`}>
                                    <h2 className={`${styles.productDetailName} col-12 mb-1`}>{ProductData.name}</h2>
                                    <span className='ml-3 mb-1'>Item Code: {ProductData?.barcode} </span>
                                    <div className={`d-inline-flex align-items-start flex-column gap-2 col-12 mb-4 position-relative`}>
                                        <h2 className={`${styles.specialTitle} d-inline-flex m-0`}>Special Price</h2>
                                        {ProductData.selling_price === ProductData.mrp ? (
                                            <span className={`${styles.offerPrice}`}><b>₹{ProductData.mrp}</b></span>
                                        ) : (
                                            <React.Fragment>
                                                <span className={`${styles.offerPrice}`}><b>₹{ProductData.selling_price}</b> <del>₹{ProductData.mrp}</del></span>
                                                <span className={`${styles.offerPercentage} d-inline-flex`}>{discountOff} &nbsp;OFF</span>
                                            </React.Fragment>
                                        )}
                                    </div>
                                    <span role="button" className={`${styles.continueShop} d-inline-flex align-items-center justify-content-center`}>Add to cart</span>
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