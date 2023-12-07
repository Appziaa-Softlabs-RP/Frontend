import React from "react";
import styles from './ProductListCard.module.css';

export const ProductListCard = () => {
    return (
        <React.Fragment>
            <div className="product_section_four container-fluid">
                
		<a className="products_glance col-12 pr-0 d-inline-block text-decoration-none">
			<div className="col-md-12 p-0 d-inline-flex align-items-center">
				<div className="offer-img-container float-left flex-shrink-0 text-decoration-none position-relative">
					
                    <img src="https://store.rewardsplus.in/uploads/app/public/company/product/{{$getProduct->photo}}" className="sec_eight_item_img"/>
                            
                    <img src="{{ asset('public/images/image-not-available.jpg')}}" className="sec_eight_item_img"/>
                    
                    <span className="sold-out-text position-absolute d-block">Sold Out</span>
                    
				</div>
				<div className="col-8 float-left pr-0">
					<div className="col-md-12 p-0">
						<span className="item_name"><span className="offer-item-name text-decoration-none"></span></span>
					</div>
					<div className="offer-price-box d-inline-flex align-items-center col-md-12 mb-1 pl-0 flex-wrap">
						
							<span className="offer-price"><b>₹ </b></span>
                            
							<span className="offer-price"><b>₹ </b> <del>₹ </del></span>
                            
                            <span className="offer-percentage"> &nbsp;OFF</span>

							<span className="save-price col-md-12 d-inline-block p-0 float-left">Save ₹ </span>
                            
					</div>
				</div>
			</div>
			<div className="item-quantity-btn position-absolute">
				<div className="col-2 item_quantity_btn">
					<div className="col-12 p-0">
						<input type="hidden" value="{{$store->id}}"/>
						<input type="hidden" value="{{$getProduct->id}}"/>
						<input type="hidden" value="{{$getProduct->company_id}}"/>
					
                    
                        <div className="item-peice">
                            <button className="d-inline-flex flex-shrink-0">
	    						<span className="decrease_btn minus-icon">-</span>
							</button>
						 
						    <span className="d-inline-flex flex-shrink-0">
							    <input type="text" readonly className="countValue d-inline-block piece_value"/>
						    </span>

						    <button className="d-inline-flex flex-shrink-0">
							    <span className="increase_btn plus-icon increase_btn">+</span>
						    </button>
					    </div>
                        
						<div className="item-peice">
							<button className="d-inline-flex flex-shrink-0">
								<span className="decrease_btn minus-icon">-</span>
							</button>
											
                            <span className="d-inline-flex flex-shrink-0">
                                <input type="text" readonly value="0" className="countValue piece_value"/>
                            </span>

                            <button className="d-inline-flex flex-shrink-0">
								<span className="increase_btn plus-icon">+</span>
                            </button>
                        </div>
                         
					</div>
				</div>
			</div>
		</a>
	</div>
        </React.Fragment>
    )
}