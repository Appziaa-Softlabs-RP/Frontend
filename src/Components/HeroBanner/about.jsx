import { useState } from "react";

export default function About() {

    const [isAbout, setIsAbout] = useState(false);

    return <>
        <button type="button" id="openSubscribeBtn"
            onClick={() => { setIsAbout(!isAbout) }}
            className="action-btn">
            About Us
        </button>
        <div id="subscribeSheet" className="sheet"
            style={{
                transition: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isAbout ? "translate(-500px, 0px)" : "translate(0px, 0px)"
            }}
        >
            <button
                id="closeSubscribeBtn"
                className="close-modal"
                onClick={() => { setIsAbout(!isAbout) }}
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
                    <h2>ABOUT US</h2>
                    <h3>Shoe Delight Pvt Ltd</h3>

                    <h4
                        style={{
                            margin: "20px 0px",
                        }}
                    >
                        <strong>Shoe Delight: Where Comfort Meets Style</strong>
                    </h4>

                    <p>
                        At <strong>Shoe Delight</strong>, we believe that footwear is
                        more than just an accessory; it&apos;s an expression of
                        individuality and comfort. Our journey began with a simple
                        vision: to create shoes that seamlessly blend fashion-forward
                        designs with unparalleled comfort.
                    </p>

                    <p>
                        👠 <strong>Craftsmanship and Quality</strong>: Every pair of
                        shoes at Shoe Delight is meticulously crafted using the finest
                        materials. From soft leather to breathable fabrics, we
                        prioritize quality and durability. Our skilled artisans pay
                        attention to every detail, ensuring that each shoe is a
                        masterpiece.
                    </p>

                    <p>
                        🌟 <strong>Style for Every Occasion</strong>: Whether
                        you&apos;re stepping into the boardroom, hitting the dance
                        floor, or exploring the outdoors, Shoe Delight has you covered.
                        Our diverse collection includes formal shoes, casual sneakers,
                        elegant heels, and cozy flats. We believe that style should
                        never compromise comfort.
                    </p>

                    <p>
                        🌈 <strong>Colorful Palette</strong>: Express your personality
                        with our vibrant color palette. From classNameic blacks and
                        browns to bold reds and pastels, Shoe Delight offers a spectrum
                        of hues to match your mood and outfit.
                    </p>

                    <p>
                        👣 <strong>Comfort Technology</strong>: We understand that
                        comfort is non-negotiable. Our shoes feature cushioned insoles,
                        arch support, and breathable linings. Whether you&apos;re on
                        your feet all day or dancing the night away, Shoe Delight
                        ensures a comfortable stride.
                    </p>

                    <p>
                        🌿 <strong>Eco-Friendly Initiatives</strong>: As responsible
                        stewards of the environment, we actively seek sustainable
                        materials and production methods. Shoe Delight is committed to
                        reducing our ecological footprint while keeping you stylish.
                    </p>

                    <p>
                        🛍️ <strong>Visit Our Stores</strong>: With over two dozen stores
                        across North India, Shoe Delight invites you to step in and
                        explore. Our friendly staff will assist you in finding the
                        perfect pair for any occasion.
                    </p>

                    <p>
                        <strong>👣 Walk with Confidence, Delight in Every Step!</strong>
                    </p>
                </section>
            </div>
        </div>
    </>
}