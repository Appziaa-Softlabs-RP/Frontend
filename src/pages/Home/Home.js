import React, { useState } from "react";
import { Aside } from "../../Components/Aside/Aside";
import { BrandFocus } from "../../Components/BrandFocus/BrandFocus";
import { CategoryShop } from "../../Components/CategoryShop/CategoryShop";
import { DealShop } from "../../Components/DealShop/DealShop";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { HeroBanner } from "../../Components/HeroBanner/HeroBanner";
import { LimitedOffers } from "../../Components/LimitedOffers/LimitedOffers";
import { LookingFor } from "../../Components/LookingFor/LookingFor";
import { NewArrival } from "../../Components/NewArrival/NewArrival";
import { PromoBanner } from "../../Components/PromoBanner/PromoBanner";
import Reviews from "../../Components/Reviews/Reviews";
import { ShopAge } from "../../Components/ShopAge/ShopAge";
import AllStores from "../../Components/AllStores/AllStores";

export const Home = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  const [navItems, setNavItems] = useState([]);

  return (
    <React.Fragment>̦
      <div className="col-12 d-inline-flex flex-column" style={{
        maxWidth: "100vw",
        overflowX: "hidden",
      }}>
        <Header asideOpen={asideOpen} setAsideOpen={setAsideOpen} setFetchedNavItems={setNavItems} />
        <Aside asideOpen={asideOpen} setAsideOpen={setAsideOpen} navItems={navItems} setNavItems={setNavItems} />
        {/* hero banner */}
        <HeroBanner />

        <ShopAge />

        {/* Mobile Structure */}
        <div className={`hideInDesktop`}>
          <CategoryShop />
        </div>
        {/* Desktop Structure */}
        <div className={`hideInMobile`}>
          <LookingFor />
        </div>

        <NewArrival />

        <DealShop />

        <PromoBanner type="Promo Banner" />

        <LimitedOffers />

        <BrandFocus />

        <PromoBanner type="Offers" />

        <Reviews />

        <AllStores />

        <Footer />
      </div>
    </React.Fragment>
  );
};
