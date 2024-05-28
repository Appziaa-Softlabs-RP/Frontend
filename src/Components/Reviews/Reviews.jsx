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
            review: "Knickknack is the ultimate toy store! From Barbie to LEGO, they have it all. Friendly staff, eazy shopping, and quick delivery. Highly recommend for quality toys at great prices!"
        },
        {
            id: 2,
            name: "Nisha Rawat",
            date: "1 day ago",
            image: "https://lh3.googleusercontent.com/a/ACg8ocKaL_Ty63cRYIBQH3t0WyWpl8zO8YfXeKdOl4AXfvi6ZBuc5Q=w36-h36-p-rp-mo-br100",
            rating: 5,
            review: "Knickknack is simply fantastic! I found all my favorite toy brands. The staff was incredibly welcoming and knowledgeable, making my shopp experience a breeze."
        },
        {
            id: 3,
            name: "kiran. rawat_194",
            date: "1 day ago",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjXhFLJ4YJvqfTseY6mP4jFhLFRz_-5Hy7VftJz8m7YQGIeLTHY=w36-h36-p-rp-mo-br100",
            rating: 5,
            review: "Knickknack is a dream come true for toy lovers like me! They've got an incredible selection of top brands like Hot Wheels and LEGO, all at prices that won't break the bank. The staff was super friendly and helpful, making my shopping experience a delight. Knickknack has definitely earned my loyalty as the go-to spot for quality toys!"
        },
        {
            id: 4,
            name: "Roman Khan",
            date: "1 day ago",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjWSGqej9V4kFr0axsItP5kXh2O2w4l_D0PqoscsWy8DR0fGWZs=w36-h36-p-rp-mo-br100",
            rating: 5,
            review: "Absolutely thrilled with my Knickknack experience! Found all my favorite brands like Barbie and LEGO at fantastic prices. The staff was super helpful, making my shopping trip a breeze. Online ordering was a snap, and my delivery arrived right on time. Knickknack is now my go-to for top-quality toys!"
        },
        {
            id: 5,
            name: "Zaid Khan",
            date: "1 day ago",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjVwBqMVy_pcC1Anf5NP2I0i0UT8lPfzQho172ODNXPdQsnLGQ9I=w36-h36-p-rp-mo-br100",
            rating: 5,
            review: "Absolutely thrilled with my Knickknack experience! Found all my favorite brands like Barbie and LEGO at fantastic prices. The staff was super helpful, making my shopping trip a breeze. Online ordering was a snap, and my delivery arrived right on time. Knickknack is now my go-to for top-quality toys!"
        },
        {
            id: 6,
            name: "avinash Jha",
            date: "1 day ago",
            image: "https://lh3.googleusercontent.com/a-/ALV-UjVCGA_5Ye68OglcKE_ClzE6i7ajS_93JV_IGLPlsWrjJQelpRwu=w36-h36-p-rp-mo-ba4-br100",
            rating: 5,
            review: "Knickknack is an absolute treasure trove for toy enthusiasts of all ages! As a parent, I'm always on the lookout for high-quality toys that spark creativity and keep my kids entertained for hours. Knickknack exceeded all my expectations with its extensive collection of branded toys, including favorites like Barbie, LEGO, Hot Wheels, and PlayShifu"
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
                }}><b>The KnickKnack Testimonials</b></p>
                <p className="text-sm mt-3" style={{
                    color: "#1a1a1a"
                }}>We&apos;re overwhelmed with these messages. <br /> Now, it's your turn to share. Leave a review and tell others about your experience with Knickknack.</p>
                <a href="https://g.page/r/CYF-YBA6SelvEBM/review" target="_blank">
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