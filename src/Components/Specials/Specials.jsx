import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Specials.module.css";

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
        fontSize: "16px",
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
                    Kandavika, the proud official franchisee partner of the legendary Chaina Ram Sindhi Halwai
                </h1>
                <p className="mb-5 p-1" style={{
                    fontSize: "16px"
                }}>
                    Welcome to Kandavika, the proud official franchisee partner of the legendary Chaina Ram Sindhi Halwai, a name synonymous with authentic Indian sweets for over a century. Known for its timeless recipes and commitment to quality, Chaina Ram Sindhi Halwai has delighted generations with its signature sweets, prepared using the finest ingredients and the purest Desi Ghee. At Kandavika, we carry forward this rich tradition with a dedication to offering you the same unmatched taste and freshness that has made Chaina Ram a household name.
                    <br />
                    <br />
                    Our outlets, located in the heart of South Delhi—Greater Kailash 2 (GK 2) and East of Kailash—bring you a wide range of delectable sweets and snacks. From the ever-popular Sevpak and Karachi Halwa to festive favorites like Ghevar and timeless classics such as Gulab Jamun, every product is handcrafted to perfection, ensuring that each bite delivers an authentic, heartwarming experience.
                    <br />
                    <br />
                    We believe that sweets are more than just food—they are a part of every celebration, memory, and special moment. That's why we ensure that all our sweets and namkeens are made with love and care, staying true to traditional methods while maintaining the highest standards of hygiene and quality.
                    <br />
                    <br />
                    Beyond our physical outlets, we also offer the convenience of online ordering through our portal, making it easier than ever to enjoy our delicacies from the comfort of your home. Whether you are hosting a special occasion, gifting loved ones, or simply indulging in a sweet treat, Kandavika is here to make every moment special.
                    <br />
                    <br />
                    Join us in celebrating the timeless art of Indian sweets, and discover why Chaina Ram Sindhi Halwai continues to be a favorite across generations.
                </p>
            </main>
        </div>
    </div >
}