import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles.css";
import NameLogo from "../assets/name-icon.png";
import ThemeIcon from "../assets/theme-icon.png";
import SunIcon from "../assets/sun-icon.png";

const Navbar = ({ toggleTheme = () => { }, isDarkMode = false }) => (
    <nav className="navbar navbar-expand-lg fixed-top bg-white">
        <div className="container">
            <a className="navbar-brand fw-bold d-flex align-items-center" href="#home">
                <img
                    src={NameLogo}
                    alt="logo"
                    className="me-2"
                    style={{ height: "24px" }}
                />
                ANISH KUMAR SINHA
            </a>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav align-items-lg-center">
                    <li className="nav-item">
                        <Link className="nav-link mx-2" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mx-2" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2" href="#resume">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-2" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <button className="btn p-1 ms-2" onClick={toggleTheme}>
                            <img
                                src={isDarkMode ? SunIcon : ThemeIcon}
                                alt="Toggle Mode"
                                style={{ height: "20px" }}
                            />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;