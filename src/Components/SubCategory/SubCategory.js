import React, {useEffect, useState, useRef} from "react";
import ReactReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from './SubCategory.module.css';
import ApiService from "../../services/ApiService";
import { enviroment } from "../../enviroment";
import { ProductCard } from "../ProductCard/ProductCard";

let currentCat = '';
export const SubCategory = ({categoryID}) => {
    const slideRef = useRef([]);
    const [shopCategory, setShopCategory] = useState([]);
    const [subShopCategory, setSubShopCategory] = useState([]);
    const [categoryProd, setShopCategoryProd] = useState([]);
    const [subCatActive, setSubCatActive] = useState('');
    const [catActive, setCatActive] = useState('');

    const getSubCategory = (id) => {
        const payload = {
            store_id: enviroment.STORE_ID,
            category_id: id
        }
        currentCat = id;
        setCatActive(id);
        setSubCatActive('');
        ApiService.StoreSubChildCategory(payload).then((res) => {
            setSubShopCategory(res?.payload_categoryBySubCategory);
        }).catch((err) => {
            
        });
        ApiService.CategoryByProd(payload).then((res) => {
            setShopCategoryProd(res?.payload_CategoryByProduct);
        }).catch((err) => {
            
        });
    }

    const getSubCategoryProd = (subId) => {
        const payload = {
            store_id: enviroment.STORE_ID,
            subcategory_id: subId
        }
        setSubCatActive(subId);
        ApiService.CategoryBySubProd(payload).then((res) => {
            setShopCategoryProd(res.payload_SubCategoryByProduct);
        }).catch((err) => {
            
        });
    }

    const getCategoryProd = (currentCat) => {
        const payload = {
            store_id: enviroment.STORE_ID,
            vertical_id: currentCat
        }
        setSubCatActive('');
        ApiService.CategoryByProd(payload).then((res) => {
            setShopCategoryProd(res.payload_VerticalByProduct);
        }).catch((err) => {
            
        });
    }

    useEffect(() => {
        const payload = {
            store_id: enviroment.STORE_ID,
            vertical_id: categoryID
        }
        ApiService.StoreSubCategory(payload).then((res) => {
            setShopCategory(res.payload_verticalByCategory);
        }).catch((err) => {
            
        })
        
        ApiService.StoreCategoryProd(payload).then((res) => {
            setShopCategoryProd(res.payload_VerticalByProduct);
        }).catch((err) => {
            
        });
    }, []);

    useEffect(() => {
        shopCategory?.map((item, index) => {
            if (index === 0) {
                const payload = {
                    store_id: enviroment.STORE_ID,
                    category_id: item?.category_id
                }
                ApiService.StoreSubChildCategory(payload).then((res) => {
                    setSubShopCategory(res?.payload_categoryBySubCategory);
                }).catch((err) => {
                    
                });
            }
        });
    }, [shopCategory]);
    return (
        <React.Fragment>
            {shopCategory?.length > 0 && 
                <React.Fragment>
                    <div className={`${styles.lookingContainer} ps-3 py-3 col-12 d-inline-flex align-items-stretch gap-3`}>
                        <ReactReactOwlCarousel className={`col-12 d-inline-block owl-theme`} margin={20} loop={false} dots={false} stagePadding={20} items={4}>
                            {shopCategory?.map((item, index) => {
                                return (
                                    <div key={index} className={`${catActive === item?.category_id && styles.active} d-inline-flex flex-column flex-shrink-0 col-12 gap-1`} onClick={() => getSubCategory(item?.category_id)} ref={(element) => (slideRef.current[index] = element)}>
                                        <div className={`${styles.imgBox} d-inline-flex align-items-center justify-content-center col-12 overflow-hidden position-relative`}>
                                            <img src={item?.image} alt={item?.name} className="object-fit-cover h-100 col-12 d-inline-block start-0 top-0 position-absolute"/>
                                        </div>        
                                        <p className={`${styles.categoryProdName} col-12 text-center m-0`}>{item?.name}</p>
                                    </div>
                                );
                            })} 
                        </ReactReactOwlCarousel>
                    </div>
                
                    <div className={`p-3 col-12 d-inline-flex align-items-stretch gap-3 overflow-x-auto`}>
                        <span onClick={() => getCategoryProd(currentCat)} className={`d-inline-flex align-items-center flex-shrink-0 text-nowrap ${styles.productsItemsName} ${subCatActive === '' && styles.active}`}>All</span>
                        {subShopCategory?.map((item, index) => {
                            return(
                                <span key={index} onClick={() => getSubCategoryProd(item?.subcategory_id)} className={`d-inline-flex align-items-center flex-shrink-0 text-nowrap ${styles.productsItemsName} ${item?.subcategory_id === subCatActive && styles.active}`}>{item?.name}</span>
                            );
                        })}
                    </div>
                </React.Fragment>
            }

            <div className="col-12 d-inline-flex flex-wrap">
                {categoryProd.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            {item.name !== '' && 
                                <div className="col-6 px-2 flex-shrink-0 mb-2">
                                    <ProductCard item={item} index={index} />
                                </div>
                            }
                        </React.Fragment>
                    )
                })}
            </div>
        </React.Fragment>
    )
}