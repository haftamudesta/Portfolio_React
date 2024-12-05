import './App.css'
import Introduction from "./components/Introduction/Introduction";
import NavBar from "./components/NavBar/NavBar";
import Skils from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <>
    <NavBar />
    <div className="main_container" id="container_app">
      <Introduction />
      <About />
      <Skils />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
