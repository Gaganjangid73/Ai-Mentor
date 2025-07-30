import React from "react";

export default function NavbarButton({
  label,
  icon,
  onClick,
  className,
  style,
}) {
  return (
    <button
      className={`flex items-center gap-2 text-white text-sm font-medium transition-transform hover:scale-105 ${className}`}
      style={style}
      onClick={onClick}
    >
      <img src={icon} alt="Login Icon" className="w-4 h-4" />
      {label}
    </button>
  );
}
