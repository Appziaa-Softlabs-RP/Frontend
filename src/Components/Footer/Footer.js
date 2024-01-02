import React, {useState, useEffect} from "react";
import styles from './Footer.module.css';
import { enviroment } from "../../enviroment";
import { Link } from "react-router-dom";
import { EmailIcon, FacebookIcon, InstagramIcon, LinkedInIcon, PhoneIcon, Twitter } from "../siteIcons";
import { useApp } from "../../context/AppContextProvider";

export const Footer = () => {
    const [currentYear, setCurrentYear] = useState('');
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;

    useEffect(() => {
        let year = new Date().getFullYear();
        setCurrentYear(year);
    }, [])
    return (
        <React.Fragment>
            {windowWidth === "mobile" ? (
                <footer className={`${styles.siteFooter} d-inline-flex flex-column col-12`} data-section-id="footer" data-section-type="footer-section">
                    <div className={`${styles.footerBlocks} d-inline-flex flex-wrap col-12 p-0`}>
                        <div className={`${styles.footerBlock}`} data-type="menu">
                            <div className={`${styles.footerTitle}`}>About Us</div>
                            <ul className={`${styles.footerMenu} list-unstyled`}>
                                <li><Link className="text-decoration-none d-inline-flex">About Us</Link></li>
                                <li><Link className="text-decoration-none d-inline-flex">Our Team</Link></li>
                                <li><Link className="text-decoration-none d-inline-flex">Press</Link></li>
                                <li><Link className="text-decoration-none d-inline-flex">Our Stores</Link></li>
                            </ul>
                        </div>
                        <div className={`${styles.footerBlock}`} data-type="menu">
                            <div className={`${styles.footerTitle}`}>Get Help</div>
                            <ul className={`${styles.footerMenu} list-unstyled`}>
                                <li><Link className="text-decoration-none d-inline-flex">Cancellation</Link></li>
                                <li><Link className="text-decoration-none d-inline-flex">Payments</Link></li>
                                <li><Link className="text-decoration-none d-inline-flex">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className={`${styles.footerBlock}`} data-type="menu">
                            <div className={`${styles.footerTitle}`}>Policies</div>
                            <ul className={`${styles.footerMenu} list-unstyled`}>
                                <li><Link className="text-decoration-none d-inline-flex">Privacy</Link></li>
                                <li><Link className="text-decoration-none d-inline-flex">Terms &amp; Conditions</Link></li>
                                <li><Link className="text-decoration-none d-inline-flex">Return Policies</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.footerBlock} mt-4 col-12 p-0 d-inline-flex flex-column`} data-type="contact">
                        <div className={`${styles.footerBlockMobile} col-12 p-0 d-inline-block`}>
                            <div className={`${styles.footerTitle}`}>Get in touch</div>
                            <ul className={`${styles.footerMenu} list-unstyled d-inline-flex flex-column`}>
                                <li className={`${styles.footerIconLink} d-inline-flex col-12 p-0 align-items-center`}>
                                    <Link className="d-inline-flex align-items-center text-decoration-none gap-1" href={`tel:${enviroment.PHONE_NUMBER}`}>
                                    <PhoneIcon />
                                    <span>{enviroment.PHONE_NUMBER}</span></Link>
                                </li>
                                <li className={`${styles.footerIconLink} d-inline-flex col-12 p-0 align-items-center`}>
                                    <Link className="d-inline-flex align-items-center text-decoration-none gap-1" href={`mailto:${enviroment?.EMAIL_ADDRESS}`}>
                                    <EmailIcon/>
                                    <span>{enviroment?.EMAIL_ADDRESS}</span></Link>
                                </li>
                            </ul>
                        </div>
                        <div className={`${styles.footerBlockMobile} col-12 p-0 mt-4 d-inline-block`}>
                            <div className={`${styles.footerTitle}`}>Follow us</div>
                            <ul className={`${styles.footerMenu} d-inline-flex flex-column gap-2 list-unstyled`}>
                                <li className={`${styles.footerIconLink} d-inline-flex col-12 p-0 align-items-center`}>
                                    <Link className="d-inline-flex align-items-center text-decoration-none gap-1" target="_blank" rel="noopener" href="https://www.instagram.com/knickknacktoys42/" title={`${enviroment.BUSINESS_NAME} on Instagram`}>
                                    <InstagramIcon />
                                    <span className="icon__fallback-text">Instagram</span></Link>
                                </li>
                                <li className={`${styles.footerIconLink} d-inline-flex col-12 p-0 align-items-center`}>
                                    <Link className="d-inline-flex align-items-center text-decoration-none gap-1" target="_blank" rel="noopener" href="https://www.facebook.com/knickknacktoys42" title={`${enviroment.BUSINESS_NAME} on Facebook`}>
                                        <FacebookIcon />
                                        <span className="icon__fallback-text">Facebook</span>
                                    </Link>
                                </li>
                                <li className={`${styles.footerIconLink} d-inline-flex col-12 p-0 align-items-center`}>
                                    <Link className="d-inline-flex align-items-center text-decoration-none gap-1" target="_blank" rel="noopener" href="javascript:void(0)" title={`${enviroment.BUSINESS_NAME}  on Twitter`}>
                                        <Twitter/>
                                        <span className="icon__fallback-text">Twitter</span>
                                    </Link>
                                </li>
                                <li className={`${styles.footerIconLink} d-inline-flex col-12 p-0 align-items-center`}>
                                    <Link className="d-inline-flex align-items-center text-decoration-none gap-1" target="_blank" rel="noopener" href="javascript:void(0)" title={`${enviroment.BUSINESS_NAME} on LinkedIn`}>
                                        <LinkedInIcon />
                                        <span className="icon__fallback-text">LinkedIn</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.footerSection} text-center col-12 d-inline-block`}>
                        <div className="page-width text-center small--text-left">
                            <div className={`${styles.footerBaseLinks} d-inline-flex justify-content-center`}><span>&copy; {currentYear} {enviroment.BUSINESS_NAME}</span></div>
                        </div>
                    </div>
                </footer>
            ): windowWidth === "desktop" ? (
                <React.Fragment>
                    <footer className={`${styles.footerContainer} col-12 d-inline-flex`}>
                        <div className="container">
                            <div className="col-md-12 p-0 d-inline-flex">
                                <div className="col-4">
                                    <div className={`${styles.imgBoxImg} col-md-12 p-0 text-center d-inline-block mb-1`}>
                                        <img src="" className={`${styles.fasttruck}`} alt="Fast Delivery"/>
                                    </div>
                                    <div className={`${styles.imgBoxText} col-md-12 p-0 text-center d-inline-block`}>
                                        <h6 className={`${styles.imgBoxTitle} col-md-12 p-0 d-inline-block mb-2 text-center`}>Fast Delivery</h6>
                                        <p className={`${styles.imgBoxDesc} col-md-12 p-0 d-inline-block mb-0 text-center`}>We ship your products through fastest means of transportation.</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className={`${styles.imgBoxImg} col-md-12 p-0 text-center d-inline-block mb-1`}>
                                        <img src="" className={`${styles.livetracking}`} alt="Live Track"/>
                                    </div>
                                    <div className={`${styles.imgBoxText} col-md-12 p-0 text-center d-inline-block`}>
                                        <h6 className={`${styles.imgBoxTitle} col-md-12 p-0 d-inline-block mb-2 text-center`}>Live Track</h6>
                                        <p className={`${styles.imgBoxDesc} col-md-12 p-0 d-inline-block mb-0 text-center`}>We keep you posted with every steps of your order. </p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className={`${styles.imgBoxImg} col-md-12 p-0 text-center d-inline-block mb-1`}>
                                        <img src="" className={`${styles.fasttruck}`} alt="Special Offers"/>
                                    </div>
                                    <div className={`${styles.imgBoxText} col-md-12 p-0 text-center d-inline-block`}>
                                        <h6 className={`${styles.imgBoxTitle} col-md-12 p-0 d-inline-block mb-2 text-center`}>Special Offers</h6>
                                        <p className={`${styles.imgBoxDesc} col-md-12 p-0 d-inline-block mb-0 text-center`}>You are special to us. Visit us for wide range of offers and discounts.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_section_three container">
                                <div className="footer_tab_col">
                                    <h5>About Us</h5>
                                    <ul>
                                        <li><Link href="">About Us</Link></li>
                                        <li><Link href="">Our Team</Link></li>
                                        <li><Link href="">Press</Link></li>
                                        <li><Link href="">Our Stores</Link></li>
                                    </ul>
                                </div>
                                <div className="footer_tab_col">
                                    <h5>Get Help</h5>
                                    <ul>
                                        <li><Link href="">Cancellation</Link></li>
                                        <li><Link href="">Payments</Link></li>
                                        <li><Link href="">FAQ</Link></li>
                                    </ul>
                                </div>
                                <div className="footer_tab_col">
                                    <h5>Policies</h5>
                                    <ul>
                                        <li><Link href="">Privacy</Link></li>
                                        <li><Link href="">Terms & Conditions</Link></li>
                                        <li><Link href="">Return Policies</Link></li>
                                    </ul>
                                </div>
                                <div className="footer_tab_col">
                                    <h5>Get social with us</h5>
                                    <ul className="list-unstyled d-inline-flex align-items-center mb-3">
                                        <li className="list-unstyled social-Icon facebook"><Link href={enviroment.FACEBOOK_LINK}><i className="fa fa-facebook"></i></Link></li>
                                        <li className="list-unstyled ml-3 social-Icon twitter"><Link href={enviroment.TWITTER_LINK}><i className="fa fa-twitter"></i></Link></li>
                                        <li className="list-unstyled ml-3 social-Icon instagram"><Link href={enviroment.INSTAGRAM_LINK}><i className="fa fa-instagram"></i></Link></li>
                                        <li className="list-unstyled ml-3 social-Icon youtube"><Link href={enviroment.YOUTUBE_LINK}><i className="fa fa-youtube"></i></Link></li>
                                    </ul>
                                    <h5 className="mb-2">Contact Us</h5>
                                    <div className="d-inline-flex align-items-center mb-3">
                                        <Link href={`https://api.whatsapp.com/send?phone=${enviroment.PHONE_NUMBER}`} className="d-inline-flex align-items-center whats-app-link"><i className="fa fa-whatsapp"></i>&nbsp;<span>{enviroment.PHONE_NUMBER}</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div className="footer_section_five container">
                        <div className="col-md-12 d-inline-flex justify-content-between align-items-center">
                            <div className="copyright_section mt-3">
                                <div className="copyright">
                                    <p>© Copyright {new Date().getFullYear()} {enviroment.BUSINESS_NAME}. All Rights Reserved<br/><small> Made with <i className="fa fa-heart" aria-hidden="true"></i> by <Link className="copyright-reward" href="https://rewardsplus.in">RewardsPlus</Link></small></p>
                                </div>
                                <div className="pmt_methods">
                                    <img src="assets/images/payment_methods.png" alt=""/>
                                </div>
                            </div>
                            <div className="application_btns">
                                <ul className="list-unstyled d-inline-flex align-items-center mb-0">
                                    <li className="list-unstyled mr-2"><Link href={enviroment.GOOGLE_APP}><img src="{{ asset('/v2/assets/images/playstore.svg') }}" alt=""/></Link></li>
                                    <li className="list-unstyled ml-2"><Link href={enviroment.APPLE_APP}><img src="{{ asset('/v2/assets/images/appstore.svg') }}" alt=""/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ): ('')}
        </React.Fragment>
    )
}