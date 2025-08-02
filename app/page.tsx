import About from "@/components/about";
import StarsCanvas from "@/components/canvas/stars";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Feedbacks from "@/components/feedbacks";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Tech from "@/components/tech";
import Works from "@/components/works";

export default function Home() {
  return (
    <div className="relative z-0">
      <div className="bg-[url(/herobg.png)] bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <Footer />
        <StarsCanvas />
      </div>
    </div>
  );
}
