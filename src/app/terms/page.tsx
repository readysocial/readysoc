import React from "react";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto max-w-3xl px-4 py-8 md:py-12 flex-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 md:mb-10 text-black">Terms and Conditions</h1>
        <p className="mb-6 md:mb-8 text-sm md:text-base lg:text-lg text-gray-800">Welcome to Ready Social! These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Ready Social platform, services, and features (collectively, the &ldquo;Services&rdquo;), including but not limited to creating connections across life, love, and work, and participating in listener sessions. By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, please discontinue use of the Services.</p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">About Ready Social</h2>
        <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>Ready Social is a platform designed to facilitate meaningful human connections across three key areas: finding personal growth, support, and friendship., building relationships or exploring romantic connections, and expanding professional networks and exploring career opportunities.</li>
          <li>We also provide Listener Sessions, where users can seek empathetic listeners for personal, emotional, or professional support.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">Eligibility</h2>
        <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>You must be at least 18 years old to create an account or use the Services. By using the Services, you represent that you have the legal capacity to enter into a binding agreement.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">Account Registration</h2>
        <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>You must register an account to access certain features of Ready Social.</li>
          <li>You agree to provide accurate, complete, and up-to-date information during registration and to update your account as necessary.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
          <li>If you suspect unauthorized access to your account, notify us immediately at ready social email.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">Community Guidelines</h2>
        <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>Do not engage in harassment, discrimination, hate speech, or abusive behavior.</li>
          <li>Use your real identity and do not impersonate others or create fake accounts.</li>
          <li>Always obtain explicit consent before sharing personal or sensitive information with other users.</li>
          <li>Do not use the platform for illegal activities, spam, or solicitation.</li>
          <li>Do not upload or share content that is violent, obscene, defamatory, or otherwise inappropriate.</li>
          <li>We reserve the right to suspend or terminate accounts that violate these guidelines.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">Listener Sessions</h2>
        <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>Listener Sessions are designed to provide users with empathetic support.</li>
          <li>Listener Sessions are not a substitute for professional counseling, therapy, or medical advice.</li>
          <li>Listeners are not required to provide solutions but are encouraged to offer empathetic support.</li>
          <li>Any inappropriate behavior during Listener Sessions should be reported immediately to contactreadysocial@gmail.com.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">Privacy and Data Use</h2>
        <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>Your privacy is important to us. Please review our privacy policy for details on how we collect, use, and protect your personal data.</li>
          <li>Ready Social may collect personal information such as your name, email, and connection preferences to provide Services.</li>
          <li>By using the platform, you consent to the processing of your data as outlined in the Privacy Policy.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">Intellectual Property</h2>
        <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>All content on Ready Social&apos;s website, including logos, designs, text, and software, is owned by or licensed to Ready Social.</li>
          <li>You may not copy, modify, distribute, or create derivative works from Ready Social intellectual property without explicit written consent.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">Limitations of Liability</h2>
        <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>Ready Social is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make no warranties regarding the accuracy, reliability, or availability of the Services.</li>
          <li>To the fullest extent permitted by law, Ready Social is not liable for:
            <ul className="list-disc pl-4 md:pl-6">
              <li>Any loss or damage resulting from interactions between users.</li>
              <li>Emotional or mental distress arising from the use of Listener Sessions.</li>
              <li>Any indirect, incidental, or consequential damages, even if advised of the possibility.</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">User Responsibilities</h2>
        <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>You are solely responsible for interactions and relationships formed on the platform.</li>
          <li>You are responsible for your content and communications shared on Ready Social.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">Termination</h2>
        <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>We reserve the right to suspend or terminate your account if you violate these Terms, misuse the platform, or engage in harmful behavior.</li>
          <li>Termination may include disabling your account and restricting access to all or part of the Services.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">Governing Law</h2>
        <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">Modifications to the Terms</h2>
        <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>We may modify these Terms at any time. Changes will take effect immediately upon posting.</li>
          <li>Your continued use of the Services after updates constitutes acceptance of the revised Terms.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-6 md:mt-8">Contact Us</h2>
        <ul className="list-disc pl-4 md:pl-6 mb-4 md:mb-6 text-sm md:text-base text-gray-800">
          <li>If you have any questions or concerns about these Terms, please contact us:</li>
          <li>Email: contactreadysocial@gmail.com</li>
          <li>Phone: 08162097489</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
} 