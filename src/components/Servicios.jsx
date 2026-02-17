import "./servicios.css";

function Servicios() {
    return (
        <section className="servicios" id="servicios">
            <h2>Servicios</h2>

            <div className="servicios-container">

                <div className="card">
                    <h3>Landing Pages Estratégicas</h3>
                    <p>
                        Diseñamos páginas publicitarias enfocadas en generar resultados reales.
                        No son solo páginas bonitas, están optimizadas para convertir visitantes
                        en clientes. Ideales para campañas en redes sociales, Google Ads o
                        lanzamientos de productos.
                    </p>
                    <p>
                        Nuestras landing pages cargan rápido, están optimizadas para SEO
                        y diseñadas para guiar al usuario hacia una acción específica:
                        contactarte, agendar, comprar o solicitar información.
                    </p>

                    <a href="#contacto" className="btn-servicio">
                        Contáctanos
                    </a>
                </div>

                <div className="card">
                    <h3>Sistemas Web Personalizados</h3>
                    <p>
                        Desarrollamos sistemas digitales adaptados completamente a tu negocio.
                        Automatizamos procesos, organizamos información y creamos herramientas
                        que te permiten trabajar de forma más eficiente.
                    </p>
                    <p>
                        Desde paneles administrativos hasta plataformas internas,
                        nuestros sistemas se diseñan según tus necesidades reales,
                        mejorando la productividad y reduciendo errores operativos.
                    </p>

                    <a href="#contacto" className="btn-servicio">
                        Contáctanos
                    </a>
                </div>

                <div className="card">
                    <h3>Optimización y Control de Procesos</h3>
                    <p>
                        Creamos soluciones digitales para mejorar el rendimiento de tu empresa.
                        Implementamos sistemas para el seguimiento de indicadores como OEE,
                        control de mano de obra, productividad y análisis de datos.
                    </p>
                    <p>
                        Esto permite tomar decisiones basadas en información real,
                        optimizar recursos y aumentar la eficiencia operativa de tu negocio.
                    </p>

                    <a href="#contacto" className="btn-servicio">
                        Contáctanos
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Servicios;
