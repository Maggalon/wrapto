import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Opportunity } from "@/components/Opportunity";
import { HowItWorks } from "@/components/HowItWorks";
import { EarningOptions } from "@/components/EarningOptions";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Opportunity />
        <HowItWorks />
        <EarningOptions />
        <FAQ />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
