import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const whatsappUrl = "https://wa.me/917386032284";

  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.3,
      },
    },
  };

  const textItem = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-ambient-glow" />

      <div className="hero-container">
        {/* LEFT CONTENT */}

        <motion.div
          className="hero-content"
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-eyebrow" variants={textItem}>
            VIDEO EDITOR & MOTION DESIGNER
          </motion.p>

          <motion.h1 variants={textItem}>
            Not Just A<span>Video Editor</span>
          </motion.h1>

          <motion.p className="hero-description" variants={textItem}>
            I turn simple videos into high-retention content — helping creators
            & agencies boost watch time with clean edits, motion graphics, and
            storytelling.
          </motion.p>

          <motion.div className="hero-buttons" variants={textItem}>
            <motion.a
              href="#work"
              className="primary-button"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              View My Work
            </motion.a>

            <motion.a
              href={whatsappUrl}
              className="secondary-button"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          className="hero-image-container"
          initial={{
            opacity: 0,
            x: 100,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-image-glow" />

          <motion.img
            src="/images/mani.png"
            alt="Video Editor"
            className="hero-image"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}

      <motion.a
        href="#work"
        className="scroll-indicator"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
      >
        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={17} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
