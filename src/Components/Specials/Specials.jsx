import axios from "axios";
import { useEffect, useState } from "react";

export default function Specials() {

    const [verticalsWithCat, setVerticalsWithCat] = useState([]);

    const topBrands = [
        {
            "name": "Hot Wheels",
            "url": "/store-product/brand/2300"
        },
        {
            "name": "Nerf",
            "url": "/store-product/brand/2497"
        },
        {
            "name": "Barbie",
            "url": "/store-product/brand/2526"
        },
        {
            "name": "Lego",
            "url": "/store-product/brand/2507"
        },
        {
            "name": "Play Shifu",
            "url": "/store-product/brand/2538"
        },
        {
            "name": "Smartivity",
            "url": "/store-product/brand/2583"
        },
        {
            "name": "Miko",
            "url": "/store-product/brand/3416"
        },
        {
            "name": "Funskool",
            "url": "/store-product/brand/2491"
        },
        {
            "name": "Sameo",
            "url": "/store-product/brand/2815"
        },
        {
            "name": "Hasbro",
            "url": "/store-product/brand/2522"
        },
        {
            "name": "Giggles",
            "url": "/store-product/brand/2758"
        },
        {
            "name": "Majorette",
            "url": "/store-product/brand/2509"
        },
        {
            "name": "Jada Toys",
            "url": "/store-product/brand/2492"
        },
    ];

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
                    <h2 className="h4 mb-4" style={{
                        fontWeight: "bold",
                        fontSize: "22px"
                    }}>POPULAR SEARCHES</h2>
                    <p className="text-muted p-1">
                        {verticalsWithCat?.map((vertical, index) => (
                            vertical.catList?.map((cat, catIndex) => (
                                <a href={`/store-product/${cat?.name_url}`}
                                    className={`text-muted ${(catIndex === 0 && index === 0) ? 'me-1' : 'm-1'}`}
                                    style={{
                                        textDecoration: "none",
                                    }}
                                    key={catIndex}>
                                    {cat?.name} {
                                        index === verticalsWithCat.length - 1 && catIndex === vertical.catList.length - 1 ? "" : "|"
                                    }
                                </a>
                            ))
                        ))}
                    </p>
                </div>
            </div>
        }

        {/* <!-- Shop by Breed Section --> */}
        {/* <div className="bg-white">
            <div className="py-4 container" style={{
                margin: "auto"
            }}>
                <h2 className="h4 mb-4" style={{
                    fontWeight: "bold",
                    fontSize: "22px"
                }}>POPULAR TOY BRANDS</h2>
                <p className="text-muted p-1">
                    {topBrands.map((brand, index) => (
                        <a href={brand.url}
                            className={`text-muted ${index === 0 ? 'me-1' : 'm-1'}`}
                            style={{
                                textDecoration: "none",
                            }}
                            key={index}>
                            {brand.name} {index === topBrands.length - 1 ? "" : "|"}
                        </a>
                    ))}
                </p>
            </div>
        </div> */}

        {/* <!-- Main Content --> */}
        <div className="bg-light">
            <main className="py-4 container text-start"
                style={{
                    margin: "auto"
                }}
            >
                <h1 className=""
                    style={{
                        fontWeight: "bold",
                        fontSize: "20px"
                    }}
                >
                    {process.env.REACT_APP_BUSINESS_NAME}: Crafting Excellence in Premium Bags and Corporate Gifting Solutions

                </h1>
                <p className="mb-2" style={{
                    fontSize: "16px"
                }}>
                    {process.env.REACT_APP_BUSINESS_NAME}, excels in crafting premium bags and corporate gifting solutions. With over two decades of experience, we offer a range of products, including laptop bags, sling bags, handbags, tote bags, wallets, and purses. Our meticulous craftsmanship and high-quality materials ensure durability and style in every piece.
                </p>
                <p className="mb-5" style={{
                    fontSize: "16px"
                }}>
                    We are trusted by leading brands such as LIC, PhonePe, LG, L&T, Delhivery, Airtel, and Bata. Montbold's corporate gifting solutions are tailored to reflect your brand&apos;s values and make a lasting impression. Choose Montbold for unparalleled quality, innovation, and sustainability.
                </p>
            </main>
        </div>
    </div >
}