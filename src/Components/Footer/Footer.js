import "./Footer.css";
import instagram from "../../Images/instagram.png";
import twitter from "../../Images/twitter.png";
import linkedin from "../../Images/linkedin.png";

const Footer = () => {
    return (
        <div className="bg-light footer d-flex-column mx-0-auto  d-lg-flex-row mt-3">  
            <div className="footerIzq">
                <ul className="footerIzq_lista">
                    <li>© 2022 Copyright</li>
                    <li>Urban - Todos los derechos reservados</li>
                </ul>
            </div>

            <div className="footerCentro d-none d-lg-block">
                <ul className="footerCentro_lista">
                    <li>Valentino Spinaci</li>
                    <li>Coderhouse</li>
                    <li>React JS</li>
                </ul>
            </div>

            <div className="footerDer">
                <ul className="footerDer_lista">
                    <li><a href="https://www.instagram.com/"><img src={instagram} className="logoRedes"  alt="instagram"/></a></li>
                    <li><a href="https://twitter.com/?lang=es"><img src={twitter} className="logoRedes" alt="twitter"/></a></li>
                    <li><a href="https://ar.linkedin.com/"><img src={linkedin} className="logoRedes" alt="linkedin"/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;