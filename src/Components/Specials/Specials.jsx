import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Specials.module.css";
import { specials } from "../../constants/data";
import { Link } from "react-router-dom";

export default function Specials() {

    const [verticalsWithCat, setVerticalsWithCat] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const storeId = process.env.REACT_APP_STORE_ID;

            // Fetch verticals and categories
            const verticalWithCatResponse = await axios.post(
                "https://rewardsplus.in/api/store/verticalWithCatList",
                { store_id: storeId }
            );
            const verticalsWithCat =
                verticalWithCatResponse?.data?.payload_verticalWithCatList?.vertical;

            setVerticalsWithCat(verticalsWithCat);
        }
        fetchData();
    }, []);

    return <div style={{
        fontSize: "16px"
    }}>
        {/* <!-- Popular Searches Section --> */}
        {
            verticalsWithCat?.length > 0 &&
            <div className="bg-light text-start">
                <div className="py-4 container" style={{
                    margin: "auto"
                }}>
                    <h2 className="h4 mb-2" style={{
                        fontWeight: "bold",
                        fontSize: "22px"
                    }}>Popular Searches</h2>
                    <p className="text-muted p-1">
                        {verticalsWithCat?.map((vertical, index) => (
                            vertical.catList?.map((cat, catIndex) => (
                                <>
                                    <Link to={`/store-product/${cat?.name_url}`}
                                        className={`${styles.anchorHoverEffect} ${(catIndex === 0 && index === 0) ? 'me-1' : 'm-1'}`}
                                        style={{
                                            textDecoration: "none",
                                        }}
                                        key={catIndex}>
                                        {cat?.name}
                                    </Link>
                                    {
                                        index === verticalsWithCat.length - 1 && catIndex === vertical.catList.length - 1 ? "" : "|"
                                    }
                                </>
                            ))
                        ))}
                    </p>
                </div>
            </div>
        }

        {/* <!-- Shop by Breed Section --> */}
        {
            specials?.topBrands.length > 0 &&
            <div className="bg-white">
                <div className="py-4 container" style={{
                    margin: "auto"
                }}>
                    <h2 className="h4 mb-2" style={{
                        fontWeight: "bold",
                        fontSize: "22px"
                    }}>Popular Brands</h2>
                    <p className="text-muted p-1">
                        {specials?.topBrands.map((brand, index) => (
                            <>
                                <Link to={brand.url}
                                    className={` ${styles.anchorHoverEffect}  ${index === 0 ? 'me-1' : 'm-1'}`}
                                    style={{
                                        textDecoration: "none",
                                    }}
                                    key={index}>
                                    {brand.name}
                                </Link>
                                {index === specials?.topBrands.length - 1 ? "" : "|"}
                            </>
                        ))}
                    </p>
                </div>
            </div>
        }

        {/* <!-- Main Content --> */}
        <div className="bg-light">
            <main className="py-4 container text-start"
                style={{
                    margin: "auto"
                }}
            >
                <h1 className="mb-2"
                    style={{
                        fontWeight: "bold",
                        fontSize: "28px"
                    }}
                >
                    {specials?.mainHeading}
                </h1>
                <p className="mb-5 p-1" style={{
                    fontSize: "16px"
                }}>
                    {specials?.mainHeadingDescription}
                </p>
                <h2 className="h3 mb-2"
                    style={{
                        fontWeight: "bold",
                        fontSize: "22px"
                    }}
                >
                    {specials?.subHeading}
                </h2>
                <ul style={{
                    padding: "0px 1rem",
                }}>
                    {
                        specials?.subHeadingImpPoints?.map((point, index) => (
                            <li className="mb-3"
                                key={index}
                                style={{
                                    fontSize: "16px"
                                }}>
                                <span style={{
                                    fontWeight: "bold"
                                }}>
                                    {point?.heading}
                                    </span>
                                    {point?.description}
                            </li>
                        ))}
                </ul>
            </main>
        </div>
    </div >
}