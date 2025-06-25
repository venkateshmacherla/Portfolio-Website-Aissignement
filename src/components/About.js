import React from 'react';
import "../styles.css";
import GreyShape from "../assets/grey-shape.png";
import YellowShape from "../assets/yellow-splash.png";
import SmallYellow from "../assets/small-yellow.png";
import Hand from "../assets/hand.png";

function About({ isDarkMode }) {
    return (
        <>
            <section id="About" className="about-section">
                <div className="about-container p-5">
                    <div className="about-heading">
                        <h2 className="about-title">
                            <span className="highlight-char">T</span>his is it. <span className="emoji">:)</span>
                        </h2>
                    </div>

                    <p className="about-text">
                        Anish Kr. Sinha is an Indian <strong>UI/UX Designer & Front End Developer</strong> with a passion for designing
                        beautiful and functional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with
                        designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in
                        the business of creating since he hung his first painting on the wall when he was 11.
                    </p>

                    <p className="about-text">
                        He holds a <strong>bachelor degree in Computer Applications.</strong> During his graduation, he has been actively involved
                        in the web design community for the last 3 years. He has designed websites for small businesses, events, nonprofits,
                        and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative.
                    </p>

                    <p className="about-text">
                        His interests, however, extend beyond the web and he loves helping people with branding and print design. He even
                        loves designing 3D floor plan.
                    </p>

                    <p className="about-text">
                        When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around
                        on something inspired by YouTube tutorials.
                    </p>

                    <hr
                        className="about-divider"
                        style={{
                            border: "none",
                            borderTop: `3px solid ${isDarkMode ? "#fff" : "#000"}`,
                            width: "340px",
                            margin: "0 auto"
                        }}
                    />
                </div>
            </section>
            <div className="email-sidebar">
                <a href="mailto:sinhaanishkumar@outlook.com">| sinhaanishkumar@outlook.com</a>
            </div>
            <div className="about-decor">
                <img src={Hand} alt="hand pointing" className="hand-img" />
                <img src={YellowShape} alt="grey shape" className="yellow-decor" />
                <img src={GreyShape} alt="splash" className="grey-decor" />
                <img src={SmallYellow} alt="splash" className="small-yellow-decor" />
            </div>
        </>
    );
}

export default About;