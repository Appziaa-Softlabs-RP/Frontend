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
        <div className="bg-white">
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
        </div>

        {/* <!-- Main Content --> */}
        <div className="bg-light">
            <main className="py-4 container text-start"
                style={{
                    margin: "auto"
                }}
            >
                <h1 className="mb-5"
                    style={{
                        fontWeight: "bold",
                        fontSize: "28px"
                    }}
                >
                    knickknack's Toy Store - India's most loved place to buy toys for children!
                </h1>
                <p className="lead mb-5 p-1">
                    Knickknack's Toy Store is renowned as India's favorite destination for purchasing children's toys. It offers a wide variety of high-quality, engaging, and fun toys that cater to kids of all ages. Parents and children alike love the store for its excellent customer service, diverse selection, and commitment to bringing joy to playtime.
                </p>
                <h2 className="h3 mb-4"
                    style={{
                        fontWeight: "bold",
                        fontSize: "22px"
                    }}
                >Why Knickknack's Toy Store?</h2>
                <ul>
                    <li className="lead mb-3">
                        <span style={{
                            fontWeight: "bold"
                        }}>Quality Assurance:</span> Our toys undergo rigorous testing to ensure they are safe, durable, and meet the highest quality standards.
                    </li>
                    <li className="lead mb-3">
                        <span style={{
                            fontWeight: "bold"
                        }}>Expertise:</span> Our team consists of toy enthusiasts and professionals who bring years of experience to provide the best play experiences for your children.
                    </li>
                    <li className="lead mb-3">
                        <span style={{
                            fontWeight: "bold"
                        }}>Innovative Solutions:</span> From interactive toys to educational games, we offer a wide selection of products designed to keep your kids engaged, learning, and having fun.
                    </li>
                    <li className="lead mb-3">
                        <span style={{
                            fontWeight: "bold"
                        }}>Customer Satisfaction:</span> Your satisfaction is our priority. We strive to provide exceptional service and support, ensuring that every shopping experience is enjoyable for both you and your children.
                    </li>
                    <li className="lead mb-3">
                        <span style={{
                            fontWeight: "bold"
                        }}>Convenience:</span> Shop online or visit our store by searching for a toy store near me. We offer the best toy solutions for your convenience.
                    </li>
                </ul>
            </main>
        </div>
    </div >
}