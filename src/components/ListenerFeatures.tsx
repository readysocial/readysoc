import Image from "next/image";

const features = [
  {
    title: "Confidentiality",
    description: "Your conversations stay between you and your listener. We maintain strict privacy to ensure your trust and safety.",
    icon: "/Vector (5).png"
  },
  {
    title: "Anonymity",
    description: "Share openly without revealing your identity. You're always in control of what you choose to disclose.",
    icon: "/Vector (5).png"
  },
  {
    title: "Trust",
    description: "Each listener is verified, empathetic, and committed to creating a safe, nonjudgmental space.",
    icon: "/fa6-solid_handshake.png"
  },
  {
    title: "Certified Experts",
    description: "Our listeners are trained to handle a wide range of emotional and social conversations with patience and care.",
    icon: "/tdesign_support-filled (1).png"
  },
  {
    title: "Friendship",
    description: "Each listener is verified, empathetic, and committed to creating a safe, nonjudgmental space.",
    icon: "/fa-solid_user-friends.png"
  }
];

const darkTitle = "text-[#22292F] font-extrabold";

export default function ListenerFeatures() {
  return (
    <section className="relative py-12 md:py-24 bg-[#fafbfc] flex flex-col items-center justify-center min-h-[600px] md:min-h-[900px]">
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[500px] md:min-h-[800px] px-4 md:px-6">
        {/* Cards and Avatar Grid */}
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-3 gap-6 md:gap-0 place-items-center relative z-10 min-h-[auto] md:min-h-[700px]">
          {/* Top card */}
          <div className="md:col-start-2 md:row-start-1 w-full md:w-auto">
            <div className="bg-white rounded-xl shadow p-4 md:p-6 flex flex-col items-center w-full md:w-64">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#38BDF8] mb-3 md:mb-4">
                <Image src={features[0].icon} alt={features[0].title} width={24} height={24} className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <h3 className={`text-base md:text-lg mb-2 text-center ${darkTitle}`}>{features[0].title}</h3>
              <p className="text-gray-600 text-center text-xs md:text-sm">{features[0].description}</p>
            </div>
          </div>

          {/* Top right card */}
          <div className="md:col-start-3 md:row-start-2 w-full md:w-auto">
            <div className="bg-white rounded-xl shadow p-4 md:p-6 flex flex-col items-center w-full md:w-64">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#38BDF8] mb-3 md:mb-4">
                <Image src={features[1].icon} alt={features[1].title} width={24} height={24} className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <h3 className={`text-base md:text-lg mb-2 text-center ${darkTitle}`}>{features[1].title}</h3>
              <p className="text-gray-600 text-center text-xs md:text-sm">{features[1].description}</p>
            </div>
          </div>

          {/* Bottom right card */}
          <div className="md:col-start-2 md:row-start-3 w-full md:w-auto">
            <div className="bg-white rounded-xl shadow p-4 md:p-6 flex flex-col items-center w-full md:w-64">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#38BDF8] mb-3 md:mb-4">
                <Image src={features[3].icon} alt={features[3].title} width={24} height={24} className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <h3 className={`text-base md:text-lg mb-2 text-center ${darkTitle}`}>{features[3].title}</h3>
              <p className="text-gray-600 text-center text-xs md:text-sm">{features[3].description}</p>
            </div>
          </div>

          {/* Bottom left card */}
          <div className="md:col-start-1 md:row-start-2 w-full md:w-auto">
            <div className="bg-white rounded-xl shadow p-4 md:p-6 flex flex-col items-center w-full md:w-64">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#38BDF8] mb-3 md:mb-4">
                <Image src={features[4].icon} alt={features[4].title} width={24} height={24} className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <h3 className={`text-base md:text-lg mb-2 text-center ${darkTitle}`}>{features[4].title}</h3>
              <p className="text-gray-600 text-center text-xs md:text-sm">{features[4].description}</p>
            </div>
          </div>

          {/* Central Avatar */}
          <div className="md:col-start-2 md:row-start-2 flex items-center justify-center order-first md:order-none mb-6 md:mb-0">
            <div className="relative flex items-center justify-center">
              <Image 
                src="/Ellipse 67.png" 
                alt="Listener Avatar" 
                width={120} 
                height={120} 
                className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full border-4 border-white shadow-lg z-20" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 