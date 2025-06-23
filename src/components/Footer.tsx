'use client';

export default function Footer() {
  const scrollToComponent = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready Social</h3>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">About Us</h4>
            <p className="text-sm text-gray-600 mb-4">
              Ready Social is a platform designed to help users create meaningful human connections across the areas of Life, Love, and Work.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.25 18.75H18.75V27H15.75V18.75H14.25V16.395L15.75 16.3935V14.8185C15.75 13.1445 16.599 12 18.423 12L20.247 12.0045V14.445H18.9615C18.7605 14.445 18.75 14.5515 18.75 14.85V16.395H20.3175L20.25 18.75Z" fill="black"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM24.375 11.25H11.625V24.75H24.375V11.25ZM18 22.5C20.4825 22.5 22.5 20.4825 22.5 18C22.5 15.5175 20.4825 13.5 18 13.5C15.5175 13.5 13.5 15.5175 13.5 18C13.5 20.4825 15.5175 22.5 18 22.5ZM21.375 15.75C21.375 16.443 20.8185 17.0625 20.25 17.0625C19.6815 17.0625 19.125 16.443 19.125 15.75C19.125 15.057 19.6815 14.4375 20.25 14.4375C20.8185 14.4375 21.375 15.057 21.375 15.75Z" fill="black"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Customer Service</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Contact Us</a></li>
              <li><a href="#" className="hover:text-black">FAQs</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <button 
                  onClick={() => scrollToComponent('hero-left')} 
                  className="hover:text-black cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToComponent('hero-banner')} 
                  className="hover:text-black cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToComponent('how-it-works')} 
                  className="hover:text-black cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToComponent('meet-our-listener')} 
                  className="hover:text-black cursor-pointer"
                >
                  Book a session
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>+1012 3456 789</li>
              <li>ReadySocial@gmail.com</li>
              <li>132 Dartmouth Street<br/>Boston, Massachusetts</li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gray-900 mt-12 pt-8 text-left pl-4">
          <p className="text-sm font-semibold text-gray-900">Copyright © 2025 <span className="text-[#5CC3EB]">Ready Socials</span>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 