import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return(
    <div className="footer">
        <footer>
            <h2 className="cinzafooter"></h2>
            <h2 className="azulfooter">
            <FontAwesomeIcon icon={faInstagram} className= "iconsFooter" /> 
        .    <FontAwesomeIcon icon={faWhatsapp} className="iconsFooter" />
            <p>© 2024 LVmultimarcas </p>
            </h2>
        </footer>
    </div>
    )
}
export default Footer;