"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";

export default function HeroLeft() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="hero-left" className="flex flex-col items-center justify-center gap-2 sm:gap-4 md:gap-8 max-w-full md:max-w-[1000px] lg:max-w-[1400px] xl:max-w-[1600px] pt-2 md:pt-8 px-3 sm:px-4 md:px-0 text-center relative overflow-visible">
      {/* Floating Character Assets around text - smaller on mobile */}
      {/* Blue heart singing - top left */}
      <div 
        className={`absolute top-2 sm:top-8 md:top-14 -left-[20px] sm:-left-[100px] md:-left-[180px] w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '800ms', animation: 'float 3s ease-in-out infinite' }}
      >
        <Image
          src="/new screen/blue heart .png"
          alt="Blue heart singing"
          width={128}
          height={128}
          className="w-full h-full"
        />
      </div>
      
      {/* Red heart sad - bottom left */}
      <div 
        className={`absolute bottom-[40px] sm:-bottom-4 md:-bottom-8 -left-1 sm:-left-4 md:-left-8 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '900ms', animation: 'float 3s ease-in-out infinite 0.5s' }}
      >
        <Image
          src="/new screen/red heart.png"
          alt="Red heart sad"
          width={128}
          height={128}
          className="w-full h-full"
        />
      </div>
      
      {/* Blue heart with waves - top right */}
      <div 
        className={`absolute top-2 sm:top-8 md:top-14 -right-[20px] sm:-right-[100px] md:-right-[180px] w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1000ms', animation: 'float 3s ease-in-out infinite 1s' }}
      >
        <Image
          src="/new screen/blue heart2.png"
          alt="Blue heart with waves"
          width={128}
          height={128}
          className="w-full h-full"
        />
      </div>
      
      {/* Green wallet - bottom right */}
      <div 
        className={`absolute bottom-[40px] sm:-bottom-4 md:-bottom-8 -right-1 sm:-right-4 md:-right-8 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1100ms', animation: 'float 3s ease-in-out infinite 1.5s' }}
      >
        <Image
          src="/new screen/green wallet.png"
          alt="Green wallet"
          width={128}
          height={128}
          className="w-full h-full"
        />
      </div>

      <h1 
        className={`text-xl sm:text-2xl md:text-5xl lg:text-[64px] font-bold text-gray-900 leading-[1.0] sm:leading-[1.1] transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '100ms' }}
      >
        <span className="block">Real Conversations.</span>
        <span className="block">Sparked.Just for You</span>
      </h1>
      <p 
        className={`text-gray-600 max-w-[95%] sm:max-w-[600px] transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ 
          transitionDelay: '300ms',
          fontFamily: 'Geist',
          fontWeight: 500,
          fontSize: '13px',
          lineHeight: '120%',
          letterSpacing: '-2%',
          textAlign: 'center',
          verticalAlign: 'middle'
        }}
      >
        <span className="block">The emotional currency fueling genuine connection on Ready</span>
        <span className="block">Social. Whether you're looking to invest in yourself, offer a caring lift</span>
        <span className="block">to someone else, or join a movement of empathy, Sparks make it</span>
        <span className="block">real.</span>
      </p>
      <div 
        className={`flex flex-row gap-2 sm:gap-3 md:gap-4 w-full justify-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '500ms' }}
      >
        <a
          href="https://play.google.com/store/apps/details?id=com.tayor99.readysocial"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-none px-4 sm:px-8 py-2.5 sm:py-3.5 bg-[#f6535b] text-white text-xs sm:text-base md:text-lg font-semibold rounded-xl hover:bg-[#e04850] transition-all duration-200 hover:shadow-lg hover:scale-105 text-center"
        >
          Get the app
        </a>
        <a
          href="#how-it-works"
          className="flex-1 sm:flex-none px-4 sm:px-8 py-2.5 sm:py-3.5 border border-gray-500 text-gray-500 text-xs sm:text-base md:text-lg font-semibold rounded-xl hover:bg-gray-500 hover:text-white transition-all duration-200 text-center"
        >
          Get sparks
        </a>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
} 