import brandImage from "../../assets/images/brand.svg";
import brandInfoImage from "../../assets/images/brandInfo.svg";
import styles from "./brand.module.css";

export default function IntroBrand() {

    return <div className="container-fluid m-0 p-0 row">
        <div className={`col-12 d-none d-md-flex col-md-6 w-full p-0 justify-content-center align-items-center`} style={{
            background: "#BD54A6"
        }}>
            <img src={brandInfoImage}
                style={{
                    width: "60%",
                    height: "60%",
                }}
                alt="Brand" />
        </div>
        <div className="col-12 col-md-6 w-full d-flex align-items-center justify-content-center p-0">
            <img src={brandImage}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
                className={styles.brandImage}
                alt="Brand" />
            <div className="position-absolute d-md-none z-20">
                <img src={brandInfoImage}
                    style={{
                        width: "70%",
                        height: "70%",
                    }}
                    alt="Brand" />
            </div>
        </div>
    </div>
}