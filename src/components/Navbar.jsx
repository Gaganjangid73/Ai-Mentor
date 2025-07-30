import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarButton from "../components/NavbarButton";

const Navbar = ({ logo, navLinks = [], loginText, loginIcon }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map link names to their routes (matching your routing setup)
  const getPath = (link) => {
    if (!link) return "/";
    const normalized = link.trim().toLowerCase();
    if (normalized === "home") return "/Home";
    if (normalized === "privacy policy") return "/privacy-policy";
    if (
      normalized === "terms & condition" ||
      normalized === "terms and condition"
    )
      return "/terms";
    if (normalized === "contact" || normalized === "contact us")
      return "/contact";
    return "/";
  };

  const handleNavClick = (link) => {
    const path = getPath(link);
    navigate(path);
  };

  const handleLoginClick = () => {
    if (loginText && loginText.trim().toLowerCase() === "login") {
      navigate("/login");
    } else if (loginText && loginText.trim().toLowerCase() === "dashboard") {
      // If you have a dashboard route, change this to "/dashboard"
      // For now, navigate to home as in your other pages
      navigate("/");
    } else {
      alert("Login clicked");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#0B1120]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between px-4 md:px-8 lg:px-12 h-[64px]">
        {/* Logo and Links */}
        <div className="flex items-center gap-10">
          {logo && <img src={logo} alt="Logo" className="h-[24px]" />}
          <ul className="hidden md:flex gap-8 text-white text-sm font-medium">
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="hover:text-cyan-400 cursor-pointer"
                onClick={() => handleNavClick(link)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        {/* Login Button */}
        {loginText && (
          <NavbarButton
            label={loginText}
            icon={loginIcon}
            onClick={handleLoginClick}
            style={{
              padding: "8px 25px",
              background:
                "linear-gradient(274.27deg, #00AF9E 2.78%, #0945DF 96.72%)",
              borderRadius: "10px",
              height: "40px",
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
