import "./Contacto.css";

function Contacto() {
    return (
        <section className="contacto" id="contacto">
            <h2>Contacto</h2>
            <p>
                ¿Listo para llevar tu proyecto al siguiente nivel?
                Escríbenos por WhatsApp, redes sociales o envíanos un correo y
                te responderemos lo antes posible.
            </p>

            <div className="redes">

                <a
                    href="https://wa.me/5213310914215?text=Hola%2C%20vengo%20a%20pedir%20informacion%20sobre%20sus%20servicios%20de%20QuttaDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn whatsapp"
                >
                    WhatsApp
                </a>

                <a
                    href="https://www.instagram.com/quttadev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn instagram"
                >
                    Instagram
                </a>

                <a
                    href="https://www.facebook.com/people/QuttaDevlat/61578871456947/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn facebook"
                >
                    Facebook
                </a>

                <a
                    href="mailto:ing.saul.rivera004@gmail.com?subject=Solicitud%20de%20informacion%20QuttaDev&body=Hola%20solicito%20informacion%20de%20sus%20servicios%20QuttaDev"
                    className="btn correo"
                >
                    Enviar Correo
                </a>

            </div>
        </section>
    );
}

export default Contacto;
