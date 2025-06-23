import Image from "next/image";

const steps: { number: string; title: string; description: string; image?: string }[] = [
    {
      number: "01",
      title: "Download the App",
      description: "Get started by downloading our app from Google Play Store. Sign up in just a few taps and you're ready to go.",
      image: "/Phone Screen (2).png"
    },
    {
      number: "02",
      title: "Book a Session",
      description: "Book a session based on the topic you want to talk about and you'd be assigned listener based on availability",
      image: "/Frame 573.png"
    },
    {
      number: "03",
      title: "Attend the Session",
      description: "Open up about whatever is on your mind, big or small. Every conversation is private, secure, and judgment free.",
      image: "/aew.png"
    },
    {
      number: "04",
      title: "Talk Freely",
      description: "Let the weight off your chest and breathe a little easier. Walk away feeling heard, supported, and more at peace.",
      image: "/aa.png"
    }
  ];
  
  function Hexagon({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center" style={{ clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)', background: '#38BDF8' }}>
        <span className="text-white text-base md:text-lg font-bold">{children}</span>
      </div>
    );
  }
  
  export default function HowItWorks() {
    return (
      <section id="how-it-works" className="relative py-12 md:py-24 bg-white overflow-x-clip overflow-y-visible">
        {/* Large semicircle top right, aligned with heading */}
        <div className="absolute top-[40px] md:top-[60px] right-0 w-[200px] md:w-[378px] h-[200px] md:h-[378px] z-0 overflow-visible pointer-events-none">
          <div className="w-full h-full bg-[#5CC3EB] rounded-full relative" style={{transform: 'translateX(50%)'}}>
            {/* Medium circle inside semicircle */}
            <div className="absolute top-[60px] md:top-[114px] left-[-50px] md:left-[-100px] w-[50px] md:w-[100px] h-[50px] md:h-[100px] bg-[#5CC3EB] rounded-full" />
            {/* Small circle inside semicircle */}
            <div className="absolute top-[8px] md:top-[16px] left-[-30px] md:left-[-60px] w-[25px] md:w-[50px] h-[25px] md:h-[50px] bg-[#5CC3EB] rounded-full" />
          </div>
        </div>
        
        <div className="container mx-auto max-w-[1280px] px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-24 text-black">
            How It Works
          </h2>
  
          <div className="relative flex flex-col items-center">
            {/* Dotted Line (SVG) */}
            <svg className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full z-0" width="4" viewBox="0 0 4 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: 'calc(100% - 4rem)'}}>
              <path 
                d="M2 0 L2 900" 
                stroke="#D1D5DB" 
                strokeWidth="4" 
                strokeDasharray="8 12" 
                strokeLinecap="round"
              />
            </svg>
  
            {/* Steps */}
            <div className="space-y-20 md:space-y-40 w-full">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full"
                >
                  {/* Hexagon centered on the dotted line */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                    <Hexagon>{step.number}</Hexagon>
                  </div>
                  
                  {/* Content layout based on step number */}
                  {step.number === "02" || step.number === "04" ? (
                    <>
                      {/* Left column: text content */}
                      <div className="flex flex-col items-start md:pl-0 relative z-10">
                        <div className="md:hidden mb-4">
                          <Hexagon>{step.number}</Hexagon>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black w-full text-left">{step.title}</h3>
                        <p className="text-black text-base md:text-lg leading-relaxed w-full max-w-md text-left">{step.description}</p>
                      </div>
                      {/* Right column: image and circles */}
                      <div className="flex flex-col items-center relative justify-center h-full">
                        {step.image && (
                          <Image 
                            src={step.image} 
                            alt={step.title} 
                            width={220} 
                            height={420} 
                            className="relative z-10 w-auto h-[280px] md:h-[420px] object-contain drop-shadow-lg" 
                          />
                        )}
                        {step.number === "04" && (
                          <div className="hidden md:block absolute -right-32 -top-32 w-[378px] h-[378px] z-30 overflow-visible pointer-events-none">
                            {/* Large semicircle */}
                            <div className="w-full h-full bg-[#5CC3EB] rounded-full relative" style={{transform: 'translateX(50%)'}} />
                            {/* Medium circle above semicircle */}
                            <div className="absolute top-[-50px] right-[130px] w-[100px] h-[100px] bg-[#5CC3EB] rounded-full" />
                            {/* Smallest circle above semicircle */}
                            <div className="absolute top-[-80px] right-[250px] w-[40px] h-[40px] bg-[#5CC3EB] rounded-full" />
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left column: image and circles */}
                      <div className="flex flex-col items-center relative justify-center h-full">
                        {step.number === "01" && (
                          <div className="hidden md:block absolute -left-32 top-0 w-[378px] h-[378px] z-30 overflow-visible pointer-events-none">
                            <div className="w-full h-full bg-[#5CC3EB] rounded-full relative" style={{transform: 'translateX(-50%)'}} />
                            <div className="absolute top-[250px] left-[180px] w-[40px] h-[40px] bg-[#5CC3EB] rounded-full" />
                            <div className="absolute top-[320px] left-[130px] w-[100px] h-[100px] bg-[#5CC3EB] rounded-full" />
                          </div>
                        )}
                        {step.image && (
                          <Image 
                            src={step.image} 
                            alt={step.title} 
                            width={220} 
                            height={420} 
                            className="relative z-10 w-auto h-[280px] md:h-[420px] object-contain drop-shadow-lg" 
                          />
                        )}
                      </div>
                      {/* Right column: text content */}
                      <div className="flex flex-col items-start md:pl-12">
                        <div className="md:hidden mb-4">
                          <Hexagon>{step.number}</Hexagon>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black w-full text-left">{step.title}</h3>
                        <p className="text-black text-base md:text-lg leading-relaxed w-full max-w-md text-left">{step.description}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }