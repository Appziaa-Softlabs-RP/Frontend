import React from "react";
import styles from './FeaturedProducts.module.css';
import { useApp } from "../../context/AppContextProvider";
import { ProductCard } from "../ProductCard/ProductCard";
import ReactOwlCarousel from "react-owl-carousel";

export const FeaturedProducts = ({product}) => {
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;

    return (
        <React.Fragment>
            <div className={`${styles.featuredProductBox} col-12 d-inline-flex flex-column py-4`}>
				<div className={`${windowWidth === "mobile" && 'p-0'} container`}>
					<h2 className={`${styles.availSizeTitle} mt-0 col-12 d-inline-flex align-items-center justify-content-between ${windowWidth === "mobile" && 'px-4'}`}>Featured Products</h2>
					{windowWidth === "mobile" &&
						<span className={`${styles.smallTitle} col-12 mb-3 mt-0 d-inline-block float-left px-4`}>Hurry Up ! Steal  your deals now</span>
					}
					<ReactOwlCarousel className={`${styles.allFeaturedProduct} ${windowWidth === "mobile" && 'px-3'} brandSilder col-12 pb-4 owl-theme`} margin={10} dots={false} items={`${windowWidth === 'mobile' ? 2 : 5 }`} stagePadding={20} loop={false} nav={true}>
						{product?.map((item, index) => {
							return (
								<ProductCard key={index} item={item} index={index} />
							)
						})}
					</ReactOwlCarousel>
				</div>
			</div>
        </React.Fragment>
    )
}