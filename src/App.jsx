import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <section>
        <Navbar />
        <Home />
        <About />
        <Skills />
      </section>
    </>
  );
}

export default App;
