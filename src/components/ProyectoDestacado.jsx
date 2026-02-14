import "./ProyectoDestacado.css";

function ProyectoDestacado() {
   return (
    <section className="proyecto" id="proyecto">
      <div className="proyecto-content">

        <div className="proyecto-texto">
          <h2>Proyecto Destacado</h2>
          <h3>Geohidrologia</h3>
          <p>
            Desarrollo completo de sitio corporativo enfocado en
            presencia profesional, rendimiento y claridad de servicios.
          </p>

          <a 
            href="https://geohidrologia.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-proyecto"
          >
            Ver Sitio →
          </a>
        </div>

      </div>
    </section>
  )
}

export default ProyectoDestacado;