import brandImage from "../../assets/images/brand.svg";
import brandInfoImage from "../../assets/images/brandInfo.svg";

export default function IntroBrand() {

    return <div className="container-fluid m-0 p-0 row">
        <div className={`col-12 col-md-6 w-full p-0 d-flex justify-content-center align-items-center`} style={{
            background: "#BD54A6"
        }}>
            <img src={brandInfoImage}
            style={{
                width: "60%",
                height: "60%",
            }}
                alt="Brand" />
        </div>
        <div className="col-12 col-md-6 w-full p-0">
            <img src={brandImage}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }}
                alt="Brand" />
        </div>
    </div>
}