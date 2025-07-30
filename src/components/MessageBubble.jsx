import React from 'react';
import ReactMarkdown from 'react-markdown';
import botavatar from '../assets/botavtar.png';

const MessageBubble = ({ message }) => {
  const isUser = message.from === 'user';

  const formatTime = (date = new Date()) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div
      className={`w-full flex items-start mb-4 ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >
      {/* Bot Message */}
      {!isUser && (
        <div className="flex items-start gap-3 w-full">
          {/* Avatar */}
          <img
            src={botavatar}
            alt="Bot Avatar"
            className="w-9 h-9 rounded-full mt-1"
          />

          {/* Message Content */}
          <div className="flex flex-col w-full">
            {/* Label + Time */}
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base text-white font-semibold">AI Assistant</span>
              <span className="text-xs text-white/30">
                {message.timestamp ? formatTime(new Date(message.timestamp)) : formatTime()}
              </span>
            </div>

            {/* Message Bubble */}
            <div
              className="p-3 rounded-lg shadow break-words whitespace-pre-wrap
              bg-black text-white border border-[#333] w-full border border-[rgba(53,41,58,1)]"
            >
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => <h1 className="text-lg font-bold mb-1 mt-0" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="text-base font-semibold mb-1 mt-0" {...props} />,
                  p: ({ node, ...props }) => <p className="mb-1 mt-0" {...props} />,
                  li: ({ node, ...props }) => <li className="list-disc ml-5 mb-0" {...props} />,
                  a: ({ node, ...props }) => (
                    <a className="text-blue-400 hover:underline cursor-pointer" {...props} />
                  ),
                }}
              >
                {message.text}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}

      {/* User Message */}
      {isUser && (
        <div className="flex flex-col items-end max-w-[80%]">
          <span className="text-xs text-white/40 mb-1">
            {message.timestamp ? formatTime(new Date(message.timestamp)) : formatTime()}
          </span>
          <div className="p-3 rounded-lg shadow break-words bg-blue-600 text-white">
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => <p className="mb-1 mt-0" {...props} />,
                li: ({ node, ...props }) => <li className="list-disc ml-5 mb-0" {...props} />,
              }}
            >
              {message.text}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
