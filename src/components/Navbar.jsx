import "./Navbar.css";
import logo from "../assets/QUTTADEV 22.png";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScrollEffect = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScrollEffect);
    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div
        className="navbar-logo"
        onClick={() => handleScroll("inicio")}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="Logo de QuttaDev" />
        <span>QuttaDev</span>
      </div>

      {/* Botón hamburguesa */}
      <div
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      {/* Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li onClick={() => handleScroll("inicio")}>Inicio</li>
        <li onClick={() => handleScroll("servicios")}>Servicios</li>
        <li onClick={() => handleScroll("sobre")}>Nosotros</li>
        <li onClick={() => handleScroll("proyecto")}>Proyecto</li>
        <li
          onClick={() => handleScroll("contacto")}
          className="nav-cta"
        >
          Contacto
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
