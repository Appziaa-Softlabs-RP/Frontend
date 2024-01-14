import React from "react";
import styles from './SimilarProduct.module.css';
import { useApp } from "../../context/AppContextProvider";
import { ProductCard } from "../ProductCard/ProductCard";
import ReactOwlCarousel from "react-owl-carousel";

export const SimilarProduct = ({product}) => {
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;
	
    return (
        <React.Fragment>
            <div className={`${styles.similarProductBox} col-12 d-inline-flex flex-column py-4`}>
				<div className={`${windowWidth === "mobile" && 'p-0'} container`}>
					<h2 className={`${styles.availSizeTitle} mt-0 col-12 d-inline-flex align-items-center justify-content-between ${windowWidth === "mobile" && 'px-4'}`}>Similar Products</h2>
					{windowWidth === "mobile" &&
						<span className={`${styles.smallTitle} col-12 mb-3 d-inline-block float-left px-4`}>Explore similar products</span>
					}
					<ReactOwlCarousel className={`${styles.allFeaturedProduct} brandSilder col-12 pb-4 owl-theme`} margin={10} dots={false} items={`${windowWidth === 'mobile' ? 2 : 5 }`} stagePadding={20} loop={false} nav={true}>
						{product?.map((item, index) => {
							return (
								<ProductCard item={item} index={index} />
							)
						})}
					</ReactOwlCarousel>
				</div>
			</div>
        </React.Fragment>
    )
}