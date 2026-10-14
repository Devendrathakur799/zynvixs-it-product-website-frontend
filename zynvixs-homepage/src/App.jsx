
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="trust-strip">
          <div className="container trust-inner">
            <span>BUILT FOR WHAT'S NEXT</span>
            <div className="trust-line" />
            <p>People. Products. Possibilities.</p>
          </div>
        </div>
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
