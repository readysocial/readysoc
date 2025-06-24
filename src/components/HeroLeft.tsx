export default function HeroLeft() {
  return (
    <div id="hero-left" className="flex flex-col items-start justify-center gap-6 md:gap-10 max-w-[640px] pt-4 md:pt-8 px-4 md:px-0">
      <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-black leading-[1.1] text-center md:text-left">
        <span className="block whitespace-nowrap">Real Conversations . Safe</span>
        <span className="block whitespace-nowrap">Space . Just for You</span>
      </h1>
      <p className="text-[#4B5563] text-base md:text-xl leading-[1.6] max-w-[600px] text-center md:text-left">
        Ready social provides a safe, secure space to share your thoughts anonymously with trained listeners. Whether you are celebrating a win, venting a frustration, someone i always here to listen.
      </p>
      <a
        href="https://play.google.com/store/apps/details?id=com.tayor99.readysocial"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 px-8 md:px-12 py-4 md:py-5 bg-[#EF4444] text-white text-lg md:text-xl font-semibold rounded-xl hover:bg-red-600 transition-colors w-full md:w-auto text-center"
      >
        Download Now
      </a>
    </div>
  );
} 