import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <div className="App px-[20px]">
        <Navbar />
        <Landing />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
