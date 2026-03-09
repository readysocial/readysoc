import React from "react";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto max-w-3xl px-4 py-8 md:py-12 flex-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 md:mb-10 text-black">
          Terms of Service
        </h1>
        <p className="text-center text-sm mb-8 font-semibold text-gray-600">
          Effective Date: 5th of March 2026.
        </p>
        <p className="mb-6 md:mb-8 text-sm md:text-base lg:text-lg text-gray-800">
          Welcome to Ready Social! These Terms of Service (&ldquo;Terms&rdquo;)
          govern your access to and use of Ready Social platform, services, and
          features (collectively, the &ldquo;Services&rdquo;), including but not
          limited to creating connections across life, love, and work, and
          participating in listener sessions. By accessing or using our
          Services, you agree to be bound by these Terms. If you do not agree,
          please discontinue use of the Services.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          About Ready Social
        </h2>
        <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          Ready Social is a platform designed to facilitate meaningful human
          connections across three key areas: finding personal growth, support,
          and friendship., building relationships or exploring romantic
          connections, and expanding professional networks and exploring career
          opportunities.
        </p>
        <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          We also provide Listener Sessions, where users can seek empathetic
          listeners for personal, emotional, or professional support.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          Eligibility
        </h2>
        <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          You must be at least 18 years old to create an account or use the
          Services. By using the Services, you represent that you have the legal
          capacity to enter into a binding agreement.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          Account Registration
        </h2>
        <ul className="list-disc pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>
            You must register an account to access certain features of Ready
            Social.
          </li>
          <li>
            You agree to provide accurate, complete, and up-to-date information
            during registration and to update your account as necessary.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            login credentials and for all activities that occur under your
            account.
          </li>
          <li>
            If you suspect unauthorized access to your account, notify us
            immediately at ready social email.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          Community Guidelines
        </h2>
        <p className="mb-4 text-sm md:text-base text-gray-800">
          To foster a safe and respectful environment, all users of Ready Social
          must adhere to the following rules:
        </p>
        <ul className="list-disc pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>
            Do not engage in harassment, discrimination, hate speech, or abusive
            behavior.
          </li>
          <li>
            Do not impersonate others or create fake accounts. You can create an
            anonymous profile to protect yourself and your information.
          </li>
          <li>
            Always obtain explicit consent before sharing personal or sensitive
            information with other users.
          </li>
          <li>
            Do not use the platform for illegal activities, spam, or
            solicitation.
          </li>
          <li>
            Do not upload or share content that is violent, obscene, defamatory,
            or otherwise inappropriate.
          </li>
          <li>
            We reserve the right to suspend or terminate accounts that violate
            these guidelines.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          Listener Sessions
        </h2>
        <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          Listener Sessions are designed to provide users with empathetic
          support. However, listener Sessions are not a substitute for
          professional counseling, therapy, or medical advice. Listeners are not
          required to provide solutions but are encouraged to offer empathetic
          support.
        </p>
        <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          Any inappropriate behavior during Listener Sessions should be reported
          immediately to{" "}
          <span className="font-semibold">contactreadysocial@gmail.com</span>.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          Privacy and Data Use
        </h2>
        <p className="mb-4 text-sm md:text-base text-gray-800">
          Your privacy is important to us. Please review our privacy policy for
          details on how we collect, use, and protect your personal data. Ready
          Social may collect personal information such as your name, email, and
          connection preferences to provide Services.
        </p>
        <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          By using the platform, you consent to the processing of your data as
          outlined in the Privacy Policy.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          Intellectual Property
        </h2>
        <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          All content on Ready Social&apos;s website, including logos, designs,
          text, and software, is owned by or licensed to Ready Social. You may
          not copy, modify, distribute, or create derivative works from Ready
          Social intellectual property without explicit written consent.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          Limitations of Liability
        </h2>
        <p className="mb-4 text-sm md:text-base text-gray-800">
          Ready Social is provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis. We make no warranties regarding the accuracy,
          reliability, or availability of the Services.
        </p>
        <p className="mb-2 text-sm md:text-base text-gray-800">
          To the fullest extent permitted by law, Ready Social is not liable
          for:
        </p>
        <ul className="list-disc pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>Any loss or damage resulting from interactions between users.</li>
          <li>
            Emotional or mental distress arising from the use of Listener
            Sessions.
          </li>
          <li>
            Any indirect, incidental, or consequential damages, even if advised
            of the possibility.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          User Responsibilities
        </h2>
        <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          You are solely responsible for interactions and relationships formed
          on the platform. Your content and communications shared on Ready
          Social.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          Monetization and Use of Sparks
        </h2>
        <p className="mb-4 text-sm md:text-base text-gray-800">
          The platform operates on a token-based system through which users
          purchase digital tokens known as Sparks. Sparks are virtual tokens
          that enable users to book sessions on the platform. Each Spark
          entitles a user to one session, and a session can only be booked where
          the user has sufficient Sparks available in their account wallet.
          Sparks remain in the user&apos;s wallet until they are redeemed for a
          session booking.
        </p>
        <p className="mb-4 text-sm md:text-base text-gray-800">
          All purchases of Sparks are final and non-refundable once completed.
          Sparks do not constitute legal tender, stored monetary value, or any
          form of financial instrument, and they cannot be redeemed for cash or
          transferred outside the platform. Sparks represent a digital credit
          that users may utilise to access sessions as part of their investment
          in their emotional well-being.
        </p>
        <p className="mb-6 text-sm md:text-base text-gray-800">
          Upon booking a session, one Spark will be deducted from the
          user&apos;s wallet. Where a user attends the scheduled session, the
          Spark used for the booking is deemed fully redeemed. Where a user
          fails to attend a scheduled session, the Spark used for the booking
          will still be considered redeemed and will not be reinstated or
          refunded, except where otherwise determined by the platform at its
          sole discretion in exceptional circumstances.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          Termination
        </h2>
        <ul className="list-disc pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>
            We reserve the right to suspend or terminate your account if you
            violate these Terms, misuse the platform, or engage in harmful
            behavior.
          </li>
          <li>
            Termination may include disabling your account and restricting
            access to all or part of the Services.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          Governing Law
        </h2>
        <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          These Terms are governed by and construed in accordance with the laws
          of the Federal Republic of Nigeria.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          Modifications to the Terms
        </h2>
        <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          We may modify these Terms at any time. Changes will take effect
          immediately upon posting. Your continued use of the Services after
          updates constitutes acceptance of the revised Terms.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">
          Contact Us
        </h2>
        <ul className="list-disc pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>
            If you have any questions or concerns about these Terms, please
            contact us:
          </li>
          <li>
            Email:{" "}
            <span className="font-semibold">contactreadysocial@gmail.com</span>
          </li>
          <li>
            Phone: <span className="font-semibold">08162097489</span>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
