import React, { useEffect, useState } from "react";
import "./WhatsappContacto.css";

const WhatsappContacto = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
  href="https://wa.me/523310914215?text=Hola,%20vengo%20a%20pedir%20informacion%20sobre%20sus%20servicios%20de%20QuttaDev"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>

      <div className="whatsapp-content">
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
        <span>Contactanos!</span>
      </div>
    </a>
  );
};

export default WhatsappContacto;
