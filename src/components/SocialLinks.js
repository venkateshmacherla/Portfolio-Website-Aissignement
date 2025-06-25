import React from 'react';
import '../styles.css';

const SocialLinks = () => {
    return (
        <div className="social-links d-flex gap-3 mt-3">
            <a href="https://facebook.com/yourusername" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://t.me/yourusername" target="_blank" rel="noreferrer">
                <i className="fab fa-telegram fa-lg"></i>
            </a>
            <a href="https://www.kooapp.com/profile/yourusername" target="_blank" rel="noreferrer">
                <i className="fas fa-comment-dots fa-lg"></i>
            </a>
        </div>

    );
};

export default SocialLinks;
