import "./Hero.css";
import logo from "../assets/QUTTADEV 22.png";  
import { useState } from "react";

function Hero() {
const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Cierra el menú en móvil
    }
  };
return (
<section className="hero" id="inicio">
    <img src={logo} alt="Logo de Quttadev" className="hero-logo" />
    <h1>Desarrollo Web Profesional</h1>
    <p>Diseño y desarrollo sitios web modernos, rápidos y funcionales para potenciar tu presencia digital.</p>
    <button onClick={() => handleScroll("servicios")}>Ver servicios</button>
</section>
)
}
export default Hero;