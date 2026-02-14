import "./Contacto.css";

function Contacto() {
    return (
        <section className="contacto" id="contacto">
            <h2>Contacto</h2>
            <p>¿Tienes un proyecto en mente?
Hablemos por Instagram o Facebook.</p>
            
            <div className="redes">
                <a
                href="https://www.instagram.com/quttadev/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn instagram"
                >Instagram</a>
                <a
                href="https://www.facebook.com/people/QuttaDevlat/61578871456947/"
                target="_blank"
                rel="noopener noreferrer"
                className=" btn facebook"
                >Facebook</a>
            </div>
        </section>
    )
}

export default Contacto;
    