import React, { useState } from "react";
import { Aside } from "../../Components/Aside/Aside";
import { BrandFocus } from "../../Components/BrandFocus/BrandFocus";
import { CategoryShop } from "../../Components/CategoryShop/CategoryShop";
import { DealShop } from "../../Components/DealShop/DealShop";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { HeroBanner } from "../../Components/HeroBanner/HeroBanner";
import { LimitedOffers } from "../../Components/LimitedOffers/LimitedOffers";
import OurProducts from "../../Components/OurProduct/product";
import { PromoBanner } from "../../Components/PromoBanner/PromoBanner";
import { ShopAge } from "../../Components/ShopAge/ShopAge";
import { useApp } from "../../context/AppContextProvider";
import JoinSales from "../../Components/JoinSales/joinsales";

export const Home = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  const appData = useApp();
  const isMobile = appData.appData.windowWidth === "mobile";

  return (
    <React.Fragment>
      <div className="col-12 d-inline-flex flex-column bg-white ">
        <Header asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
        <Aside asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
        {/* hero banner */}
        <HeroBanner />
        {/* what are you looking for ? */}
        {/* {!isMobile && <LookingFor />} */}

        <OurProducts />

        <CategoryShop />

        <DealShop />

        <PromoBanner type="Promo Banner" />

        <ShopAge />

        <PromoBanner type="Offers" />

        <LimitedOffers />

        <BrandFocus />
        
        <JoinSales />

        <Footer />
      </div>
    </React.Fragment>
  );
};
