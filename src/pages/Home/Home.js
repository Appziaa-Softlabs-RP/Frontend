import React, { useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Aside } from "../../Components/Aside/Aside";
import { ShopAge } from "../../Components/ShopAge/ShopAge";
import { CategoryShop } from "../../Components/CategoryShop/CategoryShop";
import { PromoBanner } from "../../Components/PromoBanner/PromoBanner";
import { HeroBanner } from "../../Components/HeroBanner/HeroBanner";
import { BrandFocus } from "../../Components/BrandFocus/BrandFocus";
import { Footer } from "../../Components/Footer/Footer";
import { useApp } from "../../context/AppContextProvider";
import { LookingFor } from "../../Components/LookingFor/LookingFor";
import { DealShop } from "../../Components/DealShop/DealShop";
import { LimitedOffers } from "../../Components/LimitedOffers/LimitedOffers";

export const Home = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  const appData = useApp();
  const isMobile = appData.appData.windowWidth === 'mobile';

  return (
    <React.Fragment>
      <div className="col-12 d-inline-flex flex-column">
        <Header asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
        <Aside asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
        {/* hero banner */}
        <HeroBanner />
        {/* what are you looking for ? */}
        {!isMobile && <LookingFor />}
        
        {isMobile && <CategoryShop />}

        <DealShop />

        <PromoBanner type="Promo Banner" />

        <ShopAge />

        <PromoBanner type="Offers" />

        <LimitedOffers/>

        <BrandFocus />

        <Footer />
      </div>
    </React.Fragment>
  )
}