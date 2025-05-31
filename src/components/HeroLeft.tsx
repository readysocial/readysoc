export default function HeroLeft() {
  return (
    <div className="flex flex-col items-start justify-center gap-10 max-w-[640px] pt-8">
      <h1 className="text-[64px] font-bold text-black leading-[1.1]">
        Real Conversations
        <br />
        <span className="inline-block">. Safe Space . Just</span>
        <br />
        <span className="inline-block">for You</span>
      </h1>
      <p className="text-[#4B5563] text-xl leading-[1.6] max-w-[600px]">
        Ready social provides a safe, secure space to share your thoughts anonymously with trained listeners. Whether you are celebrating a win, venting a frustration, someone i always here to listen.
      </p>
      <a
        href="#"
        className="mt-2 px-12 py-5 bg-[#EF4444] text-white text-xl font-semibold rounded-xl hover:bg-red-600 transition-colors"
      >
        Download Now
      </a>
    </div>
  );
} 