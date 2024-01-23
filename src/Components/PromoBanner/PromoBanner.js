import React, { useEffect, useState } from "react";
import styles from './PromoBanner.module.css';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useApp } from "../../context/AppContextProvider";

import { useAppStore } from "../../store";
import { PromoBannerLoader } from "../Loader/Loader";

export const PromoBanner = ({ type }) => {
  const [loading, setLoading] = useState(true);
  // const banners = useAppStore(state => state.banners);
  const promoBanners = useAppStore(state => state.promoBanners);
  const offerBanners = useAppStore(state => state.offerBanners);
  const [allBanner, setAllBanner] = useState([]);
  const appData = useApp();
  let windowWidth = appData.appData.windowWidth;

  useEffect(() => {
    if (type === 'Promo Banner') {
      setAllBanner(promoBanners);
    } else if (type === 'Offers') {
      setAllBanner(offerBanners);
    }
    
    if(allBanner.length > 0) {
      setLoading(false);
    }
  }, [promoBanners, offerBanners, allBanner]);

  return (
    <React.Fragment>
      {windowWidth === "mobile" ? (
        <React.Fragment>
          {allBanner?.length > 0 &&
            <div className={`col-12 d-inline-flex flex-column p-3`}>
              <div className={`${type === 'Promo Banner' ? styles.categoryBox : type === 'Offers' ? styles.offersBox : ''} col-12 d-inline-flex flex-column p-3`}>
                {type === 'Promo Banner' && 
                  <h5 className={`${styles.exploreByCategoryHeader} col-12 d-inline-flex mt-0 mb-3`}>
                    Promo for you
                  </h5>
                }
                <ReactOwlCarousel className={`${styles.bannerContainer} col-12 d-inline-block owl-theme`} margin={10} loop={false} dots={false} items={1} stagePadding={15}>
                  {allBanner.map((item, index) => {
                    return (
                      <div className={styles.item} key={index}>
                        <img src={item?.image} alt={item?.name} className="object-fit-cover col-12 d-inline-block" />
                      </div>
                    )
                  })}
                </ReactOwlCarousel>
              </div>
            </div>
          }
        </React.Fragment>
      ) : windowWidth === 'desktop' ? (
        <React.Fragment>
          { loading  ? <PromoBannerLoader />
            : <React.Fragment>
              {allBanner?.length > 0 && 
                <div className={`col-12 d-inline-flex flex-column mt-3`}>
                  <div className="container">
                    <div className={`col-12 d-inline-flex flex-column py-3`}>
                      {type === 'Promo Banner' &&
                        <h5 className={`${styles.categoryHeaderTitle} col-12 d-inline-flex justify-content-center mt-0 mb-3`}>
                          ✨ Promos for you ✨
                        </h5>
                      }
                      <ReactOwlCarousel className={`${styles.bannerContainer} col-12 d-inline-block owl-theme`} margin={10} loop={true} dots={false} items={`${type === 'Promo Banner' ? 3 : type === 'Offers' ? 1 : ''}`} stagePadding={0}>
                        {allBanner.map((item, index) => {
                          return (
                            <div className={styles.item} key={index}>
                              <img src={item?.image} alt={item?.name} className="object-fit-cover col-12 d-inline-block" />
                            </div>
                          )
                        })}
                      </ReactOwlCarousel>
                    </div>
                  </div>
              </div>
              }
            </React.Fragment>
          }
        </React.Fragment>
      ) : ('')}
    </React.Fragment>
  )
}