export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 shadow-inner">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* About Us */}
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
          <h3 className="font-bold text-xl mb-3">Ready Social</h3>
          <p className="text-gray-600 text-sm mb-4">Ready Social is a platform designed to help users create meaningful human connections across the areas of Life, Love, and Work.</p>
          <div className="flex gap-4 mb-4">
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform"><svg width="24" height="24" fill="currentColor" className="text-black"><circle cx="12" cy="12" r="12" fill="#F3F4F6"/><path d="M15.36 8.64h-1.2c-.24 0-.48.24-.48.48v.96h1.68l-.24 1.68h-1.44v4.32h-1.92v-4.32h-1.2v-1.68h1.2v-1.2c0-1.2.96-2.16 2.16-2.16h1.2v1.68z" fill="#22292F"/></svg></a>
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform"><svg width="24" height="24" fill="currentColor" className="text-black"><circle cx="12" cy="12" r="12" fill="#F3F4F6"/><path d="M16.8 8.4a1.2 1.2 0 0 0-1.2-1.2h-5.2a1.2 1.2 0 0 0-1.2 1.2v5.2a1.2 1.2 0 0 0 1.2 1.2h5.2a1.2 1.2 0 0 0 1.2-1.2v-5.2zm-1.2 6.4h-5.2a2.4 2.4 0 0 1-2.4-2.4v-5.2a2.4 2.4 0 0 1 2.4-2.4h5.2a2.4 2.4 0 0 1 2.4 2.4v5.2a2.4 2.4 0 0 1-2.4 2.4zm-2.6-5.2a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zm3.2.4a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0z" fill="#22292F"/></svg></a>
          </div>
          {/* Newsletter Signup */}
          <form className="flex w-full max-w-xs">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-l-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5CC3EB] bg-white"
            />
            <button
              type="submit"
              className="bg-[#5CC3EB] hover:bg-[#38BDF8] text-white font-semibold px-4 py-2 rounded-r-lg text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Customer Service */}
        <div className="flex-1 min-w-[180px] mb-8 md:mb-0">
          <h4 className="font-semibold mb-3">Customer Service</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li><a href="#" className="hover:text-[#5CC3EB]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#5CC3EB]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#5CC3EB]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#5CC3EB]">Terms & Conditions</a></li>
          </ul>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[180px] mb-8 md:mb-0">
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li><a href="#" className="hover:text-[#5CC3EB]">Home</a></li>
            <li><a href="#" className="hover:text-[#5CC3EB]">About Us</a></li>
            <li><a href="#" className="hover:text-[#5CC3EB]">How It Works</a></li>
            <li><a href="#" className="hover:text-[#5CC3EB]">Book a session</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="font-semibold mb-3">Contact Info</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>+102 3456 789</li>
            <li>ReadySocial@gmail.com</li>
            <li>132 Dartmouth Street<br/>Boston, Massachusetts</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs text-gray-400">
        Copyright © 2025 <span className="text-[#5CC3EB]">Ready Social</span>. All Rights Reserved.
      </div>
    </footer>
  );
} 