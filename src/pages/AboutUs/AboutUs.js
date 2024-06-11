import React, { useEffect } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { useApp } from "../../context/AppContextProvider";

export const AboutUs = () => {
  const appData = useApp();
  let windowWidth = appData.appData.windowWidth;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      {windowWidth === "mobile" ? (
        <PageHeader title="About Us" hide={true} />
      ) : (
        <Header />
      )}
      <div
        className="min-vh-100 col-12 d-inline-flex flex-column my-5"
        style={{
          paddingTop: "80px",
        }}
      >
        <div className="container">
          <h2>
            <b>About Us</b>
          </h2>
          <p>
            At Sangpriya, we believe in the power of pure, authentic ingredients
            to create delicious and wholesome food. We are a brand built on
            tradition, using time-tested recipes and natural ingredients to
            bring back the flavors you know and love.
          </p>
          <h3>
            <b>Our Promise</b>
          </h3>
          <p>
            We are committed to using only the finest, ethically sourced
            ingredients. We never add artificial flavors, preservatives, or
            colors to our products. We believe that nature provides the perfect
            blend of taste and goodness, and we strive to preserve that in every
            bite.
          </p>
          <h3>
            <b>Our Story</b>
          </h3>
          <p>
            Sangpriya is the brainchild of Mr. Ranjan, a man with a deep passion
            for authentic Indian cuisine. Inspired by his own family recipes
            passed down through generations, Mr. Ranjan saw a growing need for
            high-quality, natural food products in today's fast-paced world.
            Sangpriya was born out of a desire to reconnect people with the true
            flavors of India, using only the ingredients our ancestors relied
            on.
          </p>
          <h3>
            <b>Our Mission</b>
          </h3>
          <p>
            Our mission is to revive the tradition of authentic Indian cooking
            and to make pure, natural food accessible to everyone. We want to
            bring families and friends together around the table to share
            delicious meals made with love.
          </p>
          <h3>
            <b>Join the Sangpriya Family</b>
          </h3>
          <p>
            We invite you to explore our range of food, masala, and mustard oil
            products. We are confident that you will taste the difference that
            pure ingredients make. With Sangpriya, experience the joy of
            authentic Indian flavors in every dish you create.
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
