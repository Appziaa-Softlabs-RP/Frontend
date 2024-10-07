import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import React, { useCallback, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useApp } from "../../context/AppContextProvider";
import ApiService from "../../services/ApiService";

export default function AddReview({ product_id, total_rating = null }) {
    const appData = useApp();
    const [hoveredStar, setHoveredStar] = useState(0);
    const [selectedStar, setSelectedStar] = useState(0);
    const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
    const [reviewText, setReviewText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const [userReviews, setUserReviews] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const getReviews = useCallback(() => {
        const payload = {
            product_id: product_id,
            limit: 10
        };
        ApiService.getReviews(payload)
            .then((res) => setUserReviews(res?.data || []))
            .catch((err) => console.error(err));
    }, [product_id]);

    const handleSubmit = () => {
        if (selectedStar && reviewText.trim() !== "") {
            const payload = {
                customer_id: userInfo.customer_id,
                product_id: product_id,
                rating: selectedStar,
                review: reviewText,
            };
            setLoading(true);
            // Make an API call to submit the review
            ApiService.submitReview(payload)
                .then((res) => {
                    if (res.message === "Review stored successfully") {
                        setIsReviewSubmitted(true);
                        setErrorMessage(""); // Clear any previous errors
                    } else {
                        setErrorMessage("Failed to submit review. Please try again.");
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setErrorMessage("An error occurred while submitting the review.");
                })
                .finally(() => {
                    setLoading(false);
                    getReviews();
                });
        } else {
            setErrorMessage("Please fill all fields.");
        }
    };

    useEffect(() => {
        getReviews();
        setUserInfo(appData.appData.user);
    }, [appData?.appData, getReviews]);

    if (!userInfo) {
        return null;
    }

    // Open/close modal
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    if (!userInfo) return null;

    return (
        <div className="container">
            <h2 className="m-0 text-center">Rating & Reviews</h2>
            {/* Total Rating Circle */}
            {
                (total_rating && total_rating > 0) &&
                <div className="text-center d-flex w-100 flex-column pt-3 gap-1">
                    <div>
                        <div style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "50%",
                            border: "2px solid black",
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto",
                            fontSize: "1rem",
                            fontWeight: "bold",
                        }}>
                            {total_rating}/5
                        </div>
                        {/* <div style={{ marginTop: "10px", color: "black", background:'#a7a5a5', padding: '5px', width: "fit-content"}} className='mx-auto rounded my-2 fw-bold text-white'>{getRatingMessage(total_rating)}</div> */}
                    </div>
                    {/* Show Reviews Button */}
                    <div className="text-center">
                        <button className="btn border-2 btn-sm border-dark" onClick={handleShow}>Show Reviews</button>
                    </div>
                </div>
            }

            {/* Add Review Section */}
            <div className="text-center mb-4 mt-3">
                <h2 style={{ color: "black" }}>Rate Your Experience</h2>
                <div className="d-flex justify-content-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            style={{
                                cursor: "pointer",
                                margin: "0 5px",
                                fill: selectedStar >= star || hoveredStar >= star ? "#ffc107" : "#ccc",
                            }}
                            width="30"
                            height="30"
                            onMouseOver={() => setHoveredStar(star)}
                            onMouseOut={() => setHoveredStar(0)}
                            onClick={() => {
                                if (!loading && !isReviewSubmitted) {
                                    setSelectedStar(star)
                                }
                            }
                            }
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    ))}
                </div>

                <textarea
                    className="form-control mb-3"
                    rows="3"
                    disabled={loading || isReviewSubmitted}
                    placeholder="Write your review..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    style={{ resize: "none" }}
                />

                <button
                    className="btn btn-danger"
                    disabled={!selectedStar || !reviewText.trim() || loading || isReviewSubmitted}
                    onClick={() => {
                        handleSubmit();
                    }}
                >
                    {
                        isReviewSubmitted ? "Review Submitted" : loading ? "Submitting..." : "Submit Review"
                    }
                </button>
                {(errorMessage && errorMessage !== '') && (
                    <div className="submitted-box text-center">
                        <div className="loader"></div>
                        <div className="success-message mt-3">{errorMessage}</div>
                    </div>
                )}
                {isReviewSubmitted && (
                    <div className="submitted-box text-center">
                        <div className="loader"></div>
                        <div className="success-message mt-3">Thank you for your review!</div>
                    </div>
                )}
            </div>

            {/* Reviews Modal */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Customer Reviews</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {userReviews.length ? (
                        userReviews.map((review) => (
                            <div key={review.id} className="card mb-2">
                                <div className="card-body">
                                    <div style={{ fontWeight: "bold" }}>Rating: {review.rating}/5</div>
                                    <p>{review.review}</p>
                                    <small className="text-muted">
                                        {new Date(review.created_at).toLocaleDateString()}
                                    </small>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-muted">No reviews yet.</div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

// Helper function to get rating message
const getRatingMessage = (star) => {
    switch (star) {
        case star < 2:
            return "Poor";
        case star < 3:
            return "Too bad";
        case star < 4:
            return "Average";
        case star < 5:
            return "Good";
        default:
            return "Excellent";
    }
};