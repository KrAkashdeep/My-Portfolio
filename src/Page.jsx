import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default Page;
