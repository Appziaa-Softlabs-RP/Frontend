import React from "react";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { SubCategory } from "../../Components/SubCategory/SubCategory";
import { useLocation } from "react-router-dom";

export const SubCategoryPage = () => {
    const locationState = useLocation();
    const categoryID = locationState?.state?.cat;
    return (
        <React.Fragment>
            <PageHeader title="Explore Categroy" />
            <SubCategory categoryID={categoryID}/>
        </React.Fragment>
    )
}