import React from "react";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import PersonalInfo from "./pages/PersonalInfo.jsx";
import Medicalhistory from "./pages/Medicalhistory.jsx";
import UploadImagepage from "./pages/UploadImagepage.jsx";
import PrivacyPolicy from "./pages/Privacypolicy.jsx";
import TermsConditions from "./pages/Term&Condition.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import { Routes, Route } from "react-router-dom";
import Chatbot from "./pages/Chatbot.jsx";
import HomePage from "./pages/Home.jsx";

// If you want to show a Home page, you need to import it
// import Home from "./pages/Home.jsx"; // Uncomment and create Home.jsx if needed

function App() {
  return (
    <Routes>
      {/* Remove duplicate "/" route and use only one default route */}
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/Home" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/personalinfo" element={<PersonalInfo />} />
      <Route path="/medicalhistory" element={<Medicalhistory />} />
      <Route path="/uploadimage" element={<UploadImagepage />} />
      <Route path="/Chatbot" element={<Chatbot />} />
    </Routes>
    // <HomePage/>
  );
}

export default App;
