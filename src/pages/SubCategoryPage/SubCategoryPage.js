import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Aside } from "../../Components/Aside/Aside";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { SubCategory } from "../../Components/SubCategory/SubCategory";
import SubHeading from "../../Components/sub-heading/SubHeading";
export const SubCategoryPage = () => {
  const { verticalSlug } = useParams();
  const [asideOpen, setAsideOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="hideInDesktop p-4">
        <SubHeading title="Explore Categroy" />
      </div>
      <div className="hideInMobile">
        <Header asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
        <Aside asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
      </div>
      <SubCategory
        verticalSlug={verticalSlug}
      />
      <Footer />
    </React.Fragment>
  );
};
