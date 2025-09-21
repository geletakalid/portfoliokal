// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <p className="mb-1">© {new Date().getFullYear()} Kalid Geleta</p>
      <p className="mb-0">
        Built with ❤️ 
      </p>
      <div className="mt-2">
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noreferrer"
          className="text-light mx-2"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noreferrer"
          className="text-light mx-2"
        >
          LinkedIn
        </a>
        <a
          href="mailto:your.email@example.com"
          className="text-light mx-2"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;