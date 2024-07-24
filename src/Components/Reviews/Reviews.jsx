import ReactOwlCarousel from "react-owl-carousel";
import styles from "./Review.module.css";
import { useApp } from "../../context/AppContextProvider";
import { useState } from "react";

export default function Reviews() {
    const appData = useApp();

    const settings = {
        items: 3, // Number of items to display on desktop by default
        margin: 10,
        dots: false,
        loop: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            300: {
                items: 1.01,
            },
            380: {
                items: 1.08,
            },
            400: {
                items: 1.1,
            },
            460: {
                items: 1.1,
            },
            510: {
                items: 1.2,
            },
            550: {
                items: 1.3,
            },
            620: {
                items: 1.7
            },
            700: {
                items: 1,
            },
            800: {
                items: 1.3,
            },
            900: {
                items: 1.7,
            },
            1000: {
                items: 1.8,
            },
            1100: {
                items: 2.3,
            },
            1200: {
                items: 2.5,
            },
            1300: {
                items: 2.7,
            },
            1400: {
                items: 3,
            }
        },
    };

    const reviews = [
        {
            id: 1,
            name: "kashif kamran",
            date: "a year ago",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjWikNpdMSwoHlUH64J3KEHqY2-3gOSsczlT3JE8aTg52x9XF4Pz=w72-h72-p-rp-mo-ba3-br100",
            rating: 5,
            review: `I visited Montbold last week and I was very impressed by their selection and quality of bags. They had a variety of styles, colors and sizes to suit every occasion and budget.
The staff was friendly and helpful, and they offered me a discount on my purchase. I love my new bag and I would definitely recommend Bag store to anyone looking for a great deal on bags. ⭐⭐⭐⭐⭐`
        },
        {
            id: 2,
            name: "Md Amir",
            date: "11 months ago",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjVNXbnKrPJh6qMB4fUYIPekK07lteW9fM6k8d-TO9-G637csPXn=w72-h72-p-rp-mo-br100",
            rating: 5,
            review: `I recently had the pleasure of purchasing bags from this incredible manufacturing company, and I must say, I am thoroughly impressed with the quality and service I received. From start to finish, my experience with this company has been exceptional.`
        },
        {
            id: 3,
            name: "Asha Pandey",
            date: "a year ago",
            image: "https://lh3.googleusercontent.com/a/ACg8ocIlP2BV_zznvFA-_bd-CnDxV4wVSoL_8gxD3nDf0SPf_ILXgQ=w72-h72-p-rp-mo-br100",
            rating: 5,
            review: `Montbold bags are simply fantastic! The craftsmanship is exceptional, and they never compromise on quality. I highly recommend them for anyone in need of a reliable bag. #QualityMatters`
        },
        {
            id: 5,
            name: "Arham Javed",
            date: "a year ago",
            image: "https://lh3.googleusercontent.com/a/ACg8ocKMt3DuMigU5nvkDFSmi0wW_NiETR8ltyFsDUhnkNepkFzSww=w72-h72-p-rp-mo-br100",
            rating: 5,
            review: `Montbold bags are very convenient. It can be used anywhere. There are multiple varieties. They are extremely comfortable, affordable and easy to use. Superb products..`
        },
        {
            id: 6,
            name: "Sahil Dhawan",
            date: "a year ago",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjUTjt6dYcqIs6nduycOaeuLS0K8uocBtY6ecpk8D9fNjMr5_Cs=w72-h72-p-rp-mo-br100",
            rating: 5,
            review: `Montbold bags are the epitome of elegance. Their timeless designs add a touch of class to any outfit. I feel like a fashion icon with their bags! #TimelessBeauty #FashionElegance`
        },
        {
            id: 7,
            name: "INDIAN RAILWAY 4U",
            date: "a year ago",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjW8LlHGEGw6VKcwex3ZUedP0ic_oFwIzy1tV7POByoDftzIr0Mt=w72-h72-p-rp-mo-br100",
            rating: 5,
            review: `Montbold bags are a great investment. I've been using mine for months, and it still looks brand new. Worth every penny! #LongLastingQuality #SmartBuy`
        },
        {
            id: 8,
            name: "Dinesh Pandey",
            date: "a year ago",
            image: "https://lh3.googleusercontent.com/a/ACg8ocK1xgB_0Hjq5yVusNo-wZVa_faONy6tgfV_q5W6_ASUF9hLyQ=w72-h72-p-rp-mo-br100",
            rating: 5,
            review: `I can't express how much I adore Montbold bags! They have a wide range of options that cater to different tastes. Their attention to detail is commendable. #FashionistaApproved`
        },
    ];

    const ShowReview = ({ review }) => {
        const [showMore, setShowMore] = useState(false);

        if (showMore) {
            return <div style={{
                maxHeight: "200px",
                overflow: "auto"
            }}>
                <p className="mb-0">{review}</p>
                <button onClick={() => setShowMore(false)} className="text-sm text-primary" style={{ background: "none", border: "none" }}>Show Less</button>
            </div>
        } else {
            return <>
                <p className="mb-0">{review.length > 200 ? review.slice(0, 200) + "..." : review}</p>
                {review.length > 200 &&
                    <button onClick={() => setShowMore(true)} className="text-sm text-primary" style={{
                        background: "none",
                        border: "none",
                        width: 'fit-content'
                    }}>Show More</button>}
            </>
        }
    }

    return <div style={{
        display: "flex",
        justifyContent: "center",
        width: "100%"
    }}>
        <div className={`${styles.sliderContainer}`}>

            <div className="col-md-3" style={{
                minWidth: "300px",
            }} >
                <img src="/review/Group.png" alt="rewview" style={{
                    width: "60px",
                    marginBottom: "-20px"
                }} />
                <p style={{
                    fontSize: "1.125rem"
                }}><b>The {process.env.REACT_APP_BUSINESS_NAME} Testimonials</b></p>
                <p className="text-sm mt-3" style={{
                    color: "#1a1a1a"
                }}>We&apos;re overwhelmed with these messages. <br /> Now, it's your turn to share. Leave a review and tell others about your experience with {process.env.REACT_APP_BUSINESS_NAME}.</p>
                <a href="https://g.page/r/CQOe4UmBZqDbEBM/review" rel='noreferrer' target="_blank">
                    <button className={`${styles.reviewBtn} text-white py-2 px-3 mt-3 mb-2`}>Write a Review</button>
                </a>
            </div>

            <div className={`${styles.carousalBody}`} style={{
                position: "relative",
                overflow: "hidden",
            }}>
                <ReactOwlCarousel className={`${styles.brandSilder} brandSilder s-theme`}  {...settings}>
                    {reviews.map((review) => (
                        <div key={review.id} className={`${styles.sliderItem} p-3 rounded-md`} style={{
                            color: "#291845",
                            borderRadius: "5px"
                        }}>
                            <div className="d-flex justify-content-between" style={{ alignItems: "center" }}>
                                <div className="d-flex" style={{ alignItems: "center" }}>
                                    <img src={review.image} alt="rewview" style={{ width: "50px" }} />
                                    <div className="px-2">
                                        <p className="mb-0"><b>{review.name}</b></p>
                                        <p className="mb-0">{review.date}</p>
                                    </div>
                                </div>
                                <img src="/review/gimg.png" alt="rewview" style={{ maxWidth: "30px" }} />
                            </div>
                            <div className="d-flex my-2">
                                {Array(review.rating).fill(0).map((_, index) => (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="orange" class="bi bi-star-fill" viewBox="0 0 20 20">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>))}
                            </div>
                            <p className="text-sm" style={{ display: "flex", flexDirection: 'column' }}>
                                <ShowReview review={review?.review} />
                            </p>
                        </div>
                    ))}
                </ReactOwlCarousel>
            </div>
        </div>
    </div>
}