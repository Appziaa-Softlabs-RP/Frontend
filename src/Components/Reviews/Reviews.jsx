import { useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { reviews } from "../../constants/data";
import styles from "./Review.module.css";

export default function Reviews() {

    const settings = {
        margin: 20, // Adjusted for better spacing
        dots: false,
        loop: false,
        nav: true,
        responsive: {
            0: { items: 1 },
            400: { items: 1.5 },
            500: { items: 1.8 },
            700: { items: 2 },
            750: { items: 2.3 },
            900: { items: 3 },
            1200: { items: 4 }
        },
    };

    const ShowReview = ({ review }) => {
        const [showMore, setShowMore] = useState(false);

        if (showMore) {
            return (
                <div style={{ maxHeight: "200px", overflow: "auto", paddingRight: "20px" }}>
                    <p className="mb-0">{review}</p>
                    <button onClick={() => setShowMore(false)} className="text-sm text-primary" style={{ background: "none", border: "none" }}>Show Less</button>
                </div>
            );
        } else {
            return (
                <>
                    <p className="mb-0">{review.length > 200 ? review.slice(0, 200) + "..." : review}</p>
                    {review.length > 200 &&
                        <button onClick={() => setShowMore(true)} className="text-sm text-primary" style={{ background: "none", border: "none", width: 'fit-content' }}>Show More</button>}
                </>
            );
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }} className={styles.mainContainerSlider}>
            <div className={styles.sliderContainer}>
                <div className="titlesWrapper w-100">
                    <h5
                        className={`subTitleLarge col-12`}
                    >
                        Testimonials
                    </h5>
                </div>
                <div className={styles.carousalBody}>
                    <ReactOwlCarousel className={`${styles.brandSilder}o`} {...settings}>
                        {reviews.map((review) => (
                            <div key={review.id} className={styles.sliderItem}>
                                <div className="d-flex gap-2 align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src={review.image} alt="review" style={{ width: "50px" }} />
                                        <div className="px-2">
                                            <p className="mb-0"><b>{review.name}</b></p>
                                            <p className="mb-0">{review.date}</p>
                                        </div>
                                    </div>
                                    <img src="/review/gimg.png" alt="review" style={{ maxWidth: "30px" }} />
                                </div>
                                <div className="d-flex my-2">
                                    {Array(review.rating).fill(0).map((_, index) => (
                                        <p key={index} style={{ margin: '2px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </p>
                                    ))}
                                </div>
                                <p className="text-sm" style={{ display: "flex", flexDirection: 'column' }}>
                                    <ShowReview review={review?.review} />
                                </p>
                            </div>
                        ))}
                    </ReactOwlCarousel>
                </div>
                <div className="d-flex gap-2 align-items-center mx-auto bg-white p-2 px-4 rounded border-top border-5 border-success" style={{width: 'fit-content'}}>
                    <img src="/review/gimg.png" alt="review" style={{ maxWidth: "30px" }} className="" />
                    <p className="fs-5 fw-bold m-0" style={{
                        color: 'goldenrod'
                    }}>4.8</p>
                    <p className="d-flex m-0 align-items-center gap-1 mb-1">
                    {Array(5).fill(0).map((_, index) => (
                        <p key={index} className="m-0 p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </p>
                    ))}
                    </p>
                </div>
            </div>
        </div>
    );
}