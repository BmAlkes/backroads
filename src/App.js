import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tour";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
