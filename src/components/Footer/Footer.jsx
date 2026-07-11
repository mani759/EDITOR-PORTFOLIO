import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          EDITOR<span>.</span>
        </a>

        <p>Designed & developed with attention to detail.</p>

        <motion.button
          className="footer-top-button"
          onClick={scrollToTop}
          whileHover={{
            y: -5,
          }}
          whileTap={{
            scale: 0.9,
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
