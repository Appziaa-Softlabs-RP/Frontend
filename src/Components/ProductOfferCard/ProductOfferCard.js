import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { enviroment } from "../../enviroment";
import noImage from "../../assets/images/image-not-available.jpg";

export const ProductOfferCard = ({
  offer_id,
  setSelectedOfferProductId,
  selectedOfferId,
  setSelectedOfferId,
  item,
  index,
}) => {
  const setNoImage = (e) => {
    if (e.target) {
      e.target.src = noImage;
    }
  };

  const setOfferProductItem = () => {
    // if same is there then remove it
    if (selectedOfferId === item?.id) {
      setSelectedOfferProductId(null);
      setSelectedOfferId(null);
    } else {
      setSelectedOfferProductId(offer_id);
      setSelectedOfferId(item?.id);
    }
  };

  return (
    <div
      className={`${styles.singleFeaturedProduct} flex-shrink-0 d-inline-block position-relative overflow-hidden col-12 h-100`}
      key={index}
      style={{
        maxWidth: "200px",
        margin: "10px",
      }}
    >
      {parseFloat(item.mrp) > parseFloat(item.selling_price) && (
        <span
          className={`${styles.featureOffBox} position-absolute d-inline-flex align-items-center`}
        >
          {Math.ceil(((item?.mrp - item?.selling_price) * 100) / item?.mrp)}%
          OFF
        </span>
      )}
      <Link
        to={`/product/${item?.name_url}`}
        style={{
          textDecoration: "none",
        }}
        className={`${styles.featuredImageBox} position-relative col-12 mt-1 float-left mb-1 d-flex justify-content-center align-items-center w-full`}
      >
        {item.stock === 0 || item.stock < 0 ? (
          <span className={`${styles.soldOutText} position-absolute d-block`}>
            Sold Out
          </span>
        ) : (
          ""
        )}

        <div
          className={`d-flex align-items-center  justify-content-center ${styles.productImgContainer}`}
        >
          <img
            onError={(e) => setNoImage(e)}
            src={
              "https://merchant.rewardsplus.in/uploads/app/public/company/product/" +
              item?.photo
            }
            alt="--"
            className={`${styles.productImg}`}
          />
        </div>
        {item?.gallery_images?.length ? (
          <React.Fragment>
            {item?.gallery_images?.map((imagesrc, index) => {
              return (
                <img
                  src={enviroment.API_IMAGE_GALLERY_URL + imagesrc}
                  alt="gallery"
                  className={`${styles.galleryImage} position-absolute h-100 col-12 p-0`}
                  key={index}
                />
              );
            })}
          </React.Fragment>
        ) : (
          ""
        )}
      </Link>
      <div>
        <Link
          to={`/product/${item?.name_url}`}
          style={{
            textDecoration: "none",
          }}
          className={`${styles.offerItemName} col-12 p-0 mb-1`}
        >
          {item.name}
        </Link>
        {item.mrp > item.selling_price ? (
          <div className="col-12 p-0 d-inline-flex align-items-center gap-2 flex-wrap">
            <span className={`${styles.offerPrice} d-inline-flex`}>
              <b>₹{item.selling_price}</b>
            </span>
            <del className={`${styles.offerDiscountPrice} d-inline-flex`}>
              ₹{item.mrp}
            </del>
          </div>
        ) : (
          <div className="col-12 float-left p-0 d-inline-block">
            <span
              className={`${styles.offerPrice} col-12 p-0 d-inline-block float-left`}
            >
              <b>₹{item.mrp}</b>
            </span>
          </div>
        )}
        {item.stock > 0 && (
          <React.Fragment>
            <p
            className="text-uppercase"
              style={{
                position: "absolute",
                color: "#408558",
                fontWeight: "bold",
                textAlign: "center",
                width: "100%",
                left: "0px",
                fontSize: "20px"
              }}
            >
              Free
            </p>
            <span
              onClick={setOfferProductItem}
              role="button"
              className={`${styles.addCartBtn} d-inline-flex align-items-center justify-content-center position-absolute text-uppercase`}
              style={{
                background: selectedOfferId === item?.id ? "#F9C100" : "",
              }}
            >
              {selectedOfferId === item?.id ? (
                <span>Selected</span>
              ) : (
                <span>Select</span>
              )}
            </span>
          </React.Fragment>
        )}
        {item.stock <= 0 && (
          <span
            role="button"
            className={`${styles.addCartBtn} d-inline-flex align-items-center justify-content-center position-absolute text-uppercase`}
          >
            Out of stock!
          </span>
        )}
      </div>
    </div>
  );
};
