import "./sobreNosotros.css";

function SobreNosotros() {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos un equipo especializado en desarrollo web moderno,
          ayudamos a negocios a crecer en el mundo digital con soluciones
          rápidas, seguras y profesionales.
        </p>

        <div className="valores">
          <div>
            <h3>🚀 Innovación</h3>
            <p>Utilizamos tecnología moderna y eficiente.</p>
          </div>

          <div>
            <h3>🤝 Confianza</h3>
            <p>Construimos relaciones duraderas con nuestros clientes.</p>
          </div>

          <div>
            <h3>⚡ Resultados</h3>
            <p>Nos enfocamos en generar impacto real en tu negocio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
