import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto flex flex-col items-center px-4 py-8 md:py-12 flex-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 md:mb-12 text-black">Contact Us</h1>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row w-full max-w-6xl">
          {/* Left: Contact Info */}
          <div className="bg-black text-white flex flex-col justify-between relative w-full lg:w-2/5 min-h-[400px] lg:min-h-[600px]">
            <div className="p-6 md:p-8 lg:p-10">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Contact Information</h2>
              <p className="mb-6 md:mb-8 text-gray-300">Say something to start a live chat!</p>
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h2A2.5 2.5 0 0 1 9 5.5V6a1 1 0 0 1-1 1H4.5A1.5 1.5 0 0 0 3 8.5v7A1.5 1.5 0 0 0 4.5 17H8a1 1 0 0 1 1 1v.5A2.5 2.5 0 0 1 6.5 21h-2A2.5 2.5 0 0 1 2 18.5v-13Z" fill="#fff"/><path d="M16 3h2A2.5 2.5 0 0 1 20.5 5.5v13A2.5 2.5 0 0 1 18 21h-2A2.5 2.5 0 0 1 13.5 18.5V18a1 1 0 0 1 1-1h3.5A1.5 1.5 0 0 0 19 15.5v-7A1.5 1.5 0 0 0 17.5 7H14a1 1 0 0 1-1-1v-.5A2.5 2.5 0 0 1 16 3Z" fill="#fff"/></svg>
                  <span className="text-sm md:text-base">+1012 3456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75Zm1.5 0v.511l8.25 5.5 8.25-5.5V6.75a.75.75 0 0 0-.75-.75h-15a.75.75 0 0 0-.75.75Zm17.25 1.978-7.8 5.2a1.5 1.5 0 0 1-1.65 0l-7.8-5.2v8.522c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V8.728Z" fill="#fff"/></svg>
                  <span className="text-sm md:text-base">ReadySocial@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 11 9 11s9-5.75 9-11c0-4.97-4.03-9-9-9Zm0 13.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" fill="#fff"/></svg>
                  <span className="text-sm md:text-base">132 Dartmouth Street Boston, Massachusetts</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 md:px-8 pb-6 md:pb-8 mt-auto">
              <a href="https://x.com/readyy_social?t=a4UdyA1lPJRtojDSLnyxyQ&s=08" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:scale-110 transition-transform">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.185 10.333l2.822-3.334h-1.141l-2.404 2.849-1.923-2.849H8.012l2.955 4.299-2.955 3.702h1.141l2.537-3.217 2.027 3.217h2.527l-3.059-4.667zM11.672 11.269l-0.452-0.647-2.45-3.397h1.411l1.924 2.663 0.452 0.647 2.579 3.564h-1.411l-2.053-2.83z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ready_social?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1W5wNcWBAu/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition-transform">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
            </div>
            {/* Decorative Circles */}
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] md:w-[269px] md:h-[269px] pointer-events-none select-none">
              <div className="absolute bg-white opacity-20 rounded-full w-full h-full right-[-80px] md:right-[-110px] bottom-[-80px] md:bottom-[-110px]" />
              <div className="absolute bg-white opacity-10 rounded-full w-[100px] h-[100px] md:w-[138px] md:h-[138px] right-[30px] md:right-[40px] bottom-[50px] md:bottom-[70px]" />
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="bg-white flex-1 p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 min-h-[500px] lg:min-h-[600px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">First Name</label>
                <input type="text" className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-gray-900 placeholder-gray-900" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">Last Name</label>
                <input type="text" className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-gray-900 placeholder-gray-900" placeholder="Doe" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">Email</label>
                <input type="email" className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-gray-900 placeholder-gray-900" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">Phone Number</label>
                <input type="tel" className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent text-gray-900 placeholder-gray-900" placeholder="+1 012 3456 789" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-900">Select Subject?</label>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[...Array(4)].map((_, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer text-gray-900">
                    <input type="radio" name="subject" className="accent-black" />
                    <span className="text-xs md:text-sm font-medium">General Inquiry</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-900">Message</label>
              <textarea className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent min-h-[60px] md:min-h-[80px] resize-none text-gray-900 placeholder-gray-900" placeholder="Write your message.." />
            </div>
            <div className="flex justify-end mt-auto">
              <button type="submit" className="bg-black text-white font-semibold px-6 md:px-8 py-3 rounded-lg shadow hover:bg-gray-900 transition-colors text-sm md:text-base">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
} 