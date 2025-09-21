import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="container py-5">
      <h2 className="mb-4 text-center">📬 Contact Me</h2>
      <motion.form
        action="mailto:geleta.kalid@gmail.com"
        method="post"
        encType="text/plain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-4 shadow rounded bg-light"
      >
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input type="text" name="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Email</label>
          <input type="email" name="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Send Message 🚀
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;