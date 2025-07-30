import React, { useState } from "react";
import Sidebar from "../components/SlideBar";
import PatientInfo from "../components/PatientInfo";
import ChatWindow from "../components/ChatWindow";
import Navbar from "../components/Navbar";
import Dashboard from "../assets/spacedashboard.png";
import Logo from "../assets/WebLogo.png";

const Chatbot = () => {
  const welcomeMessage = {
    from: "bot",
    text: `**Welcome to Your Medical Assistant**
I'm here to help you understand your medical analysis. To get started, we’ll need some information from you.
**What I can help you with**
• Understanding your medical conditions  
• Treatment recommendations  
• Risk factors and prevention  
• General medical questions  
Would you like to begin by providing your medical information?`
  };

  const [messages, setMessages] = useState([welcomeMessage]);
  const [historyList, setHistoryList] = useState([]);
  const [sessionTitles, setSessionTitles] = useState([]);
  const [patient, setPatient] = useState({
    name: "John Doe",
    age: 35,
    gender: "Male",
    images: [],
  });

  const handleSend = (text) => {
    const userMessage = { from: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botReply = { from: "bot", text: "Can you tell me more?" };
      setMessages((prev) => [...prev, botReply]);
    }, 500);
  };

  const handleNewSession = () => {
    if (messages.length > 0) {
      setHistoryList((prev) => [...prev, [...messages]]);
      setSessionTitles((prev) => [...prev, `Session ${prev.length + 1}`]);
    }
    setMessages([welcomeMessage]);
  };

  const handleClearChat = () => {
    setMessages([welcomeMessage]);
  };

  const handleLoadSession = (sessionIndex) => {
    const selectedSession = historyList[sessionIndex];
    if (selectedSession) {
      setMessages([...selectedSession]);
    }
  };

  // Prevent scrolling on the body when this component is mounted
  React.useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      <Navbar
        logo={Logo}
        navLinks={["Home", "Privacy Policy", "Terms & Condition", "Contact"]}
      />
      <div
        className="flex flex-1 gap-4 p-4 mt-14"
        style={{
          height: "calc(100vh - 56px)", // Adjust 56px if your Navbar is a different height
          overflow: "hidden",
        }}
      >
        <Sidebar
          historyList={historyList}
          sessionTitles={sessionTitles}
          onNewSession={handleNewSession}
          onLoadSession={handleLoadSession}
        />
        <div className="flex flex-1 min-w-0" style={{ overflow: "hidden" }}>
          <ChatWindow
            messages={messages}
            onSend={handleSend}
            onNewSession={handleClearChat}
          />
        </div>
        <PatientInfo {...patient} />
      </div>
    </div>
  );
};

export default Chatbot;
