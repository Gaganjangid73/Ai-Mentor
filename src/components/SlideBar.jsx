import React from 'react';

const Sidebar = ({ historyList, sessionTitles, onNewSession, onLoadSession }) => {
  return (
    <div className="w-72 bg-[#1e1e1e] p-4 border-t border-b border-r rounded-r-lg border-[rgba(53,41,58,1)]">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4 text-white/70">History</h2>
        <button
          onClick={onNewSession}
          className="bg-[#454545] text-white/50 rounded px-2  mb-4 border border-[rgba(91,91,91,1)]"
        >
          + New Session
        </button>
      </div>
      {historyList.map((_, index) => (
        <div
          key={index}
          onClick={() => onLoadSession(index)}
          className="cursor-pointer bg-black text-white/50 px-2 py-1 rounded-lg mb-2  hover:bg-[#2e2e2e] transition border border-[rgba(53,41,58,1)]"
        >
          <p className="text-sm text-white/70">{sessionTitles[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;