import "./Hero.css";
import logo from "../assets/QUTTADEV 22.png";  
function Hero() {
return (
<section className="hero" id="inicio">
    <img src={logo} alt="Logo de Quttadev" className="hero-logo" />
    <h1>Desarrollo Web Profesional</h1>
    <p>Diseño y desarrollo sitios web modernos, rápidos y funcionales para potenciar tu presencia digital.</p>
    <button>Ver servicios</button>
</section>
)
}
export default Hero;