import React, {useState, useEffect} from "react";
import styles from './Footer.module.css';
import { enviroment } from "../../enviroment";
import { Link } from "react-router-dom";
import { EmailIcon, FacebookIcon, InstagramIcon, LinkedInIcon, PhoneIcon, Twitter } from "../siteIcons";

export const Footer = () => {
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        let year = new Date().getFullYear();
        setCurrentYear(year);
    }, [])
    return (
        <footer className={`${styles.siteFooter} d-inline-flex flex-column col-md-12`} data-section-id="footer" data-section-type="footer-section">
            <div className={`${styles.footerBlocks} d-inline-flex flex-wrap col-md-12 p-0`}>
                <div className={`${styles.footerBlock}`} data-type="menu">
                    <div className={`${styles.footerTitle}`}>About Us</div>
                    <ul className={`${styles.footerMenu} list-unstyled`}>
                        <li><span className="text-decoration-none d-inline-flex">About Us</span></li>
                        <li><span className="text-decoration-none d-inline-flex">Our Team</span></li>
                        <li><span className="text-decoration-none d-inline-flex">Press</span></li>
                        <li><span className="text-decoration-none d-inline-flex">Our Stores</span></li>
                    </ul>
                </div>
                <div className={`${styles.footerBlock}`} data-type="menu">
                    <div className={`${styles.footerTitle}`}>Get Help</div>
                    <ul className={`${styles.footerMenu} list-unstyled`}>
                        <li><span className="text-decoration-none d-inline-flex">Cancellation</span></li>
                        <li><span className="text-decoration-none d-inline-flex">Payments</span></li>
                        <li><span className="text-decoration-none d-inline-flex">FAQ</span></li>
                    </ul>
                </div>
                <div className={`${styles.footerBlock}`} data-type="menu">
                    <div className={`${styles.footerTitle}`}>Policies</div>
                    <ul className={`${styles.footerMenu} list-unstyled`}>
                        <li><span className="text-decoration-none d-inline-flex">Privacy</span></li>
                        <li><span className="text-decoration-none d-inline-flex">Terms &amp; Conditions</span></li>
                        <li><span className="text-decoration-none d-inline-flex">Return Policies</span></li>
                    </ul>
                </div>
            </div>
            <div className={`${styles.footerBlock} mt-4 col-md-12 p-0 d-inline-flex flex-column`} data-type="contact">
                <div className={`${styles.footerBlockMobile} col-md-12 p-0 d-inline-block`}>
                    <div className={`${styles.footerTitle}`}>Get in touch</div>
                    <ul className={`${styles.footerMenu} list-unstyled d-inline-flex flex-column`}>
                        <li className={`${styles.footerIconLink} d-inline-flex col-md-12 p-0 align-items-center`}>
                            <Link className="d-inline-flex align-items-center text-decoration-none gap-1" href={`tel:${enviroment.PHONE_NUMBER}`}>
                            <PhoneIcon />
                            <span>{enviroment.PHONE_NUMBER}</span></Link>
                        </li>
                        <li className={`${styles.footerIconLink} d-inline-flex col-md-12 p-0 align-items-center`}>
                            <Link className="d-inline-flex align-items-center text-decoration-none gap-1" href={`mailto:${enviroment?.EMAIL_ADDRESS}`}>
                            <EmailIcon/>
                            <span>{enviroment?.EMAIL_ADDRESS}</span></Link>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.footerBlockMobile} col-md-12 p-0 mt-4 d-inline-block`}>
                    <div className={`${styles.footerTitle}`}>Follow us</div>
                    <ul className={`${styles.footerMenu} d-inline-flex flex-column gap-2 list-unstyled`}>
                        <li className={`${styles.footerIconLink} d-inline-flex col-md-12 p-0 align-items-center`}>
                            <Link className="d-inline-flex align-items-center text-decoration-none gap-1" target="_blank" rel="noopener" href="https://www.instagram.com/knickknacktoys42/" title={`${enviroment.BUSINESS_NAME} on Instagram`}>
                            <InstagramIcon />
                            <span className="icon__fallback-text">Instagram</span></Link>
                        </li>
                        <li className={`${styles.footerIconLink} d-inline-flex col-md-12 p-0 align-items-center`}>
                            <Link className="d-inline-flex align-items-center text-decoration-none gap-1" target="_blank" rel="noopener" href="https://www.facebook.com/knickknacktoys42" title={`${enviroment.BUSINESS_NAME} on Facebook`}>
                                <FacebookIcon />
                                <span className="icon__fallback-text">Facebook</span>
                            </Link>
                        </li>
                        <li className={`${styles.footerIconLink} d-inline-flex col-md-12 p-0 align-items-center`}>
                            <Link className="d-inline-flex align-items-center text-decoration-none gap-1" target="_blank" rel="noopener" href="javascript:void(0)" title={`${enviroment.BUSINESS_NAME}  on Twitter`}>
                                <Twitter/>
                                <span className="icon__fallback-text">Twitter</span>
                            </Link>
                        </li>
                        <li className={`${styles.footerIconLink} d-inline-flex col-md-12 p-0 align-items-center`}>
                            <Link className="d-inline-flex align-items-center text-decoration-none gap-1" target="_blank" rel="noopener" href="javascript:void(0)" title={`${enviroment.BUSINESS_NAME} on LinkedIn`}>
                                <LinkedInIcon />
                                <span className="icon__fallback-text">LinkedIn</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`${styles.footerSection} text-center col-md-12 d-inline-block`}>
                <div className="page-width text-center small--text-left">
                    <div className={`${styles.footerBaseLinks} d-inline-flex justify-content-center`}><span>&copy; {currentYear} {enviroment.BUSINESS_NAME}</span></div>
                </div>
            </div>
        </footer>
    )
}