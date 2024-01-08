import React, {useState, useEffect} from "react";
import styles from './Home.module.css';
import { Header } from "../../Components/Header/Header";
import { Aside } from "../../Components/Aside/Aside";
import { ShopAge } from "../../Components/ShopAge/ShopAge";
import { CategoryShop } from "../../Components/CategoryShop/CategoryShop";
import { PromoBanner } from "../../Components/PromoBanner/PromoBanner";
import { HeroBanner } from "../../Components/HeroBanner/HeroBanner";
import { BrandFocus } from "../../Components/BrandFocus/BrandFocus";
import { Footer } from "../../Components/Footer/Footer";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";

export const Home = () => {
    const [asideOpen, setAsideOpen] = useState(false);
    const [allBanner, setAllBanner] = useState([]);
    const [allPromoBanner, setAllPromoBanner] = useState([]);

    const fetchBanner = (payload) => {
        ApiService.banner(payload).then((res) => {
            if(res.message === "Fetch successfully."){
                setAllBanner(res?.payload_banner?.banner);
                setAllPromoBanner(res);
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    useEffect(() => {
        const payload = {
            store_id: enviroment.STORE_ID
        };
        fetchBanner(payload);
    }, []);
    return (
        <React.Fragment>
            <div className="col-12 d-inline-flex flex-column">
                <Header asideOpen={asideOpen} setAsideOpen={setAsideOpen}/>
                <Aside asideOpen={asideOpen} setAsideOpen={setAsideOpen}/>
                {allBanner.length > 0 &&
                    <HeroBanner allBanner={allBanner}/>}
                {/* <ShopAge /> */}
                <CategoryShop />
                {allPromoBanner?.payload_banner?.promobanner?.length > 0 && 
                    <PromoBanner allPromoBanner={allPromoBanner} type="Promo Banner" />
                }
                {allPromoBanner?.payload_banner?.offeroftheday?.length > 0 && 
                    <PromoBanner allPromoBanner={allPromoBanner} type="Offers" />
                }
                {/* <BrandFocus/> */}
                <Footer />
            </div>
        </React.Fragment>
    )
}