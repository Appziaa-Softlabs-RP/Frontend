import React from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { SubCategory } from "../../Components/SubCategory/SubCategory";
import SubHeading from "../../Components/sub-heading/SubHeading"
export const SubCategoryPage = () => {
  const { verticalSlug } = useParams();

  return (
    <React.Fragment>
      <div className="hideInDesktop p-4">
        <SubHeading title="Explore Categroy" />
      </div>
      <div className="hideInMobile">
        <Header />
      </div>
      <SubCategory
        verticalSlug={verticalSlug}
      />
      <Footer />
    </React.Fragment>
  );
};
