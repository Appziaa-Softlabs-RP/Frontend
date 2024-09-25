import React from "react";
import { Link } from "react-router-dom";
import { enviroment } from "../../enviroment";
import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon
} from "../siteIcons";
import styles from "./Footer.module.css";

export const Footer = () => {

  return (
    <React.Fragment>
      <footer
        className={`${styles.footerContainer} col-12 d-inline-flex`}
      >
        <div className="container-fluid p-5 row w-full mx-auto">
          <div className="col-12 mt-5 row gap-4">
            <div className={`col-11 col-sm-8 col-lg-5 py-4 ${styles.leftSectionContainer} p-0 m-0`}
            >
              <p>Subscribe to the Newsletter & Receive Latest Updates</p>
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  style={{
                    borderRadius: "5px 0px 0px 5px"
                  }}
                />
                <button className="btn" style={{
                  background: "white",
                  color: "black",
                  padding: "10px",
                  borderRadius: "0px 5px 5px 0px"
                }}>Subscribe</button>
              </div>
              <div>
                <p className="mt-3">FOLLOW ON SOCIAL MEDIA</p>
                <div className="d-flex p-0 m-0 gap-0 justify-content-center" style={{
                  maxHeight: "20px",
                  maxWidth: "150px",
                }}>
                  <FacebookIcon color={'#FFF'} />
                  <LinkedInIcon color={'#FFF'} />
                  <TwitterIcon color={'#FFF'} />
                  <YoutubeIcon color={'#FFF'} />
                </div>
              </div>
            </div>
            <div className={`col-12 py-4 col-lg-6 ${styles.footerLinksComponents} p-0 m-0`}>
              <div
                className={`${styles.footerTabCol} d-inline-flex flex-column px-3`}
              >
                <h5>Shop</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-decoration-none" to="">
                      Men's Shoes
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="">
                      Women's Shoes
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="">
                      Kids Shoes
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className={`${styles.footerTabCol} d-inline-flex flex-column px-3`}
              >
                <h5>Company</h5>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-decoration-none"
                      href="/"
                      // target="_blank"
                      rel="noopener noreferrer"
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none"
                      href="/"
                      // target="_blank"
                      rel="noopener noreferrer"
                    >
                      Our Stores
                    </a>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="/contact-us">
                      Enquiry
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className={`${styles.footerTabCol} d-inline-flex flex-column px-3`}
              >
                <h5>Policies</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-decoration-none" to="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="/terms">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="/return-policy">
                      Return Policies
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="/Cancellation-policy">
                      Cancellation
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className={`${styles.footerTabCol} d-inline-flex flex-column px-3`}
              >
                <h5>Get In Touch</h5>
                <ul className="list-unstyled">
                  <li>
                    <p className={`${styles.linkContainer}`}>
                      <b>Mail:</b>
                      <a href={`mailto:${enviroment.EMAIL_ADDRESS}`}>
                        {enviroment.EMAIL_ADDRESS}
                      </a>
                    </p>
                  </li>
                  <li>
                    <p className={`${styles.linkContainer}`}>
                      <b>Call:</b>
                      <a href={`tel:${enviroment.PHONE_NUMBER}`}>
                        {enviroment.PHONE_NUMBER}
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="col-md-12 w-100" style={{
        background: "black"
      }}>
        <div className="ps-2 ps-md-5">
          <div className="col-md-12 d-inline-flex justify-content-between align-items-center">
            <div className={`col-12 d-inline-flex mt-3`}>
              <div className={`${styles.copyright}`}>
                <p>
                  © Copyright {new Date().getFullYear()}{" "}
                  {enviroment.BUSINESS_NAME}. All Rights Reserved
                  <br />
                  <small>
                    {" "}
                    Made with{" "}
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
                    <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                    <a
                      className={`${styles.copyrightReward} text-decoration-none`}
                      href="https://rewardsplus.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RewardsPlus
                    </a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
