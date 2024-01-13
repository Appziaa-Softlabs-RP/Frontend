import React, {useState, useEffect} from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import styles from './LookingFor.module.css';

export const LookingFor = () => {
    const [shopNavList, setShopNavList] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const appData = useApp();
    let windowWidth = appData.appData.windowWidth;
    const subCatProduts = (id) => {

    }

    let MainNavArr = [];
    const readAllNav = (id) => {
        let navObj = {};
        const payload = {
            store_id: enviroment.STORE_ID,
            vertical_id: shopNavList[id].vertical_id
        }
        ApiService.StoreSubCategory(payload).then((res) => {
            if(res.message === "Fetch successfully."){
                navObj.subNav = res.payload_verticalByCategory;
                MainNavArr.push(navObj);
                let loopCount = shopNavList.length;
                id = id + 1;
                if(id !== loopCount){
                    readAllNav(id);
                }else{
                    setMenuList(MainNavArr);
                }
            }
        }).catch((err) => {
            
        });
    }

    useEffect(() => {
        const payload = {
            store_id: enviroment.STORE_ID
        };
        ApiService.StoreCategory(payload).then((res) => {
            setShopNavList(res?.payload_verticalList?.vertical);
        }).catch((err) => {
            
        });
    }, []);

    useEffect(() => {
        let loopCount = shopNavList.length;
        if(loopCount > 0){
            readAllNav(0);
        }
    }, [shopNavList]);

    return (
        <React.Fragment>
            {menuList?.length > 0 &&
                <div className={`${styles.shopAgeBox} px-3 col-12 d-inline-flex`}>
                    <div className={`${windowWidth === "mobile" && 'p-0'} container d-flex flex-column m-auto`}>
                        <h5 className={`${styles.categoryHeaderTitle} col-12 d-inline-flex justify-content-center`}>✨ What are you looking for? ✨</h5>
                        <div className="col-12 d-inline-flex">
                        <ReactOwlCarousel className={`carousel-looking-for col-12 d-inline-block owl-theme`} margin={10} loop={true} dots={false} items={8} stagePadding={0} nav={true}>
                            {menuList?.map((subCat, idx) => {
                                return(
                                    <React.Fragment key={idx}>
                                        {subCat?.subNav?.map((item, index) => {
                                            return (
                                                <div className={`${styles.thumbItem} col-12 d-inline-flex flex-column gap-2 mouse-cursor`} key={index} onClick={() => subCatProduts(item.category_id)}>
                                                    <img src={item?.image} alt={item?.name} className="object-fit-cover col-12 d-inline-block" />
                                                    <p className={`${styles.thumbName} text-truncate col-12 text-center mb-0`}>{item?.name}</p>
                                                </div>
                                            );
                                        })}
                                    </React.Fragment>
                                );
                            })}
                        </ReactOwlCarousel>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}