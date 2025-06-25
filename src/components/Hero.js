import React from "react";
import "../styles.css";
import heroImage from "../assets/hero-image.png";
import SocialLinks from "./SocialLinks";

const Hero = () => (
    <>
        <section className="container my-5">
            <div className="row align-items-center p-5">
                {/* Left Section */}
                <div className="col-md-6 text-center text-md-start">
                    <h2 className="hello-msg mb-2"><span>Hello!</span></h2>

                    <h1 className="name-line mb-3">
                        <span className="bold">I’m </span>
                        <span className="highlight-name">Anish 👋</span>
                    </h1>

                    <p className="lead mb-4">
                        UI/UX Designer, Front-End Developer & Thinker.<br />
                        Based in India.
                    </p>

                    <div className="mb-4 gap-3">
                        <a href="#" className="btn btn-download">Download CV</a>
                        <a href="#" className="btn btn-contact">Get in Touch!</a>
                    </div>
                </div>

                {/* Right Section (Image) */}
                <div className="col-md-6 text-center mt-4 mt-md-0 position-relative hero-image-wrapper">
                    <div className="yellow-blob"></div>
                    <img
                        src={heroImage}
                        alt="Anish Illustration"
                        className="img-fluid hero-image"
                        style={{ maxHeight: "350px" }}
                    />
                </div>
            </div>

            {/* Social Links below the buttons */}
            <SocialLinks />
        </section>

        {/* Right side vertical email */}
        <div className="email-sidebar">
            <a href="mailto:sinhaanishkumar@outlook.com">| sinhaanishkumar@outlook.com</a>
        </div>
    </>
);

export default Hero;
