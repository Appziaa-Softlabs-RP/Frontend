import React, {useState} from "react";
import styles from './ProductPage.module.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { PageHeader } from "../../Components/PageHeader/PageHeader";

export const ProductPage = () => {
    const [productTitle, setProductTitle] = useState('');
    return (
        <React.Fragment>
            <div className="d-inline-flex flex-column col-12"></div>
            <PageHeader title={productTitle} />
            <div className="col-12 d-inline-block">
                <OwlCarousel className={`${styles.bannerContainer} col-12 d-inline-flex pb-4 owl-theme`} margin={0} loop dots>
                    <div className={`${styles.item} col-12 d-inline-block`}>
                        <img src="" alt="" className="object-fit-cover col-12 d-inline-block" />
                    </div>
                </OwlCarousel>
            </div>
            <div className="d-inline-flex align-items-stretch col-12 position-fixed bottom-0 start-0"></div>
        </React.Fragment>
    )
}