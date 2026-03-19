import ParticleBackground from "./components/ParticleBackground/ParticleBackground";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
// import GithubRepos from './components/GithubRepos/GithubRepos';
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <CursorGlow />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      {/* <GithubRepos /> */}
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
