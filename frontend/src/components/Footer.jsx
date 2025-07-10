import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h1>E-Comm</h1>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </footer>
    );
};

export default Footer;
