import React, {useState} from "react";
import styles from './ProductPage.module.css';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { useLocation } from "react-router-dom";
import { FeaturedProducts } from "../../Components/FeaturedProducts/FeaturedProducts";
import { SimilarProduct } from "../../Components/SimilarProduct/SimilarProduct";

export const ProductPage = () => {
    const locationState = useLocation();
    const ProductData = locationState?.state?.product;
    console.log(ProductData);
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
    return (
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

			<div className={`${styles.productDesciptionBox} col-12 d-inline-block mb-5 p-4`}>
				<h2 className={`${styles.availSizeTitle} mb-3 col-12 d-inline-block p-0`}>Product Details</h2>
                <div className={`${styles.productCollapseBox} mb-4 active col-12 d-inline-block p-0`} onClick={openProductColpse(this)}>
                    <button className={`${styles.productTabBox} col-12 d-inline-flex align-items-center justify-content-between`}><span>About product</span>&nbsp;<span className="close-icon position-relative"></span></button>
                    <div className={`${styles.productDetailText} col-12 p-0`}>{ProductData?.description?.replace(/(<([^>]+)>)/gi, " ")}</div>
                </div>
                
                {otherInfo === true &&
                <div className={`${styles.productCollapseBox} col-12 d-inline-block p-0`} onClick={openProductColpse(this)}>
					<button className={`${styles.productTabBox} col-12 text-decoration-none cursor-pointer d-inline-flex align-items-center justify-content-between`}><span>Other Info</span>&nbsp;<span className="close-icon position-relative"></span></button>
					<p className={`${styles.productDetailText} col-12 p-0`}>
						<strong>Type: </strong>{ProductData?.other?.type}<br/>
						<strong>Model Name: </strong>{ProductData?.other?.model_name} <br/>
						<strong>Shelf Life: </strong>{ProductData?.other?.shelf_life} <br/>
						<strong>Shelf Life Month Years: </strong>{ProductData?.other?.shelf_life_month_years} <br/>
						<strong>Container Type: </strong>{ProductData?.other?.container_type} <br/>
						<strong>Organic: </strong>{ProductData?.other?.organic} <br/>
						<strong>Polished: </strong>{ProductData?.other?.polished} <br/>
						<strong>Package Dimension Length: </strong>{ProductData?.other?.package_dimension_length} <br/>
						<strong>Package Dimension Width: </strong>{ProductData?.other?.package_dimension_width} <br/>
						<strong>Package Dimension Height: </strong>{ProductData?.other?.package_dimension_height} <br/>
						<strong>Manufactured By: </strong>{ProductData?.other?.manufactured_by} <br/>
						<strong>Packed By: </strong>{ProductData?.other?.packed_by} <br/>
						<strong>Exp Date: </strong>{ProductData?.other?.exp_date} <br/>
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
    )
}