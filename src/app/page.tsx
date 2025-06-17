import Image from "next/image";
import Cards2 from "./components/Cards2";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import About from "./components/About";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <HeroSection />
      <section id="about">
      <About />
      </section>
      <section id="features">
      <Cards />
      <Cards2 />
      </section>
      {/* <section id="contact">
      <ContactUs />
      </section> */}
      
      <Footer />
    </main>
  );
}
