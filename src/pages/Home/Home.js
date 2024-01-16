import React, { useState, useEffect } from "react";
import { Header } from "../../Components/Header/Header";
import { Aside } from "../../Components/Aside/Aside";
import { ShopAge } from "../../Components/ShopAge/ShopAge";
import { CategoryShop } from "../../Components/CategoryShop/CategoryShop";
import { PromoBanner } from "../../Components/PromoBanner/PromoBanner";
import { HeroBanner } from "../../Components/HeroBanner/HeroBanner";
import { BrandFocus } from "../../Components/BrandFocus/BrandFocus";
import { Footer } from "../../Components/Footer/Footer";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import { useApp } from "../../context/AppContextProvider";
import { LookingFor } from "../../Components/LookingFor/LookingFor";

import { CategoryShopLoader, HeroBannerLoader, LookingForBannerLoader, PromoBannerLoader, BrandFocusLoader } from "../../Components/Loader/Loader";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [asideOpen, setAsideOpen] = useState(false);
  const [allBanner, setAllBanner] = useState([]);
  const [allPromoBanner, setAllPromoBanner] = useState([]);
  const [allSubCat, setAllSubCat] = useState([]);
  const appData = useApp();
  const isMobile = appData.appData.windowWidth === 'mobile';

  const fetchBanner = (payload) => {
    ApiService.banner(payload).then((res) => {
      if (res.message === "Fetch successfully.") {
        setAllBanner(res?.payload_banner?.banner);
        console.log("ApiService.banner => ", res.payload_banner);
        setAllPromoBanner(res);
        setLoading(false);
      }
    }).catch((err) => {

    });
  }

  useEffect(() => {
    const payload = {
      store_id: enviroment.STORE_ID
    };
    fetchBanner(payload);
  }, []);

  return (
    <React.Fragment>
      <div className="col-12 d-inline-flex flex-column">
        <Header asideOpen={asideOpen} setAsideOpen={setAsideOpen} setAllSubCat={setAllSubCat} />
        <Aside asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
        {/* hero banner */}
        {loading
          ? <HeroBannerLoader />
          : <HeroBanner allBanner={allBanner} />
        }

        {/* <LookingForBannerLoader /> */}

        {loading && !(allSubCat.length)
          ? <LookingForBannerLoader />
          : <LookingFor allSubCat={allSubCat} />
        }

        {/* looking for */}
        {/* {!isMobile && allSubCat.length > 0 &&
          <LookingFor allSubCat={allSubCat} />
        } */}

        {/* <CategoryShopLoader /> */}
        {loading
          ? <CategoryShopLoader />
          : isMobile &&
          <CategoryShop />
        }
        {/* <PromoBannerLoader /> */}
        {loading
          ? <PromoBannerLoader />
          : allPromoBanner?.payload_banner?.promobanner?.length > 0 &&
          <PromoBanner allPromoBanner={allPromoBanner} type="Promo Banner" />
        }
        <ShopAge />
        {loading
          ? <PromoBannerLoader />
          : allPromoBanner?.payload_banner?.offeroftheday?.length > 0 &&
          <PromoBanner allPromoBanner={allPromoBanner} type="Offers" />
        }
        {/* <BrandFocusLoader /> */}
        {loading
          ? <BrandFocusLoader />
          : <BrandFocus />
        }
        <Footer />
      </div>
    </React.Fragment>
  )
}