const BENEFITS = [
  {
    title: "Priority Connections",
    description:
      "Move to the top of the queue when requesting to speak with listeners.",
  },
  {
    title: "Instant Unlocks",
    description:
      "Access exclusive live sessions and private chat rooms instantly.",
  },
  {
    title: "No Expiry",
    description:
      "Your purchased sparks stay in your balance until you decide to use them.",
  },
];

export default function WhyUseSpark() {
  return (
    <section className="mt-4">
      <h2 className="text-lg font-bold tracking-tight text-[#0E121B]">
        Why Use Spark?
      </h2>
      <p className="mt-1 max-w-xl text-sm text-[#5A5758]">
        Sparks power bookings and listener sessions on Ready Social.
      </p>

      <div className="mt-6 grid gap-6 border-t border-black/8 pt-6 sm:grid-cols-3 sm:gap-8">
        {BENEFITS.map((benefit) => (
          <div key={benefit.title}>
            <h3 className="text-sm font-bold text-[#0E121B]">{benefit.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5A5758]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
