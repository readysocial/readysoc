import Image from "next/image";
import HeroLeft from "../components/HeroLeft";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white overflow-hidden">
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
  );
}
