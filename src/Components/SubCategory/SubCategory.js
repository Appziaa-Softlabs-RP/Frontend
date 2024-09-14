import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import { ProductCard } from "../ProductCard/ProductCard";

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
  const appData = useApp();
  let windowWidth = appData.appData.windowWidth;

  const getSubCategory = (id) => {
    const payload = {
      store_id: parseInt(enviroment.STORE_ID),
      category_id: id,
    };
    currentCat = id;
    setCatActive(id);
    setSubCatActive("");
    setActiveApi("subChild");
    ApiService.StoreSubChildCategory(payload)
      .then((res) => {
        setSubShopCategory(res?.payload_categoryBySubCategory);
      })
      .catch((err) => { });
    ApiService.CategoryByProd(payload)
      .then((res) => {
        setShopCategoryProd(res?.payload_CategoryByProduct);
      })
      .catch((err) => { });
  };

  const getSubCategoryProd = (subId) => {
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
        setShopCategoryProd(res.payload_SubCategoryByProduct);
      })
      .catch((err) => { });
  };

  const getCategoryProd = (currentCat) => {
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
        setShopCategoryProd(res.payload_CategoryByProduct);
      })
      .catch((err) => { });
  };

  const fetchProducts = () => {
    const catpayload = {
      store_id: parseInt(enviroment.STORE_ID),
      vertical_slug: verticalSlug,
    };
    const payload = {
      store_id: parseInt(enviroment.STORE_ID),
      vertical_slug: verticalSlug,
      page: 1,
      result_per_page: 10,
    };
    setCatActive("");
    setActiveApi("storeSub");
    ApiService.StoreSubCategory(catpayload)
      .then((res) => {
        setShopCategory(res.payload_verticalByCategory);
      })
      .catch((err) => { });

    setApiPayload(payload);
    ApiService.StoreCategoryProd(payload)
      .then((res) => {
        setShopCategoryProd(res.payload_VerticalByProduct);
      })
      .catch((err) => { });
  };

  const LoadMoreProducts = () => {
    let pageCount = apiPayload?.page;
    pageCount = pageCount + 1;

    if (activeApi === "storeSub" || activeApi === "categoryProd") {
      ApiService.StoreCategoryProd(apiPayload)
        .then((res) => {
          let prevProdArr = [];
          prevProdArr = categoryProd;
          let newProd = res.payload_VerticalByProduct;
          for (let i = 0; i < newProd.length; i++) {
            prevProdArr.push(newProd[i]);
          }
          let newProduct = [...prevProdArr];
          setShopCategoryProd(newProduct);
        })
        .catch((err) => { });
    } else if (activeApi === "categorySub") {
      ApiService.CategoryBySubProd(apiPayload)
        .then((res) => {
          let prevProdArr = [];
          prevProdArr = categoryProd;
          let newProd = res.payload_SubCategoryByProduct;
          for (let i = 0; i < newProd.length; i++) {
            prevProdArr.push(newProd[i]);
          }
          let newProduct = [...prevProdArr];
          setShopCategoryProd(newProduct);
        })
        .catch((err) => { });
    } else if (activeApi === "subChild") {
      ApiService.CategoryByProd(apiPayload)
        .then((res) => {
          let prevProdArr = [];
          prevProdArr = categoryProd;
          let newProd = res.payload_SubCategoryByProduct;
          for (let i = 0; i < newProd.length; i++) {
            prevProdArr.push(newProd[i]);
          }
          let newProduct = [...prevProdArr];
          setShopCategoryProd(newProduct);
        })
        .catch((err) => { });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    shopCategory?.map((item, index) => {
      if (index === 0) {
        const payload = {
          store_id: parseInt(enviroment.STORE_ID),
          category_id: item?.category_id,
        };
        ApiService.StoreSubChildCategory(payload)
          .then((res) => {
            setSubShopCategory(res?.payload_categoryBySubCategory);
          })
          .catch((err) => { });
      }
    });
  }, [shopCategory]);
  return (
    <React.Fragment>
      <div
        className={`col-12 d-inline-flex mt-4`}
      >
        <div className={`${windowWidth === "mobile" && "p-0"} container`}>
          {/* <InfiniteScroll
            className="col-12 d-inline-flex flex-wrap"
            dataLength={categoryProd.length}
            next={LoadMoreProducts}
            hasMore={true}
          > */}
          <div className="col-12 d-inline-flex flex-wrap">
            {categoryProd.map((item, index) => {
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
          </div>
          {/* </InfiniteScroll> */}
        </div>
      </div>
    </React.Fragment>
  );
};
