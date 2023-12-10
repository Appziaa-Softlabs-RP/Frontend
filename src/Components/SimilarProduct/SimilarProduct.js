import React from "react";
import styles from './SimilarProduct.module.css';

export const SimilarProduct = () => {
    return (
        <React.Fragment>
            <div className={`${styles.similarProductBox} col-12 d-inline-block p-0`}>
				<h2 className={`${styles.availSizeTitle} mb-0 mt-3 col-12 d-inline-flex align-items-center justify-content-between`}>Similar Products</h2>
				<span className={`${styles.smallTitle} col-12 mb-3 d-inline-block float-left`}>Explore similar products</span>

				<div className={`${styles.allFeaturedProduct} col-12 mb-3`}>


					<div className={`${styles.singleFeaturedProduct} d-inline-block position-relative overflow-hidden`}>
                        
                        <span className={`${styles.featureOffBox} float-right`}>  OFF</span>
                            
						<div className={`${styles.featuredImageBox} position-relative col-12 mt-1 float-left overflow-hidden mb-1`}>
                            
                            <span className={`${styles.soldOutText} position-absolute d-block`}>Sold Out</span>
                                
							<img src="{{$fvalue['image']}}" className="position-absolute h-100 col-12 p-0"/>
						</div>

						<span className={`${styles.offerItemName} col-12 p-0 mb-1`}>

                        </span>
						
                        <div className="col-12 float-left p-0 d-inline-block">
                            <span className={`${styles.offerPrice} col-12 p-0 d-inline-block float-left`}><b>₹ </b></span>
                            <del className={`${styles.offerDiscountPrice} col-12 p-0 d-inline-block float-left`}>₹ </del>
                        </div>
                            
                        <div className="col-12 float-left p-0 d-inline-block">
                            <span className={`${styles.offerPrice} col-12 p-0 d-inline-block float-left`}><b>₹ </b></span>
                        </div>
                            
						<div className={`${styles.itemQuantityBtn} position-absolute`}>
							<input type="hidden" value="{{$store->id}}"/>
						    <input type="hidden" value="{{$fvalue['product_id']}}"/>
						    <input type="hidden" value="{{$fvalue->company_id}}"/>
                            

                            <span id="quant_input">
                                <input type="text" readonly value="0"  className={`${styles.countValue} d-inline-block`}/>
                            </span>

							<button className={`${styles.addQtyBox} d-inline-flex align-items-center justify-content-center ${styles.increaseBtn}`}>+</button>
                            

							<button className="d-inline-flex flex-shrink-0">
							    <span className={`${styles.decrease_btn} ${styles.minusIcon} d-inline-flex`}>-</span>
							</button>

						    <span className="d-inline-flex flex-shrink-0">
							    <input type="text" readonly  value="" className={`${styles.countValue} d-inline-block`}/>
						    </span>

						    <button className="d-inline-flex flex-shrink-0">
							    <span className={`${styles.increase_btn} ${styles.plusIcon} d-inline-flex`}>+</span>
						    </button>

						</div>
					</div>
				</div>
			</div>
        </React.Fragment>
    )
}