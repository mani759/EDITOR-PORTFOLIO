import CinematicBackground from "./components/background/CinematicBackground";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Work from "./components/Work/Work";
import Services from "./components/Services/Services";
import WhyMe from "./components/WhyMe/WhyMe";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="portfolio">
      <CinematicBackground />

      <Navbar />

      <main>
        <Hero />

        <Work />

        <Services />

        <WhyMe />

        <About />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
