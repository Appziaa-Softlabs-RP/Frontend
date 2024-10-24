import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';
import OwlCarousel from 'react-owl-carousel';
import styles from './Review.module.css';

const testimonials = [
    {
        id: 1,
        name: 'Ritu Juneja',
        content: 'I would call your efforts public service. Getting the best eatables from the heart of Delhi to cater to our taste buds. Prompt delivery, always on time. Thank you so much. Appreciate your efforts.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Amit Sharma',
        content: 'Exceptional service and authentic flavors! The dishes truly capture the essence of Old Delhi. Fast delivery and great packaging.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Priya Gupta',
        content: 'A taste of home delivered to my doorstep. The quality and taste are unmatched. Highly recommend to anyone missing Delhi street food!',
        rating: 5,
    },
];

export default function Reviews() {
    const carouselRef = useRef(null); // Ref for the carousel

    const options = {
        items: 1,
        loop: true,
        nav: false, // Disable default navigation
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };

    return (
        <section className={styles.customerExperience}>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={10} lg={8} className='position-relative'>
                        <h2 className={`${styles.title} textSpecial`}>
                            <span className={styles.titleDark} style={{
                                textDecoration: 'underline',
                            }}>We Value</span>{' '}
                            <span className={styles.titleLight}>your feedback</span>
                        </h2>
                        <OwlCarousel ref={carouselRef} className="owl-theme" {...options}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className={styles.testimonialItem}>
                                    <div className={styles.testimonialContent}>
                                        <p>{testimonial.content}</p>
                                        <div style={{
                                            textAlign: 'center',
                                        }}>
                                            <h3 style={{
                                                fontSize: '16px'
                                            }}>{testimonial.name}</h3>
                                            <div className={styles.rating}>
                                                {[...Array(testimonial.rating)].map((_, index) => (
                                                    <StarFill key={index} className={styles.star} size={20} fill="#FFA500" color="#FFA500" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                        {/* Custom Navigation Buttons */}
                        <div className={styles.customNav}>
                            <button className={`${styles.navButton} ${styles.prev}`} onClick={() => carouselRef.current.prev()}>
                                ‹
                            </button>
                            <button className={`${styles.navButton} ${styles.next}`} onClick={() => carouselRef.current.next()}>
                                ›
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}