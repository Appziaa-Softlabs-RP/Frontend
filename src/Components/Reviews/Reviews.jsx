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
            500: {
                items: 1.3,
            },
            580: {
                items: 1.5,
            },
            620: {
                items: 2
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
                items: 2.5,
            },
            1100: {
                items: 3,
            },
        },
    };

    const reviews = [
        {
            id: 1,
            name: "Manav Verma",
            date: "1 day ago",
            image: "https://lh3.googleusercontent.com/a/ACg8ocJatwL8_irMwuyHBScTSXIWOA_NHugzs6gImgXAM5OmO4pq9Q=w36-h36-p-rp-mo-br100",
            rating: 5,
            review: "Tara Toys are built to last! My kids have been playing with their Tara Toy cars and trucks for years now, and they still look brand new. They're perfect for indoor or outdoor play, and they can withstand even the roughest toddler treatment. Plus, the variety of vehicles keeps them entertained for hours."
        },
        {
            id: 5,
            name: "Nishant",
            date: "1 day ago",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjXcEbhxDRL8VSSZc45WDOQ-vWvjRfIUDdKUahpo7QOGtWZ6455Y=w36-h36-p-rp-mo-br100",
            rating: 5,
            review: "Tara Toy is my go-to for preschool supplies! Their selection of educational toys is fantastic, with something for every age group and learning style. The sensory bins are a huge hit with my students, and the customer service is always top-notch."
        },
        {
            id: 6,
            name: "avinash Jha",
            date: "1 day ago",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjVCGA_5Ye68OglcKE_ClzE6i7ajS_93JV_IGLPlsWrjJQelpRwu=w36-h36-p-rp-mo-ba4-br100",
            rating: 5,
            review: "Tara Toy's soft play equipment is a lifesaver at my daycare! It's a safe and fun way for the little ones to burn energy. The shapes are easy to clean, and the variety keeps them entertained. Just wish there were a few more options for older toddlers."
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

            <div className="col-md-3">
                <img src="/review/Group.png" alt="" style={{
                    width: "60px",
                    marginBottom: "-20px"
                }} />
                <p style={{
                    fontSize: "1.125rem"
                }}><b>The TaraToy Testimonials</b></p>
                <p className="text-sm mt-3" style={{
                    color: "#1a1a1a"
                }}>We&apos;re overwhelmed with these messages. <br /> Now, it's your turn to share. Leave a review and tell others about your experience with TaraToy.</p>
                <a href="https://www.google.co.in/maps/place/Tara+Sales+Corporation/@28.6422231,77.1294355,13.03z/data=!4m18!1m9!3m8!1s0x390cfd416acaf655:0xc183af725fa98944!2sTara+Sales+Corporation!8m2!3d28.6458965!4d77.2032841!9m1!1b1!16s%2Fg%2F11cjp75xgv!3m7!1s0x390cfd416acaf655:0xc183af725fa98944!8m2!3d28.6458965!4d77.2032841!9m1!1b1!16s%2Fg%2F11cjp75xgv?entry=ttu" target="_blank" rel="noreferrer">
                    <button className="text-white py-2 px-3 mt-3 mb-2" style={{
                        background: "#cf102e",
                        border: "none",
                        borderRadius: "5px"
                    }}>Write a Review</button>
                </a>
            </div>


            <ReactOwlCarousel className={`${styles.brandSilder} brandSilder s-theme`} {...settings}>
                {reviews.map((review) => (
                    <div key={review.id} className={`${styles.sliderItem} p-3 rounded-md`} style={{
                        background: "#ebd4d4",
                        color: "#291845",
                        borderRadius: "5px"
                    }}>
                        <div className="d-flex justify-content-between" style={{ alignItems: "center" }}>
                            <div className="d-flex" style={{ alignItems: "center" }}>
                                <img src={review.image} alt="" style={{ width: "50px" }} />
                                <div className="px-2">
                                    <p className="mb-0"><b>{review.name}</b></p>
                                    <p className="mb-0">{review.date}</p>
                                </div>
                            </div>
                            <img src="/review/gimg.png" alt="" style={{ maxWidth: "30px" }} />
                        </div>
                        <div className="d-flex my-2">
                            {Array(review.rating).fill(0).map((_, index) => (
                                <img key={index} src="/review/star-solid.png" alt="" style={{ maxWidth: "30px" }} />
                            ))}
                        </div>
                        <p className="text-sm" style={{ display: "flex", flexDirection: 'column' }}>
                            <ShowReview review={review?.review} />
                        </p>
                    </div>
                ))}
            </ReactOwlCarousel>
        </div>
    </div>
}