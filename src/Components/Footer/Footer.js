import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LiveTrackIcon,
  PhoneIcon,
  SpecialOfferIcon,
  TruckIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../siteIcons";
import styles from "./Footer.module.css";

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");
  const appData = useApp();
  let windowWidth = appData.appData.windowWidth;

  useEffect(() => {
    let year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);
  return (
    <React.Fragment>
      {windowWidth === "mobile" ? (
        <footer
          className={`${styles.siteFooter} d-inline-flex flex-column col-12`}
          data-section-id="footer"
          data-section-type="footer-section"
        >
          <div
            className={`${styles.footerBlocks} d-inline-flex flex-wrap col-12 p-0`}
          >
            <div className={`${styles.footerBlock}`} data-type="menu">
              <div className={`${styles.footerTitle}`}>About Us</div>
              <ul className={`${styles.footerMenu} list-unstyled`}>
                <li>
                  <Link
                    to="/about-us"
                    className="text-decoration-none d-inline-flex"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none d-inline-flex">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none d-inline-flex">
                    Press
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none d-inline-flex">
                    Our Stores
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.footerBlock}`} data-type="menu">
              <div className={`${styles.footerTitle}`}>Get Help</div>
              <ul className={`${styles.footerMenu} list-unstyled`}>
                <li>
                  <Link
                    to="/Cancellation-policy"
                    className="text-decoration-none d-inline-flex"
                  >
                    Cancellation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/payments"
                    className="text-decoration-none d-inline-flex"
                  >
                    Payments
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none d-inline-flex">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.footerBlock}`} data-type="menu">
              <div className={`${styles.footerTitle}`}>Policies</div>
              <ul className={`${styles.footerMenu} list-unstyled`}>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-decoration-none d-inline-flex"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-decoration-none d-inline-flex"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/return-policy"
                    className="text-decoration-none d-inline-flex"
                  >
                    Return Policies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles.footerBlock} mt-4 col-12 p-0 d-inline-flex flex-column`}
            data-type="contact"
          >
            <div
              className={`${styles.footerBlockMobile} col-12 p-0 d-inline-block`}
            >
              <div className={`${styles.footerTitle}`}>Get in touch</div>
              <ul
                className={`${styles.footerMenu} list-unstyled d-inline-flex flex-column`}
              >
                <li
                  className={`${styles.footerIconLink} d-inline-flex col-12 p-0 align-items-center`}
                >
                  <Link
                    className="d-inline-flex align-items-center text-decoration-none gap-1"
                    to={`tel:${enviroment.PHONE_NUMBER}`}
                  >
                    <PhoneIcon />
                    <span>{enviroment.PHONE_NUMBER}</span>
                  </Link>
                </li>
                <li
                  className={`${styles.footerIconLink} d-inline-flex col-12 p-0 align-items-center`}
                >
                  <Link
                    className="d-inline-flex align-items-center text-decoration-none gap-1"
                    to={`mailto:${enviroment?.EMAIL_ADDRESS}`}
                  >
                    <EmailIcon />
                    <span>{enviroment?.EMAIL_ADDRESS}</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={`${styles.footerBlockMobile} col-12 p-0 mt-4 d-inline-block`}
            >
              <div className={`${styles.footerTitle}`}>Follow us</div>
              <ul
                className={`${styles.footerMenu} d-inline-flex flex-column gap-2 list-unstyled`}
              >
                <li
                  className={`${styles.footerIconLink} d-inline-flex col-12 p-0 align-items-center`}
                >
                  <Link
                    to={enviroment.INSTAGRAM_LINK}
                    className="d-inline-flex align-items-center text-decoration-none gap-1"
                    target="_blank"
                    rel="noopener"
                    title={`${enviroment.BUSINESS_NAME} on Instagram`}
                  >
                    <InstagramIcon />
                    <span className="icon__fallback-text">Instagram</span>
                  </Link>
                </li>
                <li
                  className={`${styles.footerIconLink} d-inline-flex col-12 p-0 align-items-center`}
                >
                  <Link
                    to={enviroment.FACEBOOK_LINK}
                    className="d-inline-flex align-items-center text-decoration-none gap-1"
                    target="_blank"
                    rel="noopener"
                    title={`${enviroment.BUSINESS_NAME} on Facebook`}
                  >
                    <FacebookIcon />
                    <span className="icon__fallback-text">Facebook</span>
                  </Link>
                </li>
                <li
                  className={`${styles.footerIconLink} d-inline-flex col-12 p-0 align-items-center`}
                >
                  <Link
                    to={enviroment.TWITTER_LINK}
                    className="d-inline-flex align-items-center text-decoration-none gap-1"
                    target="_blank"
                    rel="noopener"
                    title={`${enviroment.BUSINESS_NAME}  on Twitter`}
                  >
                    <TwitterIcon />
                    <span className="icon__fallback-text">Twitter</span>
                  </Link>
                </li>
                <li
                  className={`${styles.footerIconLink} d-inline-flex col-12 p-0 align-items-center`}
                >
                  <Link
                    to={enviroment.LINKEDIN_LINK}
                    className="d-inline-flex align-items-center text-decoration-none gap-1"
                    target="_blank"
                    rel="noopener"
                    title={`${enviroment.BUSINESS_NAME} on LinkedIn`}
                  >
                    <LinkedInIcon />
                    <span className="icon__fallback-text">LinkedIn</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles.footerSection} text-center col-12 d-inline-block`}
          >
            <div className="page-width text-center small--text-left">
              <div
                className={`${styles.footerBaseLinks} d-inline-flex justify-content-center`}
              >
                <span>
                  &copy; {currentYear} {enviroment.BUSINESS_NAME}
                </span>
              </div>
            </div>
          </div>
        </footer>
      ) : windowWidth === "desktop" ? (
        <React.Fragment>
          <footer
            className={`${styles.footerContainer} col-12 d-inline-flex pt-5`}
          >
            <div className="container-fluid">
              <div className="col-md-12 p-0 d-inline-flex">
                <div className="col-4 px-3">
                  <div
                    className={`${styles.imgBoxImg} col-md-12 p-0 text-center d-inline-block mb-1`}
                  >
                    <TruckIcon />
                  </div>
                  <div
                    className={`${styles.imgBoxText} col-md-12 p-0 text-center d-inline-block`}
                  >
                    <h6
                      className={`${styles.imgBoxTitle} col-md-12 p-0 d-inline-block mb-2 text-center`}
                    >
                      Fast Delivery
                    </h6>
                    <p
                      className={`${styles.imgBoxDesc} col-md-12 p-0 d-inline-block mb-0 text-center`}
                    >
                      We ship your products through fastest means of
                      transportation.
                    </p>
                  </div>
                </div>
                <div className="col-4 px-3">
                  <div
                    className={`${styles.imgBoxImg} col-md-12 p-0 text-center d-inline-block mb-1`}
                  >
                    <LiveTrackIcon />
                  </div>
                  <div
                    className={`${styles.imgBoxText} col-md-12 p-0 text-center d-inline-block`}
                  >
                    <h6
                      className={`${styles.imgBoxTitle} col-md-12 p-0 d-inline-block mb-2 text-center`}
                    >
                      Live Track
                    </h6>
                    <p
                      className={`${styles.imgBoxDesc} col-md-12 p-0 d-inline-block mb-0 text-center`}
                    >
                      We keep you posted with every steps of your order.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-4 px-3">
                  <div
                    className={`${styles.imgBoxImg} col-md-12 p-0 text-center d-inline-block mb-1`}
                  >
                    <SpecialOfferIcon />
                  </div>
                  <div
                    className={`${styles.imgBoxText} col-md-12 p-0 text-center d-inline-block`}
                  >
                    <h6
                      className={`${styles.imgBoxTitle} col-md-12 p-0 d-inline-block mb-2 text-center`}
                    >
                      Special Offers
                    </h6>
                    <p
                      className={`${styles.imgBoxDesc} col-md-12 p-0 d-inline-block mb-0 text-center`}
                    >
                      You are special to us. Visit us for wide range of offers
                      and discounts.
                    </p>
                  </div>
                </div>
              </div>

              {/* footer links */}
              <div className="container-fluid my-5 ">
                <div className="row d-flex align-items-center justify-content-between w-100">
                  <div className="col-lg-7 ">
                    <div className="row gx-lg-5">
                      <div className="col-lg-4">
                        <ul className="mt-10 leading-10 list-unstyled">
                          <li>
                            <b>ABOUT YOU</b>
                          </li>
                          <li>Who are we</li>
                          <li>Team</li>
                          <li>Recipes</li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul className="mt-10 leading-10 list-unstyled">
                          <li>
                            <b>Policies</b>
                          </li>
                          <li>Privacy</li>
                          <li>Team</li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul className="mt-10 leading-10 list-unstyled">
                          <li>
                            <b>Help</b>
                          </li>
                          <li>FAQ</li>
                          <li>Cancellation</li>
                          <li>Contact Us</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 text-end p-4 d-flex flex-column">
                    <div
                      className={`${styles.footerTabCol} col-3 d-flex flex-col flex-column px-3 text-nowrap  text-start`}
                    >
                      <h5 className="fs-5">Follow on social media</h5>
                      <ul className="list-unstyled align-items-center mb-3 gap-5 d-flex">
                        <li className={`${styles.socialIcon} list-unstyled`}>
                          <Link
                            to={enviroment.FACEBOOK_LINK}
                            className="text-decoration-none"
                          >
                            <FacebookIcon />
                          </Link>
                        </li>
                        <li className={`${styles.socialIcon} list-unstyled`}>
                          <Link
                            to={enviroment.TWITTER_LINK}
                            className="text-decoration-none"
                          >
                            <TwitterIcon />
                          </Link>
                        </li>
                        <li className={`${styles.socialIcon} list-unstyled`}>
                          <Link to={enviroment.INSTAGRAM_LINK}>
                            <InstagramIcon />
                          </Link>
                        </li>
                        <li className={`${styles.socialIcon} list-unstyled`}>
                          <Link
                            to={enviroment.YOUTUBE_LINK}
                            className="text-decoration-none"
                          >
                            <YoutubeIcon />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <label
                        for="price"
                        className="block text-md font-medium leading-6 mt-5"
                      >
                        Subscribe to the Sangpriya Newsletter
                      </label>
                      <div className="relative mt-2 rounded d-flex bg-white">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="form-control rounded-md py-1.5 pl-4 pr-5 text-gray-900 border-0 ring-1 ring-gray-300 placeholder-text-gray-400"
                          placeholder="Enter your email address"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mx-10" />
              <div className="container-fluid">
                <div className="row mx-10 py-10 justify-content-between">
                  <p>
                    <span>© 2024. Made in India with Love&nbsp;</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="red"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                    <span>&nbsp;by&nbsp;</span>
                    <a href="https://rewardsplus.in/">
                      <img
                        src="/images/rewards-logo.png"
                        alt="Rewards Plus"
                        className="mt-2"
                        style={{
                          height: "30px",
                        }}
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </React.Fragment>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
