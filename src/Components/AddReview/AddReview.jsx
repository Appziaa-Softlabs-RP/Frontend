import React, { useState } from "react";
import "./AddReview.css";

export default function AddReview() {
    const [hoveredStar, setHoveredStar] = useState(0);
    const [selectedStar, setSelectedStar] = useState(0);
    const [ratingMessage, setRatingMessage] = useState("");
    const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleStarHover = (value) => {
        setHoveredStar(value);
    };

    const handleStarClick = (value, message) => {
        setSelectedStar(value);
        setRatingMessage(message);
        setIsButtonDisabled(value !== 5);
    };

    const handleSubmit = () => {
        setIsReviewSubmitted(true);
    };

    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1>Review And Rating</h1>
                <h2>How was your experience with our product?</h2>
            </div>

            <div className="d-flex flex-column align-items-center">
                <div className="text-center">
                    <label>
                        <input
                            type="hidden"
                            name="rating_msg"
                            value={ratingMessage}
                        />
                        {ratingMessage}
                    </label>
                </div>

                <div className="d-flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill={
                                selectedStar >= star || hoveredStar >= star ? "#ffc107" : "gray"
                            }
                            className={`bi bi-star ${star <= (hoveredStar || selectedStar) ? "hover selected" : ""}`}
                            viewBox="0 0 16 16"
                            title={`${star} star`}
                            data-message={getRatingMessage(star)}
                            data-value={star}
                            onMouseOver={() => handleStarHover(star)}
                            onMouseOut={() => setHoveredStar(0)}
                            onClick={() => handleStarClick(star, getRatingMessage(star))}
                            style={{ cursor: "pointer" }}
                        >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                        </svg>
                    ))}
                </div>

                <div className="">
                    <label>
                        <input
                            type="hidden"
                            name="rate_value"
                            value={selectedStar}
                        />
                    </label>
                </div>

                <div className="feedback-tags w-100">
                    {[1, 2, 3, 4, 5].map((tagSet) => (
                        <div
                            key={tagSet}
                            className="tags-container"
                            data-tag-set={tagSet}
                            style={{ display: selectedStar === tagSet ? "block" : "none" }}
                        >
                            <div className="text-center mb-4">
                                {getTagQuestion(tagSet)}
                            </div>
                        </div>
                    ))}

                    <div className="d-flex justify-content-center mb-3">
                        <input
                            type="text"
                            className="tag form-control w-100"
                            name="comment"
                            id="inlineFormInputName"
                            placeholder="Please enter your review"
                        />
                    </div>
                </div>

                <div className="text-center mb-4">
                    <button
                        className="btn btn-secondary"
                        disabled={isButtonDisabled}
                        onClick={handleSubmit}
                    >
                        Add review
                    </button>
                </div>

                {/* {isReviewSubmitted && (
                    <div className="submited-box text-center">
                        <div className="loader"></div>
                        <div className="success-message mt-3">Thank you!</div>
                    </div>
                )} */}
            </div>
        </div>
    );
}

const getRatingMessage = (star) => {
    switch (star) {
        case 1:
            return "Poor";
        case 2:
            return "Too bad";
        case 3:
            return "Average quality";
        case 4:
            return "Nice";
        case 5:
            return "Very good quality";
        default:
            return "";
    }
};

const getTagQuestion = (tagSet) => {
    switch (tagSet) {
        case 1:
        case 2:
            return "Why was your experience so bad?";
        case 3:
            return "Why was your average rating experience?";
        case 4:
            return "Why was your experience good?";
        case 5:
            return "Give a compliment";
        default:
            return "";
    }
};