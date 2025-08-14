"use client";

import { useEffect } from "react";

const OpenAppPage = () => {
  useEffect(() => {
    const appScheme = "readysocial://";
    const appStoreLink =
      "https://apps.apple.com/us/app/readysocial/id1234567890"; // Replace with actual App Store link
    const playStoreLink =
      "https://play.google.com/store/apps/details?id=com.tayor99.readysocial"; // Replace with actual Play Store link

    // Use only userAgent and vendor for browser detection (window.opera is deprecated and not standard)
    const userAgent = navigator.userAgent || navigator.vendor;

    // Try to open the app
    window.location.href = appScheme;

    // Fallback to app stores after a delay
    const timeout = setTimeout(() => {
      if (/android/i.test(userAgent)) {
        window.location.href = playStoreLink;
      } else if (
        /iPad|iPhone|iPod/.test(userAgent) &&
        (window as unknown as { MSStream?: unknown }).MSStream === undefined
      ) {
        window.location.href = appStoreLink;
      }
    }, 1000); // 1 second delay

    // Clear timeout if the app opens (page navigates away)
    window.addEventListener("blur", () => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("blur", () => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Opening ReadySocial App...</h1>
      <p className="text-lg mb-8 text-center">
        If the app does not open automatically, please click one of the links
        below:
      </p>
      <div className="flex space-x-4">
        <a
          href="https://apps.apple.com/us/app/readysocial/id1234567890"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
        >
          Download on the App Store
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.tayor99.readysocial"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
        >
          Get it on Google Play
        </a>
      </div>
    </div>
  );
};

export default OpenAppPage;
