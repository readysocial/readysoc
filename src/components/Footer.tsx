'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const handleNavigation = (id: string) => {
    if (isHomePage) {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home page with hash
      router.push(`/#${id}`);
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
              <a href="https://www.facebook.com/share/1W5wNcWBAu/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.25 18.75H18.75V27H15.75V18.75H14.25V16.395L15.75 16.3935V14.8185C15.75 13.1445 16.599 12 18.423 12L20.247 12.0045V14.445H18.9615C18.7605 14.445 18.75 14.5515 18.75 14.85V16.395H20.3175L20.25 18.75Z" fill="black"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ready_social?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="18" fill="black"/>
                  <path d="M18 11.6C14.4 11.6 11.6 14.4 11.6 18C11.6 21.6 14.4 24.4 18 24.4C21.6 24.4 24.4 21.6 24.4 18C24.4 14.4 21.6 11.6 18 11.6ZM18 22.4C15.5 22.4 13.6 20.5 13.6 18C13.6 15.5 15.5 13.6 18 13.6C20.5 13.6 22.4 15.5 22.4 18C22.4 20.5 20.5 22.4 18 22.4Z" fill="white"/>
                  <circle cx="24.8" cy="11.2" r="1.2" fill="white"/>
                  <path d="M26.2 7.8H9.8C8.7 7.8 7.8 8.7 7.8 9.8V26.2C7.8 27.3 8.7 28.2 9.8 28.2H26.2C27.3 28.2 28.2 27.3 28.2 26.2V9.8C28.2 8.7 27.3 7.8 26.2 7.8ZM26.2 26.2H9.8V9.8H26.2V26.2Z" fill="white"/>
                </svg>
              </a>
              <a href="https://x.com/readyy_social?t=a4UdyA1lPJRtojDSLnyxyQ&s=08" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM19.7781 15.5L24.0311 10.5H22.3175L18.7086 14.7729L15.8297 10.5H11.25L15.6751 16.9479L11.25 22.125H12.9636L16.7437 17.675L19.7701 22.125H24.3498L19.7781 15.5ZM17.5089 16.9034L16.8365 15.9361L13.1625 10.8939H15.2789L18.1726 14.8764L18.845 15.8437L22.6789 21.1125H20.5625L17.5089 16.9034Z" fill="black"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Customer Service</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {/* <li>
                <Link href="/contact" className="hover:text-black">Contact Us</Link>
              </li> */}
              <li>
                <button 
                  onClick={() => handleNavigation('faq')} 
                  className="hover:text-black cursor-pointer"
                >
                  FAQs
                </button>
              </li>
              <li><Link href="/privacy" className="hover:text-black">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-black">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <button 
                  onClick={() => handleNavigation('home')} 
                  className="hover:text-black cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('about')} 
                  className="hover:text-black cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('how-it-works')} 
                  className="hover:text-black cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.tayor99.readysocial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black cursor-pointer"
                >
                  Book a session
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>+234 901 796 4775</li>
              <li>ReadySocial@gmail.com</li>
              <li>Lekki Phase 1<br/>Lagos, Nigeria</li>
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