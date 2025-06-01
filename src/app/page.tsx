import Image from "next/image";
import HeroLeft from "../components/HeroLeft";
import HowItWorks from "../components/HowItWorks";
import MeetOurListener from "@/components/MeetOurListener";
import ListenerFeatures from "@/components/ListenerFeatures";
import HeroBanner from "@/components/HeroBanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main id="home" className="flex min-h-screen bg-white overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-[1280px] px-6 md:px-8 py-12">
          {/* Left Side: Hero Text */}
          <div className="flex-1 md:pr-8">
            <HeroLeft />
          </div>
          
          {/* Right Side: Illustration */}
          <div className="flex-1 flex justify-end items-center mt-12 md:mt-0">
            <div className="relative w-full max-w-[640px]">
              <Image
                src="/aa.png"
                alt="Ready Social Illustration"
                width={640}
                height={640}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* About Us Section */}
      <section id="about" className="py-12 md:py-24">
        <MeetOurListener />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      <ListenerFeatures />
      <HeroBanner />

      {/* FAQ Section */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
