import { motion } from "framer-motion";

import { Mail, ArrowUpRight } from "lucide-react";

import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{
          opacity: 0,
          y: 70,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* BACKGROUND GLOW */}

        <div className="contact-glow" />

        {/* SMALL HEADING */}

        <motion.p
          className="contact-eyebrow"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          LET'S CREATE SOMETHING
        </motion.p>

        {/* MAIN HEADING */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          Have A Project
          <span>In Mind?</span>
        </motion.h2>

        {/* DESCRIPTION */}

        <motion.p
          className="contact-description"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
        >
          Whether you need a high-retention YouTube edit, short-form content, or
          motion graphics, I'd love to hear about your project.
        </motion.p>

        {/* CONTACT BUTTON */}

        <motion.a
          href="mailto:manikantagurram5533@gmail.com"
          className="contact-main-button"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          whileHover={{
            y: -5,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <Mail size={20} />
          Let's Work Together
          <ArrowUpRight size={20} />
        </motion.a>

        {/* SOCIAL MEDIA ICONS */}

        <motion.div
          className="contact-socials"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.65,
          }}
        >
          {/* INSTAGRAM */}

          <motion.a
            href="https://www.instagram.com/maniframes_00?igsh=emh6M2psc2VsOG5y"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            whileHover={{
              y: -5,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <FaInstagram size={21} />
          </motion.a>

          {/* LINKEDIN */}

          <motion.a
            href="https://www.linkedin.com/in/manikanta-gurram-707145326"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            whileHover={{
              y: -5,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <FaLinkedinIn size={21} />
          </motion.a>

          {/* YOUTUBE */}

          <motion.a
            href="https://www.youtube.com/@mani_frames0"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            whileHover={{
              y: -5,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <FaYoutube size={21} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
