import { motion } from "framer-motion";

const tools = [
  {
    name: "Premiere Pro",
    description: "Video Editing",
    logo: "/images/tools/premier-pro.png",
  },
  {
    name: "After Effects",
    description: "Motion Graphics",
    logo: "/images/tools/after-effects.png",
  },
  {
    name: "DaVinci Resolve",
    description: "Color Grading",
    logo: "/images/tools/daavinci-resolve.png",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* ABOUT HEADING */}

      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="about-eyebrow">ABOUT ME</p>

        <h2>
          The Editor Behind
          <span>The Timeline.</span>
        </h2>

        <div className="about-heading-line" />
      </motion.div>

      {/* ABOUT MAIN CONTENT */}

      <div className="about-main">
        {/* LEFT IMAGE */}

        <motion.div
          className="about-image-wrapper"
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
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
          <div className="about-image-glow" />

          <div className="about-image-border">
            <img src="/images/about-image.png" alt="Video editor working" />
          </div>

          {/* FLOATING STATUS CARD */}

          <motion.div
            className="about-floating-card"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="about-status-dot" />

            <div>
              <p>Currently</p>

              <h4>Creating & Learning</h4>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="about-content"
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="about-intro">
            I'm a video editor focused on turning raw footage into engaging
            stories through pacing, motion, sound, and thoughtful visual
            details.
          </p>

          <p className="about-text">
            My journey into editing started with a simple curiosity about how
            videos could hold attention and create emotion. Since then, I've
            been continuously learning, experimenting with different editing
            styles, and improving the way I approach every project.
          </p>

          <p className="about-text">
            I enjoy working on both long-form and short-form content, combining
            clean cuts, motion graphics, sound design, and storytelling to
            create videos that feel intentional rather than over-edited.
          </p>

          {/* QUOTE */}

          <motion.div
            className="about-quote"
            whileHover={{
              x: 8,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="about-quote-line" />

            <p>
              “Every edit is another opportunity to learn, experiment, and
              create something better than the last.”
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ====================================
          TOOLS SECTION
      ==================================== */}

      <motion.div
        className="tools-section"
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <p className="tools-title">TOOLS I WORK WITH</p>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <motion.div
              className="tool-card"
              key={tool.name}
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
            >
              {/* TOOL LOGO */}

              <div className="tool-icon">
                <img src={tool.logo} alt={`${tool.name} logo`} />
              </div>

              {/* TOOL INFORMATION */}

              <div className="tool-information">
                <h3>{tool.name}</h3>

                <p>{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
