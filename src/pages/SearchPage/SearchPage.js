import React, { useEffect, useState } from "react";
import styles from './SearchPage.module.css';
import { useLocation } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useApp } from "../../context/AppContextProvider";
import ApiService from "../../services/ApiService";
import { ProductListLoader } from "../../Components/Loader/Loader";
import { enviroment } from "../../enviroment";

export const SearchPage = () => {
    const locationState = useLocation();
    const [ProductData, setProductData] = useState([]);
    const [ProductDataLen, setProductDataLen] = useState('');
    const [loading, setLoading] = useState(true);
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;

    useEffect(() => {
        const keyword = locationState.state.keyword;
        const payload = {
            store_id: parseInt(enviroment.STORE_ID),
            keyword: keyword
        }
        ApiService.storeSearch(payload).then((res) => {
            if(res.message === "Fetch successfully."){
                setProductData(res.payload_searchAI);
                setProductDataLen(res.payload_searchAI.length);
            }
        }).catch((err) => {
        });
        setLoading(false);
    }, [locationState]);

    return (
        <React.Fragment>
            {windowWidth === "mobile"
                ? <PageHeader title="Explore Category" />
                : windowWidth === "desktop"
                ? <Header />
                : ''
            }

            <div className="col-12 d-inline-flex mt-5">
                <div className="container">
                    <div className={`d-inline-flex flex-wrap col-12`}>
                        {ProductDataLen > 0 && 
                            <h4 className={`${styles.searchProdTitle} col-12 d-inline-flex`}>Showing {ProductDataLen} Results for {locationState.state.keyword}</h4>
                        }
                        {loading && <ProductListLoader />}
                        <div className={`d-inline-flex flex-wrap col-12 mb-3`}>
                            {ProductData?.length > 0 && ProductData?.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        {item.name !== '' &&
                                            <div className={`${windowWidth === "mobile" ? 'col-6' : 'col-3'} px-2 flex-shrink-0 mb-3`} key={index} role="button">
                                                <ProductCard item={item} index={index} />
                                            </div>
                                        }
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}