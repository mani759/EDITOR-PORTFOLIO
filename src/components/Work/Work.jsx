import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Cinematic Storytelling",
    category: "YouTube Editing",
    video: "/videos/project-1.mp4",
  },
  {
    title: "High Retention Edit",
    category: "Short Form Content",
    video: "/videos/project-2.mp4",
  },
  {
    title: "Motion Design",
    category: "Motion Graphics",
    video: "/videos/project-3.mp4",
  },
];

const Work = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
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
          >
            <div
              className="project-video"
              onClick={() => setSelectedVideo(project.video)}
            >
              <img
                src={`/thumbnails/project-${index + 1}.jpg`}
                alt={project.title}
              />

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
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="video-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={28} />
            </button>

            <video src={selectedVideo} controls autoPlay playsInline />
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
