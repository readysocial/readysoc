import Image from "next/image";

export default function HeroBanner() {
  return (
    <section id="hero-banner" className="w-full bg-white py-8 md:py-20 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl px-4 md:px-8">
        {/* Left Side: Text and Button */}
        <div className="flex-1 flex flex-col items-start justify-center mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-xl md:text-4xl font-semibold text-black mb-4 md:mb-8 max-w-lg mx-auto md:mx-0">
            Connect instantly with a listener who creates a safe, judgement free space.
          </h1>
          <a
            href="https://play.google.com/store/apps/details?id=com.tayor99.readysocial"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F6535B] hover:bg-[#e13d45] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-lg shadow transition-colors duration-200 w-full md:w-auto text-center"
          >
            Download the app now
          </a>
        </div>
        {/* Right Side: Illustration */}
        <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
          <Image
            src="/unsplash_V81aMNdZXTc (1).png"
            alt="Two people illustration"
            width={400}
            height={400}
            className="w-full max-w-[250px] md:max-w-md h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
} 