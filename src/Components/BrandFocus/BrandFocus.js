import React, { useEffect, useState } from "react";
import styles from "./BrandFocus.module.css";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import { useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiService";

export const BrandFocus = () => {
  const appData = useApp();
  const navigate = useNavigate();
  let windowWidth = appData.appData.windowWidth;
  const [brandData, setBrandData] = useState([]);

  const showBrandProd = (id, name) => {
    navigate(`/store-product/brand/${id}`);
  };

  useEffect(() => {
    const payload = {
      company_id: parseInt(enviroment.COMPANY_ID),
    };
    ApiService.brandInFocus(payload)
      .then((res) => {
        setBrandData(res.payload_brandOffer.brand_offer);
      })
      .catch((err) => { });
  }, []);
  return (
    <React.Fragment>
      {brandData?.length > 0 && (
        <div
          className={`col-12 p-2 d-inline-flex my-5`}
        >
          <div className={`${windowWidth === "mobile" && "p-0"} container`}>
            <div
              className={`col-12 ${windowWidth === "mobile" ? "p-3" : "mt-3"
                } d-inline-flex flex-column`}
            >
              <div className="titlesWrapper">
                <h5
                  className={`titleMainSmall col-12`}
                >
                  Offerings
                </h5>
                <p
                  className={`subTitleLarge col-12`}
                >
                  Best of the brands
                </p>
              </div>
              <ReactOwlCarousel
                className={`${styles.brandSilder} brandSilder col-12 owl-theme`}
                margin={10}
                dots={false}
                responsive={{
                  0: {
                    items: 2,
                  },
                  600: {
                    items: 3,
                  },
                  1000: {
                    items: 6,
                  },
                }}
                loop={true}
                nav={true}
                autoplay={true}
                autoplayTimeout={3000}
                autoplayHoverPause={true}
                autoHeight={true}
                stagePadding={`${windowWidth === "mobile" ? 50 : 0}`}
              >
                {brandData?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`item flex-shrink-1 d-inline-block position-relative text-decoration-none col-12 overflow-hidden mouse-cursor`}
                      onClick={() =>
                        showBrandProd(item.brand_id, item.brand_offer)
                      }
                    >
                      <div
                        className={`position-relative col-12 p-0 d-inline-flex flex-column align-items-center`}
                      >
                        <img
                          src={item.brand_icon}
                          alt=""
                          style={{
                            maxHeight: "100px",
                            maxWidth: "100px",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </ReactOwlCarousel>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};