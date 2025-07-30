import React, { useEffect, useRef } from 'react';
import MessageBubble from './Messagebubble';
import InputBar from './Inputbar';

const ChatWindow = ({ messages, onSend, onNewSession }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col flex-1 px-4 py-4 bg-[#1e1e1e] rounded-lg border border-[rgba(53,41,58,1)] h-full min-h-0">
      <div
        className="flex-1 overflow-y-auto space-y-4 mb-4"
        style={{ maxHeight: '100%', minHeight: 0 }}
      >
        {messages.length === 0 && (
          <p className="text-center text-white/40 mt-10"></p>
        )}
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>
      <InputBar onSend={onSend} onNewSession={onNewSession} />
    </div>
  );
};

export default ChatWindow;