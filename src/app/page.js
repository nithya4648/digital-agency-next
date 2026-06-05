import ClientWrapper from "@/components/ClientWrapper";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ClientWrapper>
      {/* Progress bar */}
      <div id="progress"></div>

      {/* Custom cursor */}
      <div id="cursor"></div>
      <div id="cursor-ring"></div>

      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />

      {/* Back to top */}
      <button id="btt">↑</button>
    </ClientWrapper>
  );
}
