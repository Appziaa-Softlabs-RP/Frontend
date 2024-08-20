import { useState } from "react";

export default function Contact() {

    const [isSubscribed, setIsSubscribed] = useState(false);

    return <>
        <button type="button" id="openSubscribeBtn"
            onClick={() => { setIsSubscribed(!isSubscribed) }}
            className="action-btn">
            Contact
        </button>
        <div id="subscribeSheet" className="sheet"
            style={{
                transition: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isSubscribed ? "translate(-500px, 0px)" : "translate(0px, 0px)"
            }}
        >
            <button
                id="closeSubscribeBtn"
                className="close-modal"
                onClick={() => { setIsSubscribed(!isSubscribed) }}
                style={{
                    position: "absolute",
                    margin: "5px",
                    background: "white",
                }}
            >
                ✕
            </button>
            <div className="sheet-content">
                <section className="modal-content">
                    <h2>Contact US</h2>
                    <h4
                        style={{
                            margin: "20px 0px",
                            textAlign: "center",
                            width: "100%",
                        }}
                    >
                        <strong>Shoe Delight Pvt Ltd </strong>
                    </h4>
                    {/* <!-- address --> */}
                    <div
                        style={{
                            marginTop: "1rem",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <span
                            style={{
                                marginRight: "6px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <span>
                                <i className="fas fa-home"></i>
                            </span>
                            <span
                                style={{
                                    fontSize: "30px",
                                }}
                            >
                                |
                            </span>
                        </span>
                        <p
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                translate: "0 -6px",
                            }}
                        >
                            41A, ED Block, Madhuban Chowk , Pitampura, <br />
                            New Delhi - 110088
                        </p>
                    </div>

                    <p>
                        <i className="fas fa-phone"></i> |
                        <a
                            href="tel:+919971477744"
                            style={{
                                textDecoration: "none",
                                color: "black",
                            }}
                        >
                            +91 9971477744
                        </a>
                    </p>
                    {/* <!-- 2 emails --> */}
                    <div
                        style={{
                            marginTop: "1rem",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <span
                            style={{
                                marginRight: "6px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <span>
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span
                                style={{
                                    fontSize: "30px",
                                }}
                            >
                                |
                            </span>
                        </span>
                        <p
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                translate: "0 -6px",
                            }}
                        >
                            <a
                                href="mailto:hello@shoedelight.in"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                hello@shoedelight.in
                            </a>
                            <a
                                href="mailto:pinkysales@stepsforever.com"
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                pinkysales@stepsforever.com
                            </a>
                        </p>
                    </div>
                    {/* <!-- website --> */}
                    <p>
                        <i className="fas fa-globe"></i> |
                        <a
                            href="https://stepsforever.com"
                            style={{
                                textDecoration: "none",
                                color: "black",
                            }}
                        >
                            https://stepsforever.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    </>
}