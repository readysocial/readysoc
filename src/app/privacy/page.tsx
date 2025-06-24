import React from "react";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto max-w-3xl px-4 py-12 flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-black">Privacy Policy</h1>
        <p className="mb-8 text-base md:text-lg text-gray-800">We are committed to protecting your privacy and ensuring that your personal data is handled responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. By accessing or using Ready Social, you agree to the practices described in this policy. If you do not agree, please do not use our platform.</p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-8">1. Who We Are</h2>
        <p className="mb-6 text-gray-800">Ready Social is a platform designed to help users create meaningful connections across three core areas: Life, Love, and Work. Our mission is to foster genuine human connections while prioritizing your privacy and data security.</p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-8">2. Information We Collect</h2>
        <p className="mb-2 text-gray-800">We collect various types of information to enhance your experience on Ready Social. This includes:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li><span className="font-semibold">Personal Information</span>
            <ul className="list-disc pl-6">
              <li>Name, username, profile picture, and other identifiers you provide during registration.</li>
              <li>Contact information such as email address and phone number.</li>
              <li>Demographic details like gender, age, and location.</li>
            </ul>
          </li>
          <li><span className="font-semibold">Activity Data</span>
            <ul className="list-disc pl-6">
              <li>Information about your interactions on the platform, such as connections made, messages sent, or posts shared.</li>
              <li>Engagement metrics, such as likes, comments, and shares.</li>
            </ul>
          </li>
          <li><span className="font-semibold">Device Information</span>
            <ul className="list-disc pl-6">
              <li>Device type, operating system, IP address, and browser type.</li>
              <li>Log data, including the time and duration of your visits.</li>
            </ul>
          </li>
          <li><span className="font-semibold">Sensitive Information</span> Depending on how you use the platform, you may choose to share sensitive information, such as relationship preferences, professional interests, or health-related details. Sharing this data is entirely optional.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-8">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-800">
          <li>Facilitate meaningful connections across Life, Love, and Work.</li>
          <li>Personalize your experience by suggesting connections, content, and opportunities tailored to your interests.</li>
          <li>Enable communication between users via messages, notifications, and updates.</li>
          <li>Monitor platform performance and troubleshoot technical issues.</li>
          <li>Conduct research and analytics to improve our services.</li>
          <li>Comply with legal obligations and protect against fraud or unauthorized use.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-8">4. How We Share Your Information</h2>
        <p className="mb-2 text-gray-800">We may share your information in the following circumstances:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-800">
          <li><span className="font-semibold">With Other Users</span> When you interact with others on Ready Social (e.g., sending messages or making connections), your profile information may be visible to them.</li>
          <li><span className="font-semibold">With Service Providers</span> We work with third-party service providers to perform platform functions, such as hosting, analytics, and payment processing. These providers are bound by confidentiality agreements.</li>
          <li><span className="font-semibold">Legal and Compliance Obligations</span> We may disclose your information to comply with legal requirements, protect our rights, or prevent misuse of the platform.</li>
          <li><span className="font-semibold">In Case of a Merger or Acquisition</span> If Ready Social undergoes a merger, acquisition, or sale, your data may be transferred to the new entity.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-8">Your Privacy Choices</h2>
        <p className="mb-2 text-gray-800">You have control over your personal information. Depending on your jurisdiction, you may have the following rights:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-800">
          <li>Access and Review: Request access to your personal data.</li>
          <li>Edit and Update: Correct inaccurate or incomplete information.</li>
          <li>Delete: Request the deletion of your data.</li>
          <li>Withdraw Consent: Opt-out of specific data processing activities.</li>
          <li>Portability: Receive your data in a portable format. To exercise your rights, contact us at <span className="font-semibold">contactreadysocial@gmail.com</span>.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-8">Data Security</h2>
        <p className="mb-6 text-gray-800">We implement robust technical, administrative, and organizational measures to protect your data against unauthorized access, loss, or misuse. However, no system is entirely secure, and we cannot guarantee the absolute security of your information.</p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-8">Data Retention</h2>
        <p className="mb-6 text-gray-800">We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, or resolve disputes. If you deactivate your account, we will delete your data unless retention is required by law.</p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-8">Cookies and Tracking Technologies</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-800">
          <li>Enhance platform functionality.</li>
          <li>Provide personalized content.</li>
          <li>Analyze user behavior and improve our services. You can manage your cookie preferences through your browser settings.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-8">Children's Privacy</h2>
        <p className="mb-6 text-gray-800">Ready Social is not intended for users under the age of 18. We do not knowingly collect personal data from minors. If we become aware of such data collection, we will delete it promptly.</p>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 mt-8">Modifications to This Privacy Policy</h2>
        <p className="mb-6 text-gray-800">We may update this Privacy Policy periodically to reflect changes in our practices or for legal reasons. We encourage you to review it regularly. Significant changes will be communicated to you via email or in-app notifications.</p>
      </div>
      <Footer />
    </div>
  );
} 