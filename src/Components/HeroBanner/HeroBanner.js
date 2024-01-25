import React, { useEffect, useState } from "react";
import styles from './HeroBanner.module.css';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useApp } from "../../context/AppContextProvider";

import { useAppStore } from "../../store";
import ApiService from '../../services/ApiService';
import { enviroment } from "../../enviroment";
import { HeroBannerLoader } from "../Loader/Loader";

export const HeroBanner = ({ allBanner }) => {
  const [loading, setLoading] = useState(true);
  const heroBanners = useAppStore(state => state.heroBanners);
  const setHeroBanners = useAppStore(state => state.setHeroBanners);
  const setPromoBanners = useAppStore(state => state.setPromoBanners);
  const setOfferBanners = useAppStore(state => state.setOfferBanners);

  const appData = useApp();
  let windowWidth = appData.appData.windowWidth;

  // load banners for first time
  useEffect(() => {
    const payload = {
      store_id: enviroment.STORE_ID
    };
    
    ApiService.banner(payload).then((res) => {
      if (res.message === "Fetch successfully.") {
        // hero banner
        setHeroBanners(res?.payload_banner?.banner);
        // promo banner
        setPromoBanners(res?.payload_banner?.promobanner);
        // offers
        setOfferBanners(res?.payload_banner?.sectionbanner);
        
        setLoading(false);
      }
    }).catch((err) => {

    });
  }, []);
  return (
    <React.Fragment>
      {windowWidth === "mobile" ? (
        <div className={`${styles.heroBannerContainer} col-12 d-inline-flex p-3`}>
          <ReactOwlCarousel className={`${styles.bannerContainer} col-12 d-inline-block owl-theme`} margin={5} loop={true} dots={true} stagePadding={10} items={1}>
            {allBanner?.length > 0 && allBanner.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item?.mobile_image !== '' &&
                    <div className={styles.item}>
                      <img
                        src={item?.mobile_image}
                        alt={item?.name}
                        className="object-fit-cover col-12 d-inline-block"
                      />
                    </div>}
                </React.Fragment>
              )
            })}
          </ReactOwlCarousel>
        </div>
      ) : windowWidth === "desktop"
        ? loading
          ? <HeroBannerLoader />
          : (
            <div className={`col-12 d-inline-flex mb-4`}>
              <ReactOwlCarousel
                className={`${styles.desktopBanner} heroBanner col-12 d-inline-block owl-theme`}
                margin={0}
                loop={true}
                dots={false}
                nav={true}
                stagePadding={0}
                items={1}
                autoplay={true}
              >
                {heroBanners.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      {item?.image !== '' &&
                        <div className={styles.item}>
                          <img src={item?.image}
                            alt={item?.name}
                            className="object-fit-cover col-12 d-inline-block"
                          />
                        </div>}
                    </React.Fragment>
                  )
                })}
              </ReactOwlCarousel>
            </div>
          )
        : ('')}
    </React.Fragment>
  );
}