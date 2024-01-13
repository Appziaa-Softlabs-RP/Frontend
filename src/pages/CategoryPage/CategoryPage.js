import React from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useApp } from "../../context/AppContextProvider";

export const CategoryPage = () => {
    const locationState = useLocation();
    const ProductData = locationState?.state?.product;
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;

    return (
        <React.Fragment>
            {windowWidth === "mobile" ? 
                <PageHeader title="Explore Category" />
            : windowWidth === "desktop" ?
                <Header />
            : ''}
            <div className="col-12 d-inline-flex mt-5">
                <div className="container">
                    <div className={`d-inline-flex flex-wrap col-12 mb-3`}>
                        {ProductData?.length > 0 && ProductData?.map((item, index) => {
                            return (    
                                <React.Fragment key={index}>
                                    {item.name !== '' && 
                                        <div className={`${windowWidth === "mobile" ? 'col-6' : 'col-3'} px-2 flex-shrink-0 mb-3`} key={index}>
                                            <ProductCard item={item} index={index} />
                                        </div>
                                    }
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}