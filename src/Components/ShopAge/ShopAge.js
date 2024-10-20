import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import styles from "./ShopAge.module.css";
import ReactOwlCarousel from "react-owl-carousel";

export const ShopAge = () => {
  const [categAge, setCategAge] = useState([]);
  const navigate = useNavigate();
  const appData = useApp();
  let windowWidth = appData.appData.windowWidth;

  const openAgeProd = (ageSlug, banner, name) => {
    navigate(`/store/age/${ageSlug}`);
  };

  useEffect(() => {
    const payload = {
      store_id: parseInt(enviroment.STORE_ID),
    };
    ApiService.ageGroupBox(payload)
      .then((res) => {
        if (res.message === "Fetch successfully.") {
          setCategAge(res.payload_ageGroupList.age_group);
        }
      })
      .catch((err) => {});
  }, []);

  //show 5 items when size is above 1200px, 4 items when size is above 992px, 3 items when size is above 768px, 2 items when size is above 576px, 1 item when size is below 576px
  const responsiveItems =
    window.innerWidth >= 1200
      ? 5
      : window.innerWidth >= 992
      ? 4
      : window.innerWidth >= 768
      ? 3
      : 2.5;

  return (
    <React.Fragment>
      {categAge?.length > 0 && (
        <div className={`${styles.shopAgeBox} px-3 col-12 d-inline-flex my-3`}>
          <div className={`${windowWidth === "mobile" && "p-0"} container`}>
            {windowWidth === "desktop" && (
              <h5
                className={`${styles.categoryHeaderTitle} col-12 d-inline-flex justify-content-center mt-4 mb-3 fs-2 `}
              >
                ✨ Shop By Age ✨
              </h5>
            )}
            <div className={`${styles.shopAgeContainer} col-12 pb-4 pl-0 pr-0`}>
              {windowWidth === "mobile" && (
                <h5
                  className={`${styles.exploreByCategoryHeader} mb-2 ps-3 d-inline-block col-12 text-black fs-3 py-2`}
                >
                  Shop By Age
                </h5>
              )}
              <div
                className={`${styles.scrollAgeBox} col-12 flex-wrap d-inline-flex justify-content-center px-2 pb-0 `}
              >
                <ReactOwlCarousel
                  className={`${styles.brandSilder} brandSilder col-12 owl-theme`}
                  margin={10}
                  dots={false}
                  items={responsiveItems}
                  loop={false}
                  nav={true}
                >
                  {categAge.map((item, index) => {
                    return (
                      <div
                        className={`${styles.ageBlock} d-inline-block p-0 flex-shrink-0 mouse-cursor`}
                        key={index}
                        style={{
                          minWidth:
                            window.innerWidth <= 500 ? "120px" : "180px",
                        }}
                        onClick={() =>
                          openAgeProd(
                            item?.name_url,
                            item?.age_group_banner,
                            item?.name
                          )
                        }
                      >
                        <div className="col-12 pl-1 pr-1 d-inline-flex flex-column justify-content-center align-items-center position-relative text-decoration-none">
                          <div
                            className={`${styles.ageBlockIcon} overflow-hidden d-inline-block col-12 position-relative`}
                          >
                            <img
                              src={item?.image}
                              alt={item?.name}
                              style={{
                                maxWidth:
                                  window.innerWidth <= 500 ? "120px" : "180px",
                                maxHeight:
                                  window.innerWidth <= 500 ? "120px" : "180px",
                                borderRadius: "100%",
                              }}
                              className="position-absolute col-12 h-100 d-inline-block p-0"
                            />
                          </div>
                          <h6
                            className={`${styles.shopAgeNumber} text-center col-12 p-0 mb-0 text-black fs-5 `}
                          >
                            {item.name}
                          </h6>
                        </div>
                      </div>
                    );
                  })}
                </ReactOwlCarousel>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
