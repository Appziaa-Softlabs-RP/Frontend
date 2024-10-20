import React, { useState } from "react";
import { AllStores } from "../../Components/AllStores/AllStores";
import { Aside } from "../../Components/Aside/Aside";
import { BrandFocus } from "../../Components/BrandFocus/BrandFocus";
import Collections from "../../Components/Collection/Collection";
import { DealShop } from "../../Components/DealShop/DealShop";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { HeroBanner } from "../../Components/HeroBanner/HeroBanner";
import IntroBrand from "../../Components/IntroBrand/IntroBrand";
import { LimitedOffers } from "../../Components/LimitedOffers/LimitedOffers";
import { NewArrival } from "../../Components/NewArrival/NewArrival";
import OurStory from "../../Components/OurStory/OurStory";
import { PromoBanner } from "../../Components/PromoBanner/PromoBanner";
import Reviews from "../../Components/Reviews/Reviews";

export const Home = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  const [navItems, setNavItems] = useState([]);

  return (
    <React.Fragment>
      <div className="col-12 d-inline-flex flex-column" style={{
        position: "relative",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}>
        <Header asideOpen={asideOpen} setAsideOpen={setAsideOpen} setFetchedNavItems={setNavItems} />
        <Aside asideOpen={asideOpen} setAsideOpen={setAsideOpen} navItems={navItems} setNavItems={setNavItems} />
        {/* hero banner */}
        <HeroBanner />

        <DealShop />

        <Collections
          type={'men'}
        />

        <IntroBrand />

        <Collections
          type={'women'}
        />

        <NewArrival />

        <Collections
          type={'kids'}
        />

        <OurStory />

        <PromoBanner type="Promo Banner" />

        <LimitedOffers />

        <BrandFocus />

        {/* <PromoBanner type="Offers" /> */}

        <AllStores />

        <Reviews />

        {/* <BrandGallery /> */}

        <Footer />
      </div>
    </React.Fragment>
  );
};
