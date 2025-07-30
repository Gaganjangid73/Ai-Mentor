import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/WebLogo.png";
import Dashboard from "../assets/spacedashboard.png";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar
        logo={Logo}
        navLinks={["Home", "Privacy Policy", "Terms & Condition", "Contact"]}
        loginText="Login"
        loginIcon={Dashboard}
      />
      <div className="bg-gradient-to-b from-black via-[#020617] to-black text-white min-h-screen py-12 px-0 w-full">
        <div className="w-full mt-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-12 w-full">
            Privacy Policy
          </h1>

          <section className="space-y-6 text-sm  mt-28 md:text-base leading-relaxed w-full px-6 md:px-20 mx-4 md:mx-20">
            <div>
              <h2 className="font-semibold text-lg mb-1">Privacy Policy</h2>
              <p><strong>Effective Date:</strong> 19/06/2025</p>
              <p className="mt-2">
                At aimaster.com, your privacy is critically important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services related to advanced medical image analysis and personalized health insights powered by artificial intelligence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2">1. Information We Collect</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other identifiers you provide.</li>
                <li><strong>Health Data:</strong> Medical images, health metrics, and other personal health information you upload.</li>
                <li><strong>Usage Data:</strong> Device information, IP address, browser type, access times, and pages viewed.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2">2. How We Use Your Information</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>To provide personalized medical insights.</li>
                <li>To improve our AI algorithms and platform.</li>
                <li>To respond to inquiries and offer customer support.</li>
                <li>To comply with legal and regulatory requirements.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2">3. Data Sharing & Disclosure</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>We do not sell your personal data.</li>
                <li>We may share data with trusted partners for technical services, under strict confidentiality.</li>
                <li>We may disclose information if required by law or to protect rights and safety.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2">4. Data Security</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>We implement industry-standard encryption and access controls.</li>
                <li>Your medical data is stored securely and is accessible only to authorized personnel.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2">5. Your Rights</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>You can request access to or deletion of your personal data.</li>
                <li>You can opt out of non-essential data usage or request data correction.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2">6. Cookies & Tracking</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>We use cookies to enhance your user experience.</li>
                <li>You can control cookie settings through your browser.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2">7. Third-Party Services</h3>
              <p>
                Our site may include links to third-party tools or services. We are not responsible for their privacy practices.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2">8. Children’s Privacy</h3>
              <p>
                Our services are not intended for users under the age of 16. We do not knowingly collect data from minors.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2">9. Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy periodically. We will notify you of any significant changes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2">Contact Us</h3>
              <p>
                If you have any questions, contact us at: <a href="mailto:info@aimaster.com" className="text-cyan-400 underline">info@aimaster.com</a> or <a href="https://aimaster.com/contact" className="text-cyan-400 underline">aimaster.com/contact</a>
              </p>
            </div>
          </section>

          <footer className="mt-20 border-t w-full border-gray-700 pt-6 text-center text-xs text-gray-400">
            <p>© 2025 AI Medical Assistant. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
