import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import brandInfoImage from "../../assets/images/brandInfo.svg";
import { useAppStore } from "../../store";
import styles from "./brand.module.css";

export default function IntroBrand() {

    const [loading, setLoading] = useState(true);
    const promoBanners = useAppStore((state) => state.promoBanners);
    const offerBanners = useAppStore((state) => state.offerBanners);
    const [allBanner, setAllBanner] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setAllBanner(offerBanners);
        setLoading(false);
    }, [promoBanners, offerBanners]);


    return <div className="container-fluid m-0 p-0 row" style={{
        position: "relative",
        height: "600px",
    }}>
        <div className={`col-12 d-none d-md-flex col-md-6 w-full p-0 justify-content-center align-items-center`} style={{
            background: "#343434",
            height: "100%",
        }}>
            <img src={brandInfoImage}
                style={{
                    maxHeight: '300px',
                    height: "40%",
                }}
                alt="Brand" />
        </div>
        <div className="col-12 col-md-6 w-full d-flex align-items-center justify-content-center p-0">
            {allBanner?.length >0 && (
                    <div
                        className={styles.banner}
                    >
                        <img
                            src={allBanner[0]?.image}
                            alt={allBanner[0]?.name}
                            className={styles.brandImage}
                            style={{
                                width: "100%",
                            }}
                        />
                    </div>
            )}
            <div className="position-absolute d-md-none z-20">
                <img src={brandInfoImage}
                    style={{
                        width: "50%",
                        height: "50%",
                    }}
                    alt="Brand" />
            </div>
        </div>
    </div>
}