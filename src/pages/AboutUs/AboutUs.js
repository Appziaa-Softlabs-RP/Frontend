import React, { useEffect } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { useApp } from "../../context/AppContextProvider";
import { aboutUs } from "../../constants/data";

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
          <p className="c6">
            <span className="c1" style={{
              fontSize: "1.25rem"
            }}>
              {
                aboutUs?.heading
              }
            </span>
          </p>
          <p className="c4" dangerouslySetInnerHTML={
            {
              __html: aboutUs?.description
            }
          }>
          </p>
          <p className="c1">
            {aboutUs?.keyDifference}
          </p>
          <ul className="c10 lst-kix_ck63bwdhsg7q-0 start">
            {
              aboutUs?.keyDifferencePoints?.map((point, index) => (
                <li className=""
                  key={index}>
                  <span className="c2">
                    <b>{point?.heading}</b>
                  </span>
                  <span className="c4"
                    dangerouslySetInnerHTML={{ __html: point?.description }}>
                  </span>
                </li>
              ))
            }
          </ul>
          <div dangerouslySetInnerHTML={{ __html: aboutUs?.otherInfo }}>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
