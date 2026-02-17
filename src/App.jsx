import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Servicios from "./components/Servicios.jsx";
import ProyectoDestacado from "./components/ProyectoDestacado.jsx";
import Contacto from "./components/Contacto.jsx";
import SobreNosotros from "./components/sobreNosotros.jsx";
import WhatsappContacto from "./components/WhatsappContacto.jsx";



function App() {
  return (
    <div>
      <WhatsappContacto />
      <Navbar />
      <Hero />
      <SobreNosotros />
      <Servicios />
      <ProyectoDestacado />
      <Contacto />
    </div>
  );
}

export default App;
