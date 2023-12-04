import React, {useState} from "react";
import styles from './Home.module.css';
import { Header } from "../../Components/Header/Header";
import { Aside } from "../../Components/Aside/Aside";
import { ShopAge } from "../../Components/ShopAge/ShopAge";
import { CategoryShop } from "../../Components/CategoryShop/CategoryShop";
import { PromoBanner } from "../../Components/PromoBanner/PromoBanner";
import { HeroBanner } from "../../Components/HeroBanner/HeroBanner";
import { BrandFocus } from "../../Components/BrandFocus/BrandFocus";
import { Footer } from "../../Components/Footer/Footer";

export const Home = () => {
    const [asideOpen, setAsideOpen] = useState(false);
    return (
        <React.Fragment>
            <div className="col-12 d-inline-flex flex-column">
                <Header asideOpen={asideOpen} setAsideOpen={setAsideOpen}/>
                <Aside asideOpen={asideOpen} setAsideOpen={setAsideOpen}/>
                <HeroBanner/>
                <ShopAge />
                <CategoryShop />
                <PromoBanner />
                <BrandFocus/>
                <Footer />
            </div>
        </React.Fragment>
    )
}