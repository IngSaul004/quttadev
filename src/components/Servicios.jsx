import "./Servicios.css";

function Servicios() {
    return (
        <section className = "servicios" id="servicios">
            <h2>Servicios</h2>

            <div className="servicios-container">

                <div className="card">
                    <h3>Landing pages</h3>
                    <p>Sitios rapidos y optimizados para convertir visitantes en clientes.</p>
                </div>
                <div className="card">
                    <h3>Tiendas online</h3>
                    <p>Ecommerce modernos, seguros y faciles de administrar.</p>
                </div>
                <div className="card">
                    <h3>Sistemas Web</h3>
                    <p>Aplicaciones personalizadas adaptadas a tu negocio.</p>
                </div>
            </div>
        </section>
    )
}
export default Servicios;