import React, { useEffect, useState } from "react";
import styles from './Header.module.css';
import { MenuIcons, CartIcon, SupportIcon, MailIcon, UserIcon, SearchIcon, BackArrowIcon, DownArrowIcon } from "../siteIcons";
import siteLogo from '../../assets/images/site_logo.png';
import { enviroment } from "../../enviroment";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContextProvider";
import { Link } from "react-router-dom";
import { LoginPopup } from "../LoginPopup/LoginPopup";
import ReactOwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ApiService from "../../services/ApiService";
import { CartAside } from "../CartAside/CartAside";
import { AppNotification } from "../../utils/helper";

export const Header = ({setAsideOpen, asideOpen, setAllSubCat}) => {
    const [cartCount, setCartCount] = useState(0);
    const [searchProd, setSearchProd] = useState('');
    const [loginPop, setLoginPop] = useState(false);
    const [accountOptn, setAccountOptn] = useState(false);
    const [cartPop, setCartPop] = useState(false);
    const [menuList, setMenuList] = useState([]);
    const navigate = useNavigate();
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;

    let userInfo = '';
    const isJSON = (str) => {
        try {
            JSON.stringify(JSON.parse(str));
            return true;
        } catch (e) {
            return false;
        }
    }

    if (isJSON(appData)) {
        userInfo = appData?.appData?.user;
    } else {
        userInfo = appData?.appData?.user;
    }

    const openAsideMenu = () => {
        if(asideOpen === true){
            setAsideOpen(false);
        }else{
            setAsideOpen(true);
        }
    }

    const openCart = () => {
        navigate('/checkout')
    }

    const routeHome = () => {
        navigate('/');
    }

    const openAccountDetail = () => {
        if(accountOptn === true){
            setAccountOptn(false);
        }else{
            setAccountOptn(true);
        }
    }

    const showCategroryProd = (id,name) => {
        const payload = {
            store_id: enviroment.STORE_ID,
            category_id: id
        }
        let category = name?.replaceAll("[^A-Za-z0-9]","-");
        navigate(`/store-product/${category}`, {state: {payload: payload}});
    }

    const userLoggedOut = () => {
        appData.setAppData({ ...appData.appData, user: '', loggedIn: false });
        localStorage.removeItem('user');
        localStorage.removeItem('loggedIn');
        AppNotification('Logged Out', 'You have been successfully logged out.', 'success');
        navigate('/');
      };

    useEffect(() => {
        const payload = {
            store_id: enviroment.STORE_ID
        }
        ApiService.AllCategory(payload).then((res) => {
            let allCatList = [];
            let allSubCategory = res?.payload_verticalWithCatList?.vertical;
            allSubCategory.map((item) => {
                if(item?.catList?.length > 0){
                    item.catList.map((item) => {
                        allCatList.push(item);
                    })
                }
            });
            setMenuList(allSubCategory);
            setAllSubCat(allCatList);
        }).catch((err) => {
            
        });
    }, []);

    return (
        <React.Fragment>
            {windowWidth === "mobile" ? (
                <div className={`${styles.siteHeader} col-12 d-inline-flex flex-column gap-3`}>
                    <div className={`col-12 d-inline-flex align-items-center`}>
                        <span className={`${styles.menuIconBox} d-inline-flex align-items-center justify-content-center`} onClick={openAsideMenu}>
                            <MenuIcons color={enviroment.SECONDARY_COLOR} />
                        </span>
                        <span className={`${styles.siteLogoBox} d-inline-flex align-items-center justify-content-center m-auto`}>
                            <img src={siteLogo} alt="Logo" className="object-fit-contain" />
                        </span>
                        <span className={`${styles.cartIconBox} d-inline-flex align-items-center justify-content-center position-relative`} onClick={() => openCart()}>
                            <span className={`${styles.cartCount} position-absolute d-inline-flex align-items-center`}>{cartCount}</span>
                            <CartIcon color={enviroment.SECONDARY_COLOR} />
                        </span>
                    </div>
                    <div className="col-12 d-inline-flex position-relative px-3">
                        <input type="text" placeholder={enviroment.SEARCH_PLACEHOLDER} className={`${styles.searchProdInput} col-12 d-inline-block`} value={searchProd} onChange={(e) => setSearchProd(e.target.value)} />
                    </div>
                </div>
            ): windowWidth === "desktop" ? (
                <div className="col-12 d-inline-flex flex-column">
                    <ReactOwlCarousel className={`${styles.topHeaderSale} col-12 owl-theme`} margin={0} items={1} loop={true} dots={false} animateOut='slideOutUp' animateIn='slideInUp' autoPlay={true}>
                        <div className={`col-12 d-inline-flex align-items-center justify-content-center`}>
                            <span className={`d-inline-block text-decoration-none ${styles.dealsLink}`} title="Superdeals">Shipping Across India.</span>
                        </div>
                        <div className={`col-12 d-inline-flex align-items-center justify-content-center`}>
                            <span className={`d-inline-block text-decoration-none ${styles.dealsLink}`} title="Superdeals">Shipping Across India.</span>
                        </div>
                    </ReactOwlCarousel>
                    <div className={`${styles.headerRow} col-12 d-inline-flex align-items-center`}>
                        <div className="container h-100 d-flex align-items-stretch">
                            <div className={`${styles.headerInnerRow} col-12 d-inline-flex align-items-stretch gap-3`}>
                                <span className={`${styles.siteLogoBox} d-inline-flex align-items-center justify-content-center col-2`} role="button" onClick={() => routeHome()}>
                                    <img src={siteLogo} alt="Logo" className="object-fit-contain" />
                                </span>
                                <div className={`d-inline-flex col-6 position-relative align-items-center`}>
                                    <span className={`${styles.searchIcon} position-absolute top-0 bottom-0 m-auto start-0 ms-3 d-inline-flex align-items-center`}><SearchIcon color="#000" /></span>
                                    <input type="search" className={`${styles.inputSearch} d-inline-flex ps-5 col-12 pe-3`}/>
                                </div>
                                <div className="d-inline-flex align-items-stretch justify-content-end gap-5">
                                    <div className={`${styles.supportDrop} d-inline-flex d-inline-flex align-items-center gap-2 position-relative`}  role="button">
                                        <SupportIcon color="#FFF"/>
                                        <span className={`${styles.supportText} d-inline-flex`}>Support</span>
                                        <div className={`${styles.supportDropDown} position-absolute d-inline-block`}>
                                            <div className={`${styles.timingPhoneBox} d-inline-flex col-12 align-items-center gap-3`}>
                                                <SupportIcon color="#000"/>
                                                <div className="d-inline-flex flex-column">
                                                    <label className={`${styles.supportTimings} d-inline-block col-12 p-0 text-center`}>7 days, 9AM to 9PM</label>
                                                    <Link href="tel:+919999756468"className={`${styles.supportPhoneNumber} text-decoration-none d-inline-block col-12 p-0 text-center`}>{enviroment.PHONE_NUMBER}</Link>
                                                </div>
                                            </div>
                                            <div className={`${styles.mailtoBox} text-decoration-none d-inline-flex align-items-center gap-3 col-12`}>
                                                <MailIcon color="#000"/>
                                                <Link href={`mailto:${enviroment.EMAIL_ADDRESS}`} className={`${styles.mailtoEmail} d-inline-block text-decoration-none`}>{enviroment.EMAIL_ADDRESS}</Link>
                                            </div>
                                            <div className={`${styles.orderTrackLinks} d-none justify-content-between align-items-center col-12 p-0`}>
                                                <Link className={`${styles.supportLinks} text-decoration-none d-inline-flex`}>Chat With Us</Link>
                                                <span className={`${styles.dotSymbol} d-inline-flex`}>&bull;</span>
                                                <Link className={`${styles.supportLinks} text-decoration-none d-inline-flex`}>FAQ’s</Link>
                                                <span className={`${styles.dotSymbol} d-inline-flex`}>&bull;</span>
                                                <Link className={`${styles.supportLinks} text-decoration-none d-inline-flex`}>Track Order</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {userInfo && userInfo?.customer_id !== '' ? (
                                        <div className={`${styles.supportDrop} d-inline-flex d-inline-flex align-items-center gap-2 position-relative`} role="button" onClick={() => openAccountDetail()}>
                                            <UserIcon color="#FFF"/>
                                            <span className={`${styles.supportText} d-inline-flex`}>Account</span>
                                            {accountOptn === true &&
                                                <div className={`${styles.userAccountDrop} position-absolute col-12`} onClick={(e) => e.preventDefault()}>
                                                    <span role="button" className={`${styles.accountOption} col-12 d-inline-flex align-items-center`} onClick={() => navigate('/my-account')}>My Account</span>
                                                    <span role="button" className={`${styles.accountOption} col-12 d-inline-flex align-items-center`} onClick={() => navigate('/my-orders')}>My Orders</span>
                                                    <span role="button" className={`${styles.accountOption} col-12 d-inline-flex align-items-center`} onClick={() => navigate('/my-address')}>My Address</span>
                                                    <span role="button" onClick={() => userLoggedOut()} className={`${styles.accountOption} col-12 d-inline-flex align-items-center`}>Logged Out</span>
                                                </div>
                                            }
                                        </div>
                                    ) : (
                                        <div className={`${styles.supportDrop} d-inline-flex d-inline-flex align-items-center gap-2 position-relative`} onClick={() => setLoginPop(true)} role="button">
                                            <UserIcon color="#FFF"/>
                                            <span className={`${styles.supportText} d-inline-flex`}>Account</span>
                                        </div>
                                    )}
                                    <div className={`${styles.supportDrop} d-inline-flex d-inline-flex align-items-center gap-2 position-relative`} role="button" onClick={() => setCartPop(true)}>
                                        <CartIcon color="#FFF"/>
                                        <span className={`${styles.supportText} d-inline-flex`}>Cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.headerNavList} col-12 d-inline-flex align-items-center position-relative`}>
                        <div className="container">
                            <div className={`${styles.headerMenuRow} d-inline-flex justify-content-between align-items-stretch col-12`}>
                                {menuList.length > 0 && menuList.map((item, index) => {
                                return (
                                    <div className={`${styles.headerNavBox} position-relative d-inline-flex align-items-center px-3`} key={index}>
                                    <span className={`${styles.menuName} d-inline-flex align-items-center gap-2`}>{item.name} <BackArrowIcon color="#000" role="button" /></span>
                                    {item.catList?.length > 0 &&
                                        <div className={`${styles.SubMenuList} d-inline-flex flex-column gap-1 position-absolute`}>
                                        {item.catList.map((subNme, subIdx) => {
                                            return (
                                            <span role="button" key={subIdx} className={`${styles.subMenuName} col-12 align-items-center px-3 d-inline-flex py-2`} onClick={() => showCategroryProd(subNme.category_id, subNme.name)}>{subNme.name}</span>
                                            )
                                        })}
                                        </div>
                                    }
                                    </div>
                                )
                                })}
                            </div>
                        </div>
                    </div>
                    {loginPop === true &&
                        <LoginPopup setLoginPop={setLoginPop} />
                    }
                    {cartPop === true &&
                        <CartAside setCartPop={setCartPop} />
                    }
                </div>
      ) : (<></>)}
    </React.Fragment>
  )
}