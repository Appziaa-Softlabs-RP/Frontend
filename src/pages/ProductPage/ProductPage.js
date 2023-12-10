import React, {useState} from "react";
import styles from './ProductPage.module.css';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { PageHeader } from "../../Components/PageHeader/PageHeader";

export const ProductPage = () => {
    const [productTitle, setProductTitle] = useState('');
    return (
        <React.Fragment>
            <div className="d-inline-flex flex-column col-12"></div>
            <PageHeader title={productTitle} />
            <div className="col-12 d-inline-block position-relative">
                <div className={`${styles.productSoldOutBox} position-absolute col-12 p-0 h-100`}>
                    <span className={`${styles.soldOutText} position-absolute d-block`}>Sold Out</span>
                </div>
                <ReactOwlCarousel className={`${styles.bannerContainer} col-12 d-inline-flex pb-4 owl-theme`} margin={0} loop dots>
                    <div className={`${styles.item} col-12 d-inline-block`}>
                        <img src="" alt="" className="object-fit-cover col-12 d-inline-block" />
                    </div>
                </ReactOwlCarousel>
            </div>

            <div className={`${styles.productAllDetail} col-12 d-inline-block`}>
				<h2 className={`${styles.productDetailName} col-12 mb-1`}> </h2>
				<span className='ml-3 mb-2'>Item Code :  </span>
				<div className={`${styles.offerPriceBox} d-inline-flex align-items-center col-12 mb-0 position-relative`}>
                    <span className={`${styles.offerPrice}`}><b>₹ </b></span>
                    
                    <span className={`${styles.offerPrice}`}><b>₹ </b> <del>₹ </del></span>
                    <span className={`${styles.offerPercentage}`}> &nbsp;OFF</span>
				</div>
				<span className={`${styles.inclusivTax} col-12 d-inline-block`}>(Inclusive of all taxes)</span>
			</div>

            <div className={`${styles.availableSizes} col-12 d-none`}>
				<h2 className={`${styles.availSizeTitle} mb-2 col-12 d-inline-block p-0`}>Available pack size</h2>
				<div className={`${styles.availProdList} col-12 p-0`} id="avail-prod-list">
					
					<div className={`${styles.avialProdBox} col-12 d-inline-flex align-items-center`}>
						<span className={`${styles.availQtyImage} overflow-hidden d-inline-block position-relative`}><img src="{{$ptvalue['image']}}"/></span>
						<div className={`${styles.availProdDetail}`}>
							<div className={`${styles.availPriceRow} d-inline-flex col-12 p-0 align-items-center justify-content-between`}>

                                <span className={`${styles.availPrice}`}><b>₹ </b>&nbsp;<del>₹ </del></span>
                                
                                <span className={`${styles.availPrice}`}><b>₹ </b></span>

								<span className={`${styles.availQtyPrice}`}><b>₹ </b></span>
							</div>
                            
                            <div className={`${styles.savingOfferRow} col-12 p-0 d-inline-block`}>
                                <span className={`${styles.offerPercentage} mr-0`}>
                                </span>
                            </div>
                            
						</div>
						<div className={`${styles.circleSelect} position-absolute d-inline-block`}></div>
					</div>
                    
					<div className={`${styles.avialProdBox} col-12 d-inline-flex align-items-center`}>
						<span className={`${styles.availQtyImage} overflow-hidden d-inline-block position-relative`}><img src=" "/></span>
						<div className={`${styles.availProdDetail}`}>
							<div className={`${styles.availPriceRow} d-inline-flex col-12 p-0 align-items-center justify-content-between`}>
                                
                                <span className={`${styles.availPrice}`}><b>₹ </b>&nbsp;<del>₹ </del></span>
                                
                                <span className={`${styles.availPrice}`}><b>₹ </b></span>
                                
								<span className={`${styles.availQtyPrice}`}><b>₹ </b></span>
							</div>
                            
                            <div className={`${styles.savingOfferRow} col-12 p-0 d-inline-block`}>
                                <span className={`${styles.offerPercentage} mr-0`}> SAVINGS</span>
                            </div>
						</div>
						<div className={`${styles.circleSelect} position-absolute d-inline-block`}></div>
					</div>
                    
				</div>
			</div>

            <div className="d-inline-flex align-items-stretch col-12 position-fixed bottom-0 start-0">
                <span className={`${styles.goCartBtn} d-inline-flex align-items-center justify-content-center`}>Go to Cart</span>
                <span className={`${styles.goCartBtn} d-inline-flex align-items-center justify-content-center`}>Add to Cart</span>
            </div>
        </React.Fragment>
    )
}