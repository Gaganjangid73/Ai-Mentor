import React, { useState } from 'react';
import sendpng from '../assets/sendpng.png';
import clearchat from '../assets/deletechat.png';

const quickButtons = [
  "Ask about conditions",
  "Ask about medications",
  "Ask about allergies"
];

const InputBar = ({ onSend, onNewSession }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  const handleQuickButton = (text) => {
    onSend(text);
  };

  return (
    <div className="flex flex-col w-full border-t border-[rgba(91,91,91,1)] pt-2">
      <div className="flex justify-end mb-2">
        <div className="flex gap-2 w-full">
          {quickButtons.map((btnText) => (
            <button
              key={btnText}
              onClick={() => handleQuickButton(btnText)}
              className="bg-[#2d2d2d] text-sm text-white/50 rounded px-3  border border-[rgba(91,91,91,0.7)] hover:bg-[#3a3a3a] transition flex flex-row items-center"
            >
              {btnText}
            </button>
          ))}
          <button
            onClick={onNewSession}
            className="bg-[#454545] text-sm text-white/50 rounded px-2 border border-[rgba(91,91,91,1)] flex items-center gap-2 ml-52"
          >
            <img src={clearchat} alt="clear chat" className="w-3 h-3 opacity-50" />
            <span>Clear Chat</span>
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-center bg-black rounded-lg pr-2 border border-[rgba(53,41,58,1)]">
        <input
          className="flex-1 py-3 px-2 bg-transparent text-white outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-gradient-to-r from-blue-500 to-teal-400 px-2 py-1 rounded text-white"
        >
          <img src={sendpng} alt="send" className="w-7 h-7 p-1" />
        </button>
      </div>
    </div>
  );
};

export default InputBar;