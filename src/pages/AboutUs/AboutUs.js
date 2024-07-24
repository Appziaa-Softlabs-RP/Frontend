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
      <div className="min-vh-100 col-12 d-inline-flex flex-column my-5">
        <div className="container">
          <h1>About Us</h1>
          <h3 className="c6" style={{
            marginLeft: "0px",
            fontWeight: "bold",
            marginTop: "20px",
          }}>
            Welcome to {process.env.REACT_APP_BUSINESS_NAME}
          </h3>
          <p className="c6">
            <span className="c4">
              At {process.env.REACT_APP_BUSINESS_NAME}, headquartered in the vibrant heart of Delhi, we specialize in delivering premium bags and corporate gifting solutions that blend functionality, style, and durability. With over two decades of experience in the industry, we have perfected the art of creating exceptional products that meet the diverse needs of our clients.
            </span>
          </p>

          <h3 className="c6" style={{
            marginLeft: "0px",
            fontWeight: "bold",
          }}>
            Our Expertise
          </h3>
          <p className="c6">
            <span className="c4">
              At {process.env.REACT_APP_BUSINESS_NAME}, headquartered in the vibrant heart of Delhi, we specialize in delivering premium bags and corporate gifting solutions that blend functionality, style, and durability. With over two decades of experience in the industry, we have perfected the art of creating exceptional products that meet the diverse needs of our clients.
            </span>
          </p>

          <h3 className="c6" style={{
            marginLeft: "0px",
            fontWeight: "bold",
          }}>
            Corporate Gifting Solutions
          </h3>
          <p className="c6">
            <span className="c4">
              In addition to our extensive range of bags, {process.env.REACT_APP_BUSINESS_NAME} offers bespoke corporate gifting solutions tailored to elevate your brand and leave a lasting impression. Whether you are looking to reward employees, thank clients, or celebrate milestones, our curated selection of corporate gifts is designed to reflect your company's values and enhance your brand identity.
            </span>
          </p>

          <h3 className="c6" style={{
            marginLeft: "0px",
            fontWeight: "bold",
          }}>
            Trusted by Leading Brands
          </h3>
          <p className="c6">
            <span className="c4">
              Over the years, we have had the privilege of serving esteemed clients such as LIC, PhonePe, LG, L&T, Delhivery, Airtel, and Bata. Our commitment to quality and excellence has made us the preferred choice for these industry giants.
            </span>
          </p>

          <h3 className="c6" style={{
            marginLeft: "0px",
            fontWeight: "bold",
          }}>
            Why Choose {process.env.REACT_APP_BUSINESS_NAME}?
          </h3>
          <ul className="c10 lst-kix_ck63bwdhsg7q-0 start">
            <li className="c0 li-bullet-0">
              <span className="c2"><b>Curated Collection:</b></span>
              <span className="c4">
                &nbsp;We carefully handpick toys from around the world and
                India, ensuring a mix of both internationally renowned brands
                and exceptional local craftsmanship.
              </span>
            </li>
            <li className="c0 li-bullet-0">
              <span className="c2"><b>Quality Assurance:</b></span>
              <span className="c4">
                Our commitment to quality is unwavering. Each product undergoes rigorous quality checks to ensure it meets the highest standards.
              </span>
            </li>
            <li className="c0 li-bullet-0">
              <span className="c2"><b>Customization:</b></span>
              <span className="c4">
                We understand that every client is unique. Our customization options allow you to create products that truly represent your brand.
              </span>
            </li>
            <li className="c0 li-bullet-0">
              <span className="c2"><b>Sustainability:</b></span>
              <span className="c4">
                We are dedicated to sustainable practices, ensuring our processes and materials are environmentally friendly.
              </span>
            </li>
          </ul>

          <h3 className="c6" style={{
            marginLeft: "0px",
            fontWeight: "bold",
          }}>
            Why Choose {process.env.REACT_APP_BUSINESS_NAME}?
          </h3>
          <p className="c6">
            <span className="c4">
              Our mission is to provide exceptional products and services that exceed our clients' expectations. We strive to build long-lasting relationships based on trust, quality, and innovation.
            </span>
          </p>

        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
