import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return(
        <div className="footer">
            <h2 className="cinzafooter"></h2>
            <h2 className="azulfooter">
            <div>
                <FontAwesomeIcon icon={faInstagram} className= "iconsFooter" /> 
                <FontAwesomeIcon icon={faWhatsapp} className="iconsFooters" />
            </div>
            <p>© 2024 LVmultimarcas </p>
            </h2>
        </div>
    )
}
export default Footer;