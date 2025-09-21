import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">🎓 Education</h2>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="card p-3 shadow mb-3"
      >
        <h5>BSc. Computer Science</h5>
        <p>Strathmore University, Kenya (2019 - 2025)</p>
        <p>Specialization: Software Engineering & AI 🤖</p>
      </motion.div>
    </div>
  );
};

export default Education;