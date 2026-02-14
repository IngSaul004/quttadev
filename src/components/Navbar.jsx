import "./Navbar.css";
import logo from "../assets/QUTTADEV 23.png";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Cierra el menú en móvil
    }
  };

  return (
    <nav className="navbar">
      <div 
        className="navbar-logo"
        onClick={() => handleScroll("inicio")}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="Logo de Quttadev" />
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
        <li onClick={() => handleScroll("contacto")}>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;
