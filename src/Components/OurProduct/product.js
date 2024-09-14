import React, { useState } from "react";

const OurProducts = () => {
  const [tab, setTab] = useState(0);

  const changeTab = (index) => {
    setTab(index);
  };

  const GetTabInfo = () => {
    switch (tab) {
      case 0:
        return (
          <div className="pt-10 px-8">
            <h1 className="text-danger fs-3">
              <b>Sangpriya</b>
            </h1>
            <h2 className="text-muted fs-xl py-2">Kachi Ghani Mustard Oil</h2>
            <p>
              Experience the difference pure, cold-pressed mustard oil makes in
              your kitchen. Sangpriya Kachi Ghani Mustard Oil is crafted using
              the traditional kachi ghani method, where wooden rollers extract
              the oil from mustard seeds without heat. This age-old process
              ensures:
            </p>
          </div>
        );

      case 1:
        return (
          <div className="pt-10 px-8">
            <h1 className="text-danger fs-3">
              <b>Sangpriya</b>
            </h1>
            <h2 className="text-muted fs-xl py-2">
              Unleash the Power of Pure: Sangpriya Kachi Ghani Mustard Oil
            </h2>
            <p>
              This isn't just any cooking oil. Sangpriya Kachi Ghani is a
              nutritional powerhouse, packed with 900kcal of energy per 100g to
              fuel your busy days.
              <br />
              <br />
              Ditch the Diet, Embrace Flavor: Unlike many healthy oils,
              Sangpriya Kachi Ghani boasts a delicious taste profile. It's a
              champion of good fats, rich in monounsaturated (63g) and
              polyunsaturated fats (29g) with minimal saturated fat (8g). This
              perfect balance keeps you energized without sacrificing flavor.
              <br />
              <br />
              Nature's Secret Weapon: Say hello to a natural source of Vitamin E
              (40mcg) that supports your overall well-being. Sangpriya Kachi
              Ghani Mustard Oil - pure flavor, sustained energy, and a healthy
              boost for every meal.
            </p>
          </div>
        );

      case 2:
        return (
          <div className="pt-10 px-8">
            <h1 className="text-danger fs-3">
              <b>Sangpriya</b>
            </h1>
            <h2 className="text-muted fs-xl py-2">Kachi Ghani Mustard Oil</h2>
            <p>
              Ditch the diet drama and embrace delicious with Sangpriya Pure
              Mustard Oil! This isn't your average cooking oil; it's a
              heart-healthy hero packed with Omega-3s, PUFAs, and MUFAs - a
              symphony of unsaturated fats that act like bodyguards for your
              cholesterol. Sangpriya Pure helps keep your bad LDL levels in
              check, while letting the good HDL do its thing.
              <br />
              <br />
              But wait, there's more! Sangpriya Pure is a multi-vitamin
              powerhouse, bursting with Vitamins A, D, and E to keep you glowing
              from the inside out. And the cherry on top? It's rich in Omega-3s,
              your secret weapon for maintaining healthy blood cholesterol
              levels.
              <br />
              <br />
              Cook with confidence and flavor with Sangpriya Pure Mustard Oil.
              It's the delicious way to support a healthy you!
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="container">
      <div className="my-lg-20 my-sm-4 mx-lg-20 mx-max-sm-4">
        <h1 className="text-3xl text-center">
          Our <b>Product</b>
        </h1>
        <div className="text-center d-flex flex-column flex-sm-row justify-content-evenly mt-5 fs-xl ">
          <p
            onClick={() => changeTab(0)}
            className="fs-4"
            style={{
              cursor: "pointer",
              borderBottom: tab === 0 ? "2px solid #F7CE39" : "",
              fontWeight: tab === 0 ? "bold" : "",
            }}
          >
            Details
          </p>
          <p
            onClick={() => changeTab(1)}
            className="fs-4"
            style={{
              cursor: "pointer",
              borderBottom: tab === 1 ? "2px solid #F7CE39" : "",
              fontWeight: tab === 1 ? "bold" : "",
            }}
          >
            Nutritional Facts
          </p>
          <p
            onClick={() => changeTab(2)}
            className="fs-4"
            style={{
              cursor: "pointer",
              borderBottom: tab === 2 ? "2px solid #F7CE39" : "",
              fontWeight: tab === 2 ? "bold" : "",
            }}
          >
            Benefits
          </p>
        </div>
        <div className="row row-cols-lg-2 row-cols-sm-1 gap-8">
          <GetTabInfo />
          <div
            className="pt-10 px-8 text-center d-flex align-items-center  justify-content-center ">
            <img src="images/product.png" alt="" style={{ width: "250px" }} />
            <img
              src="images/product-bg.png"
              alt=""
              className="position-absolute "
              style={{
                width: "400px",
                zIndex: -1,
                opacity: "0.5",
                transform: "scaleX(-1)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
