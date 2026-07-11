import { motion } from "framer-motion";
import { Scissors, Sparkles, WandSparkles, Film } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Scissors,
    title: "Video Editing",
    description:
      "Clean, fast-paced edits with smooth cuts, pacing, and storytelling that keeps viewers watching.",
    tags: ["YouTube", "Shorts", "Reels"],
  },

  {
    number: "02",
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Dynamic motion design and animations that make your content look polished, modern, and professional.",
    tags: ["After Effects", "Animation", "Visuals"],
  },

  {
    number: "03",
    icon: WandSparkles,
    title: "Color Grading",
    description:
      "Cinematic color correction and grading that gives your videos the right mood, tone, and visual identity.",
    tags: ["Color", "Cinematic", "Look"],
  },

  {
    number: "04",
    icon: Film,
    title: "Short-Form Content",
    description:
      "High-retention short-form edits designed for creators, brands, and social media growth.",
    tags: ["Instagram", "YouTube", "TikTok"],
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      {/* HEADING */}

      <motion.div
        className="services-heading"
        initial={{
          opacity: 0,
          y: 50,
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
          duration: 0.8,
        }}
      >
        <p className="services-eyebrow">WHAT I DO</p>

        <h2>
          Cinematic
          <span>Services.</span>
        </h2>

        <div className="services-heading-line" />
      </motion.div>

      {/* SERVICES GRID */}

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              className="service-card"
              key={service.title}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
              }}
            >
              {/* CARD GLOW */}

              <div className="service-card-glow" />

              {/* NUMBER */}

              <span className="service-number">{service.number}</span>

              {/* ICON */}

              <motion.div
                className="service-icon"
                whileHover={{
                  rotate: 8,
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <Icon size={30} strokeWidth={1.7} />
              </motion.div>

              {/* CONTENT */}

              <h3>{service.title}</h3>

              <p className="service-description">{service.description}</p>

              {/* TAGS */}

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
