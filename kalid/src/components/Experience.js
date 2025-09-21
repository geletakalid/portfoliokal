import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
    <div className="container py-5 bg-light rounded">
      <h2 className="mb-4 text-center">💼 Work Experience</h2>
      <motion.div
  whileHover={{ scale: 1.05 }}
  className="card p-3 shadow mb-3"
>
  <h5>Supply Chain Intern</h5>
  <p>Kärcher, Nairobi (2024)</p>
  <p>
    - Assisted in procurement and inventory management <br />
    - Coordinated with suppliers to ensure timely delivery of parts and equipment <br />
    - Supported warehouse operations including stock monitoring and reporting <br />
    - Helped streamline supply chain processes to improve efficiency
  </p>
</motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="card p-3 shadow mb-3"
      >
        <h5>Software Support Engineer</h5>
        <p>National Irrigation Authority (2023 - 2024)</p>
        <p>
          - Assisted in maintaining enterprise applications <br />
          - Worked on troubleshooting and cloud integration 🌐
        </p>
      </motion.div>
    </div>

    
    </>
  );
};

export default Experience;