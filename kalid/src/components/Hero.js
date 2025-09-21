// components/Hero.js
import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="text-center text-light py-5 hero-section"
    >
      <motion.img
        src={profilePic}
        alt="Kalid"
        className="rounded-circle mb-3 shadow"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="fw-bold"
      >
        Hi, I’m Kalid 👨‍💻
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Computer Science Graduate | Cloud & AI Enthusiast 
      </motion.p>
    </div>
  );
};

export default Hero;