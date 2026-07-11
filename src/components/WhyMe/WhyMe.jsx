import { motion } from "framer-motion";
import {
  Clapperboard,
  Sparkles,
  ScanSearch,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Clapperboard,
    title: "Story-First Editing",
    description:
      "I focus on pacing, structure, and visual flow — making sure every cut serves the story instead of adding effects just for the sake of it.",
    label: "PACING & STORY",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Motion & Visuals",
    description:
      "Clean motion graphics, typography, transitions, and visual details that make every edit feel polished and engaging.",
    label: "MOTION DESIGN",
  },
  {
    number: "03",
    icon: ScanSearch,
    title: "Detail Obsessed",
    description:
      "From sound design and timing to transitions and tiny visual details, I pay attention to the things that make an edit feel complete.",
    label: "ATTENTION TO DETAIL",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Always Improving",
    description:
      "I'm constantly learning new techniques, exploring editing styles, and improving my workflow to make every new project better.",
    label: "KEEP EVOLVING",
  },
];

const WhyMe = () => {
  return (
    <section id="why-me" className="why-me-section">
      <motion.div
        className="why-me-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="why-me-eyebrow">WHY WORK WITH ME</p>

        <h2>
          More Than Just
          <span>Cutting Clips.</span>
        </h2>

        <div className="why-me-heading-line" />
      </motion.div>

      <div className="why-me-list">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <motion.div
              className="why-me-card"
              key={reason.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
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
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="why-me-card-glow" />

              <div className="why-me-number">{reason.number}</div>

              <div className="why-me-icon">
                <Icon size={29} strokeWidth={1.7} />
              </div>

              <div className="why-me-content">
                <span className="why-me-label">{reason.label}</span>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </div>

              <div className="why-me-arrow">
                <ArrowUpRight size={25} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyMe;
