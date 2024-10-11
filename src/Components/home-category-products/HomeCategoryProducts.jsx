import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { useEffect, useState } from "react";
import ReactOwlCarousel from 'react-owl-carousel';
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import { ProductCard } from "../ProductCard/ProductCard";

export const HomeCategories = () => {
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;
    const [categoriesData, setCategoriesData] = useState([]);
    const isMobile = windowWidth === "mobile";

    useEffect(() => {
        const payload = {
            company_id: parseInt(enviroment.COMPANY_ID),
        }
        ApiService.homeCategories(payload).then((res) => {
            setCategoriesData(res.payload);
        }).catch((err) => {

        });
    }, []);
    return (
        categoriesData?.length > 0 &&
        categoriesData.map((category, index) => (
            <div className='border-section'>
                <div className={`col-12 d-inline-flex`}>
                    <div className={`container-fluid`}>
                        <div className={`col-12 ${windowWidth === 'mobile' ? 'px-3' : 'm-0'} d-inline-flex flex-column`}>
                            <div className="titlesWrapper">
                                <h5
                                    className={`titleMainSmall col-12`}
                                >
                                    Deals for you
                                </h5>
                                <p
                                    className={`subTitleLarge col-12`}
                                >
                                    {category?.cname}
                                </p>
                            </div>
                            <ReactOwlCarousel
                                className="owl-theme"
                                margin={20}
                                dots={false}
                                items={isMobile ? 1 : 3}
                                loop={false}
                                nav={true}
                                stagePadding={isMobile ? 50 : 0}
                                responsive={{
                                    0: { items: 1 },
                                    768: { items: 2 },
                                    992: { items: 3 },
                                    1210: { items: 4 },
                                }}
                            >
                                {category?.products.map((item, index) => (
                                    <div
                                        key={index}
                                        className="item"
                                        style={{
                                            padding: "15px",
                                            transition: "transform 0.3s",
                                            cursor: "pointer",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "scale(1.05)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "scale(1)";
                                        }}
                                    >
                                        <ProductCard item={item} index={index} />
                                    </div>
                                ))}
                            </ReactOwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        ))

    )
}
