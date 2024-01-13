import React from "react";
import styles from './SimilarProduct.module.css';
import { useApp } from "../../context/AppContextProvider";
import { ProductCard } from "../ProductCard/ProductCard";

export const SimilarProduct = ({product}) => {
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;
	
    return (
        <React.Fragment>
            <div className={`${styles.similarProductBox} col-12 d-inline-flex flex-column py-4`}>
				<div className={`${windowWidth === "mobile" && 'p-0'} container`}>
					<h2 className={`${styles.availSizeTitle} mt-0 col-12 d-inline-flex align-items-center justify-content-between px-4`}>Similar Products</h2>
					{windowWidth === "mobile" &&
						<span className={`${styles.smallTitle} col-12 mb-3 d-inline-block float-left px-4`}>Explore similar products</span>
					}
					<div className={`${styles.allFeaturedProduct} col-12 mb-3 px-4 d-inline-flex gap-3`}>
						{product?.map((item, index) => {
							return (
								<div className="col-5 flex-shrink-0">
									<ProductCard item={item} index={index} />
								</div>
							)
						})}
					</div>
				</div>
			</div>
        </React.Fragment>
    )
}