import Header from "./header";
import Footer from "./Footer";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useParams } from "react-router-dom";
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import {faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';



const ExibeProduto =({catalago}) => {
    const nomePath = useParams();
    const buscaProduto = catalago.find(produto => produto.nome == nomePath.nome);

    return(
        <>
        <Header/>      
        <div className="exibe-produto-body">
            <div className="ExibeQuadrado">
            <img src={buscaProduto.img} alt={catalago.nome}/>
            </div>
        </div>
        <div className="exibe-produto-desc">
                <a className="buycompras">{buscaProduto.nome}</a>
            </div>
            <div className="estrelas">
            <FontAwesomeIcon icon={faStarSolid}/>
            <FontAwesomeIcon icon={faStarSolid}/>
            <FontAwesomeIcon icon={faStarSolid}/>
            <FontAwesomeIcon icon={faStarSolid}/>
            <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>
        <div className="espaço">
            </div>
        <Footer/>
        </>
    )
}

export default ExibeProduto;
