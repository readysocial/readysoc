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
    <section className="relative py-24 bg-[#fafbfc] flex flex-col items-center justify-center min-h-[900px]">
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[800px]">
        {/* Cards and Avatar Grid */}
        <div className="w-full h-full grid grid-cols-3 grid-rows-3 place-items-center relative z-10" style={{minHeight: 700}}>
          {/* Top card */}
          <div className="col-start-2 row-start-1">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-64">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#38BDF8] mb-4">
                <Image src={features[0].icon} alt={features[0].title} width={40} height={40} />
              </div>
              <h3 className={`text-lg mb-2 text-center ${darkTitle}`}>{features[0].title}</h3>
              <p className="text-gray-600 text-center text-sm">{features[0].description}</p>
            </div>
          </div>
          {/* Top right card */}
          <div className="col-start-3 row-start-2">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-64">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#38BDF8] mb-4">
                <Image src={features[1].icon} alt={features[1].title} width={40} height={40} />
              </div>
              <h3 className={`text-lg mb-2 text-center ${darkTitle}`}>{features[1].title}</h3>
              <p className="text-gray-600 text-center text-sm">{features[1].description}</p>
            </div>
          </div>
          {/* Bottom right card */}
          <div className="col-start-2 row-start-3">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-64">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#38BDF8] mb-4">
                <Image src={features[3].icon} alt={features[3].title} width={40} height={40} />
              </div>
              <h3 className={`text-lg mb-2 text-center ${darkTitle}`}>{features[3].title}</h3>
              <p className="text-gray-600 text-center text-sm">{features[3].description}</p>
            </div>
          </div>
          {/* Bottom left card */}
          <div className="col-start-1 row-start-2">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-64">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#38BDF8] mb-4">
                <Image src={features[4].icon} alt={features[4].title} width={40} height={40} />
              </div>
              <h3 className={`text-lg mb-2 text-center ${darkTitle}`}>{features[4].title}</h3>
              <p className="text-gray-600 text-center text-sm">{features[4].description}</p>
            </div>
          </div>
          {/* Left card */}
          <div className="col-start-2 row-start-2 flex items-center justify-center">
            {/* Central Avatar */}
            <div className="relative flex items-center justify-center">
              <Image src="/Ellipse 67.png" alt="Listener Avatar" width={180} height={180} className="rounded-full border-4 border-white shadow-lg z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 