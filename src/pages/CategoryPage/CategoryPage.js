import React, { useEffect, useState } from "react";
import styles from './CategoryPage.module.css';
import { useLocation } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useApp } from "../../context/AppContextProvider";
import ApiService from "../../services/ApiService";
import { ProductListLoader } from "../../Components/Loader/Loader";
import { Filter } from "../../Components/Filter/Filter";
import { OrderIcon } from "../../Components/siteIcons";

export const CategoryPage = () => {
    const locationState = useLocation();
    const [ProductData, setProductData] = useState([]);
    const [ProductActualData, setProductActualData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterVert, setFilterVert] = useState(null);
    const [filterCatg, setFilterCatg] = useState(null);
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;

    const resetSortFilter = () => {
        let originalProduct = [...ProductActualData];
        setProductData(originalProduct);
    }

    const priceAscending = () => {
        let originalProduct = [...ProductData];
        originalProduct.sort((p1, p2) => (parseInt(p1.mrp) < parseInt(p2.mrp)) ? 1 : (parseInt(p1.mrp) > parseInt(p2.mrp)) ? -1 : 0);
        setProductData(originalProduct);
    }

    const priceDescending = () => {
        let originalProduct = [...ProductData];
        originalProduct.sort((p1, p2) => (parseInt(p1.mrp) > parseInt(p2.mrp)) ? 1 : (parseInt(p1.mrp) < parseInt(p2.mrp)) ? -1 : 0);
        setProductData(originalProduct);
    }

    useEffect(() => {
        const payload = locationState.state.payload;
        setFilterVert(locationState?.state?.verticalId);
        setFilterCatg(locationState?.state?.categoryId);
        if (locationState.state.category === 'SHOP') {
            ApiService.ageGroupProduct(payload).then((res) => {
                if (res.message === "Fetch successfully.") {
                    setProductData(res.payload_ageGroupByProduct);
                    setProductActualData(res.payload_ageGroupByProduct);
                    setLoading(false);
                }
            }).catch((err) => {

            });
        } else if (locationState.state.category === 'Brand') {
            ApiService.brandProduct(payload).then((res) => {
                if (res.message === "Fetch successfully.") {
                    setProductData(res.payload_BrandByProduct);
                    setProductActualData(res.payload_BrandByProduct);
                    setLoading(false);
                }
            }).catch((err) => {

            });
        } else {
            ApiService.CategoryByProd(payload).then((res) => {
                if (res.message === "Fetch successfully.") {
                    setProductData(res.payload_CategoryByProduct);
                    setProductActualData(res.payload_CategoryByProduct);
                    setLoading(false);
                }
            }).catch((err) => {

            });
        }
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
                    {locationState?.state?.banner !== '' && locationState?.state?.banner !== null && locationState?.state?.banner !== undefined &&
                        <div className={`${styles.ageBannerRow} col-12 d-inline-flex mb-4`}>
                            <img src={locationState.state.banner[0].image} alt="Banner" className="col-12 d-inline-block" />
                        </div>
                    }
                    {loading && <ProductListLoader />}
                    <div className={`d-inline-flex flex-column col-12 mb-3`}>
                        <div className={`d-inline-flex align-items-start col-12 gap-2`}>
                            {windowWidth === "desktop" && filterVert !== null &&  filterVert !== undefined &&
                                <div className={`${styles.filterSticky} col-3 position-sticky flex-shrink-1 d-inline-flex overflow-y-auto`}>
                                    <Filter filterVert={filterVert} filterCatg={filterCatg} setProductData={setProductData} setProductActualData={setProductActualData} />
                                </div>
                            }
                            <div className={`${windowWidth === "mobile" ? 'col-12' : filterVert !== null && filterVert !== undefined ? 'col-9' : 'col-12'} ${styles.productContainer} flex-shrink-1 d-inline-flex flex-wrap`}>
                                <div className={`${styles.sortContainer} col-12 d-inline-flex align-items-end flex-column gap-2 p-3 px-4 mb-3`}>
                                    <span onClick={() => resetSortFilter()} role="button" className={`${styles.clearAllBtn} d-inline-flex`}>Clear All</span>
                                    <div className="col-12 d-inline-flex justify-content-end align-items-center">
                                        <span className={`${styles.sortBy} d-inline-flex me-2`}>Sort By</span>
                                        <span onClick={() => priceDescending()} role="button" className={`${styles.priceLow} d-inline-flex px-1`}>Price: Low to High</span>
                                        <span onClick={() => priceAscending()} role="button" className={`${styles.priceLow} d-inline-flex px-1`}>Price: High to Low</span>
                                    </div>
                                </div>
                                {ProductData?.length > 0 ? 
                                    <React.Fragment>
                                        {ProductData?.map((item, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    {item.name !== '' &&
                                                        <div className={`${windowWidth === "mobile" ? 'col-6' : filterVert !== null && filterVert !== undefined ? 'col-4' : 'col-3'} px-2 flex-shrink-0 mb-3`} key={index} role="button">
                                                        <ProductCard item={item} index={index} />
                                                        </div>
                                                    }
                                                </React.Fragment>
                                            )
                                        })}
                                    </React.Fragment>
                                :   <React.Fragment>
                                        <div className={`${styles.emptyProduct} d-inline-flex align-items-center justify-content-center flex-column gap-4 p-4`}>
                                            <OrderIcon color="#888" />
                                            <label className={`${styles.emptyProductText} col-12 text-center`}>No Products Found</label>
                                        </div>
                                    </React.Fragment>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}