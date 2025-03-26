import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Achievements from "@/components/Achievements";
import Ventures from "@/components/Ventures";
import ContentCreation from "@/components/ContentCreation";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 space-y-24 py-8">
        <Hero />
        <Impact />
        <Achievements />
        <Ventures />
        <ContentCreation />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
