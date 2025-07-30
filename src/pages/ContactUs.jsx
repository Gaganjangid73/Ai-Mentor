import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/WebLogo.png";
import Dashboard from "../assets/spacedashboard.png";

const ContactUs = () => {
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
           Contact Us
          </h1>

          <section className="space-y-6 text-sm mt-28 md:text-base leading-relaxed w-full px-6 md:px-20 mx-4 md:mx-20 text-gray-300">
            <div>
              <h2 className="font-semibold text-lg mb-1 text-white">Contact Us</h2>
              <p><strong className="text-white">Effective Date:</strong> 19/06/2025</p>
              <p className="mt-2">
                Welcome to aimaster.com. By accessing or using our platform, you agree to the following Terms and Conditions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-white">1. Use of the Platform</h3>
              <p>You agree to use our platform solely for lawful purposes and in accordance with all applicable laws and regulations.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-white">2. Medical Disclaimer</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Our services provide AI-powered health insights based on the data you upload.</li>
                <li>This platform is not a substitute for professional medical advice, diagnosis, or treatment.</li>
                <li>Always consult with a licensed healthcare provider for medical concerns.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-white">3. User Responsibilities</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>You are responsible for the accuracy of the information you provide.</li>
                <li>You must not upload any content that violates laws, third-party rights, or is harmful in nature.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-white">4. Intellectual Property</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>All content, algorithms, and technology on our platform are owned by or licensed to [Your Website Name].</li>
                <li>You may not copy, reproduce, or distribute any part of our service without prior written consent.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-white">5. Account & Security</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li>You must notify us immediately of any unauthorized use of your account.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-white">6. Limitation of Liability</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>We are not liable for any direct, indirect, or incidental damages resulting from the use of our platform.</li>
                <li>We do not guarantee that the platform will be error-free or uninterrupted.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-white">7. Termination</h3>
              <p>We reserve the right to suspend or terminate your access if you violate these Terms.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-white">8. Modifications</h3>
              <p>We may update these Terms at any time. Continued use of the service indicates your acceptance of the revised terms.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-white">9. Governing Law</h3>
              <p>These Terms are governed by the laws of [Your Country/State], without regard to conflict of law principles.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4 mb-2 text-white">Contact Us:</h3>
              <p>If you have any questions or concerns, reach out at <a href="mailto:info@aimaster.com" className="text-cyan-400 underline">info@aimaster.com</a> or <a href="https://aimaster.com/contact" className="text-cyan-400 underline">aimaster.com/contact</a></p>
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

export default ContactUs;