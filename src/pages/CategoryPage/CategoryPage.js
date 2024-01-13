import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import { AppNotification } from "../../utils/helper";

export const CategoryPage = () => {
    const locationState = useLocation();
    const ProductData = locationState?.state?.product;
    const navigate = useNavigate();

    const showProductDetail = (id) => {
        const payload = {
            product_id: id,
            company_id: enviroment.COMPANY_ID,
            store_id: enviroment.STORE_ID
        }
        ApiService.productDetails(payload).then((res) => {
            if(res.message === "Product Detail"){
                navigate('/product', {state: {product: res.payload}})
            }else{
                AppNotification('Error', 'Sorry, Product detail not found.', 'danger');     
            }
        }).catch((err) => {
            AppNotification('Error', 'Sorry, Product detail not found.', 'danger'); 
        });
    }
    return (
        <React.Fragment>
            <Header />
            <div className="col-12 d-inline-flex mt-5">
                <div className="container">
                    <div className={`d-inline-flex flex-wrap col-12 mb-3`}>
                        {ProductData?.length > 0 && ProductData?.map((item, index) => {
                            return (    
                                <React.Fragment key={index}>
                                    {item.name !== '' && 
                                        <div className="col-3 px-2 flex-shrink-0 mb-3" key={index}>
                                            <ProductCard item={item} index={index} />
                                        </div>
                                    }
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}