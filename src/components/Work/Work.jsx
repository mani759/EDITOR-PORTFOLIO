import { motion } from "framer-motion";
import { Play } from "lucide-react";

const projects = [
  {
    title: "Cinematic Storytelling",
    category: "YouTube Editing",
    video: "/videos/project-3.mp4",
  },
  {
    title: "High Retention Edit",
    category: "Short Form Content",
    video: "/videos/project-3.mp4",
  },
  {
    title: "Motion Design",
    category: "Motion Graphics",
    video: "/videos/project-3.mp4",
  },
];

const Work = () => {
  return (
    <section id="work" className="work-section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p>SELECTED WORK</p>
        <h2>
          Edits That <span>Hold Attention.</span>
        </h2>
        <div className="heading-line" />
      </motion.div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            whileHover={{ y: -10 }}
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");

              if (video) {
                video.play();
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");

              if (video) {
                video.pause();
                video.currentTime = 0;
              }
            }}
          >
            <div className="project-video">
              <video src={project.video} loop playsInline preload="metadata" />

              <div className="project-overlay">
                <div className="project-play">
                  <Play size={22} fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="project-info">
              <p>{project.category}</p>
              <h3>{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
