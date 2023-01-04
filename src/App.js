import "./App.css";
import React, { useEffect } from "react";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Projects from "./component/projects/Projects";
import Footer from "./component/footer/Footer";
import Aos from "aos";
// import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
