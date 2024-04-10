import React, { useEffect, useState } from "react";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import { SubCategory } from "../SubCategory/SubCategory";

export const CategoryShop = () => {
  const [shopCategory, setShopCategory] = useState([]);

  useEffect(() => {
    const payload = {
      store_id: parseInt(enviroment.STORE_ID),
    };
    ApiService.StoreCategory(payload)
      .then((res) => {
        setShopCategory(res?.payload_verticalList?.vertical);
      })
      .catch((err) => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <section className="py-5 my-5" style={{ background: "#FEF8E5" }}>
        <div className="py-14">
          <h1 className="text-3xl text-center">
            Buy <b>Online</b>
          </h1>
          <div className="d-flex flex-row flex-wrap align-items-center  justify-content-center md:justify-content-start ">
            {shopCategory?.map((item, index) => {
              return <SubCategory categoryID={item?.vertical_id} />;
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};