import SmoothScroll from "./components/SmoothScroll";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import ScrollHero from "./components/ScrollHero";
import Works from "./components/Works";
import About from "./components/About";
import Exhibitions from "./components/Exhibitions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <TopBanner />
      <Header />
      <main>
        <ScrollHero />
        {/* Works rise out of the hero's color cloud (reveal-emerge) */}
        <Works />
        <About />
        <Exhibitions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
