import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Galeria from "./components/Galeria";
import Features from "./components/Funcionalidades";
import Technologies from "./components/Tecnologias";
import Future from "./components/Futuro";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Header/>
      <Hero />
      <About />
      <Galeria />
      <Features />
      <Technologies />
      <Future />
      <Footer />
    </>
  );
}
