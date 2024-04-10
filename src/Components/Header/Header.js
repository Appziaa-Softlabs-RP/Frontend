import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import siteLogo from "../../assets/images/site_logo.png";
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import { AppNotification } from "../../utils/helper";
import { CartAside } from "../CartAside/CartAside";
import { LoginPopup } from "../LoginPopup/LoginPopup";
import {
  CartIcon,
  MailIcon,
  MenuIcons,
  SupportIcon,
  UserIcon,
} from "../siteIcons";
import styles from "./Header.module.css";

import { useAppStore } from "../../store";

export const Header = ({ setAsideOpen, asideOpen }) => {
  const appData = useApp();
  const [loading, setLoading] = useState(true);
  const navItems = useAppStore((state) => state.navItems);
  const setNavItems = useAppStore((state) => state.setNavItems);
  const setCategories = useAppStore((state) => state.setCategories);
  const [searchProd, setSearchProd] = useState("");
  const [searchProdList, setSearchProdList] = useState([]);
  const [loginPop, setLoginPop] = useState(false);
  const [accountOptn, setAccountOptn] = useState(false);
  const [cartPop, setCartPop] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const navigate = useNavigate();
  let windowWidth = appData.appData.windowWidth;

  const openAsideMenu = () => {
    if (asideOpen === true) {
      setAsideOpen(false);
    } else {
      setAsideOpen(true);
    }
  };

  const openCart = () => {
    navigate("/checkout");
  };

  const routeHome = () => {
    navigate("/");
  };

  const openAccountDetail = () => {
    if (accountOptn === true) {
      setAccountOptn(false);
    } else {
      setAccountOptn(true);
    }
  };

  const userLoggedOut = () => {
    let emptyCartData = [];
    appData.setAppData({
      ...appData.appData,
      user: "",
      loggedIn: false,
      cartSaved: false,
      cartData: emptyCartData,
      cartCount: 0,
    });
    localStorage.setItem("cartData", JSON.stringify(emptyCartData));
    localStorage.removeItem("user");
    localStorage.removeItem("cartSaved");
    localStorage.removeItem("loggedIn");
    AppNotification(
      "Logged Out",
      "You have been successfully logged out.",
      "success"
    );
    navigate("/");
  };

  useEffect(() => {
    if (searchProd === "") {
      setSearchProdList([]);
    }
  }, [searchProd]);

  useEffect(() => {
    const payload = {
      store_id: parseInt(enviroment.STORE_ID),
    };
    ApiService.AllCategory(payload)
      .then((res) => {
        let allCatList = [];
        let allSubCategory = res?.payload_verticalWithCatList?.vertical;
        allSubCategory.map((item) => {
          if (item?.catList?.length > 0) {
            item.catList.map((catItem) => {
              let catObj = {
                verticalId: item.vertical_id,
                category: catItem,
              };
              allCatList.push(catObj);
            });
          }
        });
        setNavItems(allSubCategory);
        setCategories(allCatList);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setUserInfo(appData.appData.user);
  }, [appData?.appData]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      {windowWidth === "mobile" ? (
        <div
          className={`${styles.siteHeader} col-12 d-inline-flex flex-column gap-3 pe-4`}
        >
          <div className={`col-12 d-inline-flex align-items-center`}>
            <span
              className={`${styles.menuIconBox} d-inline-flex align-items-center justify-content-center`}
              onClick={openAsideMenu}
            >
              <MenuIcons color={"black"} />
            </span>
            <span
              onClick={() => routeHome()}
              className={`${styles.siteLogoBox} d-inline-flex align-items-center justify-content-center m-auto`}
            >
              <img src={siteLogo} alt="Logo" className="object-fit-contain" />
            </span>
            <span
              className={`${styles.cartIconBox} d-inline-flex align-items-center justify-content-center position-relative`}
              onClick={() => openCart()}
            >
              <span
                className={`${styles.cartCount} position-absolute d-inline-flex align-items-center`}
              >
                {appData?.appData?.cartCount}
              </span>
              <CartIcon color={"black"} />
            </span>
          </div>
        </div>
      ) : windowWidth === "desktop" ? (
        <div
          className={`col-12 d-inline-flex flex-column position-fixed z-3 ${
            isHeaderActive ? "bg-white" : "bg-white bg-opacity-50"
          }`}
        >
          <div className={`col-12 d-inline-flex align-items-center`}>
            <div className="container h-100 d-flex align-items-stretch">
              <div
                className={`${styles.headerInnerRow} col-12 d-inline-flex justify-content-between  align-items-stretch gap-3 `}
              >
                {/* logo */}
                <span
                  className={`${styles.siteLogoBox} d-inline-flex align-items-center justify-content-center col-2`}
                  role="button"
                  onClick={() => routeHome()}
                >
                  <img
                    src={siteLogo}
                    alt="Logo"
                    className="object-fit-contain"
                  />
                </span>

                {/* nav-link */}
                <div
                  className={`d-flex d-inline-flex col-6 position-relative align-items-center justify-content-center fw-semibold fs-6`}
                >
                  <ul class="navbar-nav mr-auto d-flex flex-row text-black ">
                    <li class="nav-item m-3">
                      <a class="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li class="nav-item m-3">
                      <a class="nav-link" href="/">
                        Products
                      </a>
                    </li>
                    <li class="nav-item m-3">
                      <a class="nav-link" href="/">
                        Recipes
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-inline-flex align-items-stretch justify-content-end gap-3 gap-md-4">
                  {/* support */}
                  <div
                    className={`${styles.supportDrop} d-inline-flex d-inline-flex align-items-center gap-2 position-relative`}
                    role="button"
                  >
                    <SupportIcon color="#000000" />
                    <span
                      className={`${styles.supportText} d-none d-md-flex text-black`}
                    >
                      Support
                    </span>
                    <div
                      className={`${styles.supportDropDown} position-absolute d-inline-block`}
                    >
                      <div
                        className={`${styles.timingPhoneBox} d-inline-flex col-12 align-items-center gap-3`}
                      >
                        <SupportIcon color="#000000" />
                        <div className="d-inline-flex flex-column">
                          <label
                            className={`${styles.supportTimings} d-inline-block col-12 p-0 text-center`}
                          >
                            7 days, 9AM to 9PM
                          </label>
                          <Link
                            to={`tel:${enviroment.PHONE_NUMBER}`}
                            className={`${styles.supportPhoneNumber} text-decoration-none d-inline-block col-12 p-0 text-center`}
                          >
                            {enviroment.PHONE_NUMBER}
                          </Link>
                        </div>
                      </div>
                      <div
                        className={`${styles.mailtoBox} text-decoration-none d-inline-flex align-items-center gap-3 col-12`}
                      >
                        <MailIcon color="#000000" />
                        <Link
                          to={`mailto:${enviroment.EMAIL_ADDRESS}`}
                          className={`${styles.mailtoEmail} d-inline-block text-decoration-none`}
                        >
                          {enviroment.EMAIL_ADDRESS}
                        </Link>
                      </div>
                      <div
                        className={`${styles.orderTrackLinks} d-none justify-content-between align-items-center col-12 p-0`}
                      >
                        <Link
                          className={`${styles.supportLinks} text-decoration-none d-inline-flex`}
                        >
                          Chat With Us
                        </Link>
                        <span className={`${styles.dotSymbol} d-inline-flex`}>
                          &bull;
                        </span>
                        <Link
                          className={`${styles.supportLinks} text-decoration-none d-inline-flex`}
                        >
                          FAQ’s
                        </Link>
                        <span className={`${styles.dotSymbol} d-inline-flex`}>
                          &bull;
                        </span>
                        <Link
                          className={`${styles.supportLinks} text-decoration-none d-inline-flex`}
                        >
                          Track Order
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* account */}
                  {userInfo && userInfo?.customer_id ? (
                    <div
                      className={`${styles.supportDrop} d-inline-flex flex-column align-items-center gap-1 position-relative justify-content-center`}
                      role="button"
                      onClick={() => openAccountDetail()}
                    >
                      <div className="d-inline-flex align-items-center gap-2">
                        <UserIcon color="#000000" />
                        <span
                          className={`${styles.supportText} d-inline-flex text-black`}
                        >
                          Account
                        </span>
                      </div>
                      {userInfo?.name !== "" && (
                        <span className={`${styles.userName} d-inline-flex`}>
                          {userInfo.name}
                        </span>
                      )}
                      {accountOptn === true && (
                        <div
                          className={`${styles.userAccountDrop} position-absolute col-12`}
                          onClick={(e) => e.preventDefault()}
                        >
                          <span
                            role="button"
                            className={`${styles.accountOption} col-12 d-inline-flex align-items-center`}
                            onClick={() => navigate("/my-account")}
                          >
                            My Account
                          </span>
                          <span
                            role="button"
                            className={`${styles.accountOption} col-12 d-inline-flex align-items-center`}
                            onClick={() => navigate("/my-orders")}
                          >
                            My Orders
                          </span>
                          <span
                            role="button"
                            className={`${styles.accountOption} col-12 d-inline-flex align-items-center`}
                            onClick={() => navigate("/my-address")}
                          >
                            My Address
                          </span>
                          <span
                            role="button"
                            onClick={() => userLoggedOut()}
                            className={`${styles.accountOption} col-12 d-inline-flex align-items-center`}
                          >
                            Logged Out
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className={`${styles.supportDrop} d-inline-flex d-inline-flex align-items-center gap-2 position-relative`}
                      onClick={() => setLoginPop(true)}
                      role="button"
                    >
                      <UserIcon color="#000000" />
                      <span
                        className={`${styles.supportText} d-none text-black d-md-flex`}
                      >
                        Account
                      </span>
                    </div>
                  )}
                  {/* cart */}
                  <div
                    className={`${styles.supportDrop} d-inline-flex d-inline-flex align-items-center gap-2 position-relative`}
                    role="button"
                    onClick={() => setCartPop(true)}
                  >
                    <span className="position-relative d-inline-flex">
                      <CartIcon color="#000000" />
                      {appData?.appData?.cartCount > 0 && (
                        <span
                          className={`${styles.cartCount} position-absolute d-inline-flex align-items-center`}
                        >
                          {appData?.appData?.cartCount}
                        </span>
                      )}
                    </span>
                    <span
                      className={`${styles.supportText} d-none text-black d-md-flex`}
                    >
                      Cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {loginPop === true && <LoginPopup setLoginPop={setLoginPop} />}
          {cartPop === true && <CartAside setCartPop={setCartPop} />}
        </div>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};
