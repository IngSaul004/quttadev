import "./ProyectoDestacado.css";

function ProyectoDestacado() {
   return (
   <section className="proyecto" id="proyecto">
  <div className="proyecto-content">

    <div className="proyecto-texto">
      <h2>Proyecto Destacado</h2>

      <h3>Landing Page Corporativa – Geohidrología</h3>

      <p>
        Desarrollamos una landing page corporativa enfocada en transmitir
        profesionalismo, claridad y confianza en el sector de estudios
        geohidrológicos. El objetivo principal fue crear una presencia
        digital sólida que explicara sus servicios de forma clara y
        estructurada para atraer nuevos clientes.
      </p>

      <p>
        Optimizamos el sitio para un alto rendimiento, tiempos de carga
        rápidos y correcta visualización en dispositivos móviles. Además,
        estructuramos el contenido estratégicamente para guiar al usuario
        hacia el contacto, aumentando las oportunidades de generación
        de prospectos.
      </p>

      <p>
        Esta landing está pensada como herramienta comercial:
        presenta servicios, experiencia y confianza en una sola página
        optimizada para conversión.
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