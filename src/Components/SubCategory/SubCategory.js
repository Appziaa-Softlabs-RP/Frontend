import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import OwlCarousel from "react-owl-carousel";
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import { ProductListLoader } from "../Loader/Loader";
import { ProductCard } from "../ProductCard/ProductCard";
import NoProductFound from "../shared/NoProductFound";
import styles from "./SubCategory.module.css";

let currentCat = "";

export const SubCategory = ({ verticalSlug }) => {
  const slideRef = useRef([]);
  const [shopCategory, setShopCategory] = useState([]);
  const [subShopCategory, setSubShopCategory] = useState([]);
  const [categoryProd, setShopCategoryProd] = useState([]);
  const [subCatActive, setSubCatActive] = useState("");
  const [activeApi, setActiveApi] = useState(null);
  const [catActive, setCatActive] = useState("");
  const [apiPayload, setApiPayload] = useState(null);
  const { appData: { windowWidth } } = useApp();
  const [loading, setLoading] = useState(true);
  const [isInfinityLoading, setIsInfinityLoading] = useState(false);

  const handleApiError = (err) => console.error(err);

  const getSubCategory = useCallback((id) => {
    setLoading(true);
    const payload = {
      store_id: parseInt(enviroment.STORE_ID),
      category_id: id,
    };
    currentCat = id;
    setCatActive(id);
    setSubCatActive("");
    setActiveApi("subChild");

    Promise.all([
      ApiService.StoreSubChildCategory(payload),
      ApiService.CategoryByProd(payload)
    ])
      .then(([subCategoryRes, categoryProdRes]) => {
        setLoading(false);
        setSubShopCategory(subCategoryRes?.payload_categoryBySubCategory || []);
        setShopCategoryProd(categoryProdRes?.payload_CategoryByProduct || []);
      })
      .catch(handleApiError);
  }, []);

  const getSubCategoryProd = useCallback((subId) => {
    setLoading(true);
    const payload = {
      store_id: parseInt(enviroment.STORE_ID),
      subcategory_id: subId,
      page: 1,
      result_per_page: 10,
    };
    setSubCatActive(subId);
    setApiPayload(payload);
    setActiveApi("categorySub");

    ApiService.CategoryBySubProd(payload)
      .then((res) => {
        setShopCategoryProd(res.payload_SubCategoryByProduct || [])
        setLoading(false);
      })
      .catch(handleApiError);
  }, []);

  const getCategoryProd = useCallback(() => {
    setLoading(true);
    const payload = {
      store_id: parseInt(enviroment.STORE_ID),
      vertical_id: currentCat,
      page: 1,
      result_per_page: 10,
    };
    setSubCatActive("");
    setApiPayload(payload);
    setActiveApi("categoryProd");

    ApiService.CategoryByProd(payload)
      .then((res) => {
        setLoading(false);
        setShopCategoryProd(res.payload_CategoryByProduct || [])
      })
      .catch(handleApiError);
  }, [currentCat]);

  const fetchProducts = useCallback(() => {
    setLoading(true);
    const payload = {
      store_id: parseInt(enviroment.STORE_ID),
      category_slug: verticalSlug,
    };
    setCatActive("");
    setActiveApi("storeSub");

    ApiService.CategoryByProd(payload)
      .then((res) => {
        setLoading(false);
        const products = res.payload_CategoryByProduct?.products || [];
        setShopCategory(products);
        setShopCategoryProd(products);
      })
      .catch(handleApiError);

    setApiPayload(payload);
  }, [verticalSlug]);

  const loadMoreProducts = useCallback(() => {
    setIsInfinityLoading(true);
    let pageCount = (apiPayload?.page || 1) + 1;
    setApiPayload((prev) => ({ ...prev, page: pageCount }));

    const fetchApi =
    activeApi === "categorySub"
      ? ApiService.CategoryBySubProd({ ...apiPayload, page: pageCount })
      : ApiService.CategoryByProd({ ...apiPayload, page: pageCount });

    fetchApi
      .then((res) => {
        const newProducts =
          activeApi === "categorySub"
            ? res.payload_SubCategoryByProduct
            : res.payload_CategoryByProduct?.products;
        setIsInfinityLoading(false);
        setShopCategoryProd((prev) => [...prev, ...(newProducts || [])]);
      })
      .catch(handleApiError);
  }, [apiPayload, activeApi]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (shopCategory.length > 0) {
      const firstCategory = shopCategory[0];
      const payload = {
        store_id: parseInt(enviroment.STORE_ID),
        category_id: firstCategory?.category_id,
      };
      ApiService.StoreSubChildCategory(payload)
        .then((res) => setSubShopCategory(res?.payload_categoryBySubCategory || []))
        .catch(handleApiError);
    }
  }, [shopCategory]);

  if (loading) {
    return <div className="p-4">
      <ProductListLoader header={false} />
    </div>
  }

  if (shopCategory.length === 0) {
    return <NoProductFound />
  }

  return (
    <>
      {shopCategory.length > 0 && (
        <div className="hideInDesktop">
          <div className={`${styles.lookingContainer} ps-3 py-3 col-12 d-inline-flex align-items-stretch gap-3`}>
            <OwlCarousel className="col-12 d-inline-block owl-theme" margin={20} loop={false} dots={false} stagePadding={20} items={4}>
              <div
                className={`${!catActive && styles.active} d-inline-flex flex-column flex-shrink-0 col-12 gap-1`}
                onClick={fetchProducts}
              >
                <div className={`${styles.imgBox} d-inline-flex align-items-center justify-content-center col-12 overflow-hidden position-relative`}>
                  <img src="/all-icon.png" alt="all" className="object-fit-cover h-100 col-12 d-inline-block start-0 top-0 position-absolute" />
                </div>
                <p className={`${styles.categoryProdName} col-12 text-center m-0`}>All</p>
              </div>

              {shopCategory?.map((item, index) => (
                <div
                  key={index}
                  className={`${catActive === item?.category_id && styles.active} d-inline-flex flex-column flex-shrink-0 col-12 gap-1`}
                  onClick={() => getSubCategory(item?.category_id)}
                  ref={(element) => (slideRef.current[index] = element)}
                >
                  <div className={`${styles.imgBox} d-inline-flex align-items-center justify-content-center col-12 overflow-hidden position-relative`}>
                    <img src={item?.image} alt={item?.name} className="object-fit-cover h-100 col-12 d-inline-block start-0 top-0 position-absolute" />
                  </div>
                  <p className={`${styles.categoryProdName} col-12 text-center m-0`}>{item?.name}</p>
                </div>
              ))}
            </OwlCarousel>
          </div>

          {catActive && (
            <div className={`p-3 col-12 d-inline-flex align-items-stretch gap-3 overflow-x-auto`}>
              <span
                onClick={getCategoryProd}
                className={`d-inline-flex align-items-center flex-shrink-0 text-nowrap ${styles.productsItemsName} ${!subCatActive && styles.active}`}
              >
                All
              </span>
              {subShopCategory?.map((item, index) => (
                <span
                  key={index}
                  onClick={() => getSubCategoryProd(item?.subcategory_id)}
                  className={`d-inline-flex align-items-center flex-shrink-0 text-nowrap ${styles.productsItemsName} ${item?.subcategory_id === subCatActive && styles.active}`}
                >
                  {item?.name}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      <div
        className={`col-12 d-inline-flex mt-4`}
      >
        <div className={`${windowWidth === "mobile" && "p-0"} container`}>
          <InfiniteScroll
            className="col-12 d-inline-flex flex-wrap"
            dataLength={categoryProd.length}
            next={loadMoreProducts}
            hasMore={true}
          >
            {categoryProd?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.name !== "" && (
                    <div
                      className={`${windowWidth === "mobile" ? "col-6" : "col-3"
                        } px-2 flex-shrink-0 mb-2`}
                      key={index}
                    >
                      <ProductCard item={item} index={index} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </InfiniteScroll>
          {
            isInfinityLoading &&
            <div className="col-12 mb-5 d-inline-flex justify-content-center mt-4">
              <Spinner animation="border" variant="dark" />
            </div>
          }
        </div>
      </div>
    </>
  );
};