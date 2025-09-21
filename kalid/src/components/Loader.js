// components/Loader.js
import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      >
        {"..."}
      </motion.h1>
    </div>
  );
};

export default Loader;