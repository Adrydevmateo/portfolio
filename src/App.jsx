import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <>
      <section>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
      </section>
    </>
  );
}

export default App;
