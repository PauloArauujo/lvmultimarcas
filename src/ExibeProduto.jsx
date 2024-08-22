import Header from "./header";
import Footer from "./Footer";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useParams } from "react-router-dom";
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import {faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";


const ExibeProduto =({catalago}) => {
    const nomePath = useParams();
    const buscaProduto = catalago.find(produto => produto.nome == nomePath.nome);

    return(
        <>
        <Header/>
        <div className="exibe">   
                <div className="ExibeQuadrado">
                    <img src={buscaProduto.img} alt={catalago.nome}/>
                </div>
            <div className="exibe-produto-desc">
                <a className="buycompras">{buscaProduto.nome}</a>
            <div className="espaco"></div>
        <div className="estrelas">
            <FontAwesomeIcon icon={faStarSolid}/>
            <FontAwesomeIcon icon={faStarSolid}/>
            <FontAwesomeIcon icon={faStarSolid}/>
            <FontAwesomeIcon icon={faStarSolid}/>
            <FontAwesomeIcon icon={faStarHalfStroke} />
        <div className="espaco"></div>
            <a className="buyPreco">{buscaProduto.valor}</a>
        </div> 
            <div className="espaco"></div>
            <div className='linhaazul'></div>
                <h3 className="cor">ESCOLHA A COR:</h3>
            <div className="cores">
                <div className="cor1"></div>
                <div className="cor2"></div>
                <div className="cor3"></div>
            </div>
            <div className='linhaazul'></div>
                <h3 className="tamanho">TAMANHOS:</h3>
                <div className="tamanhos">
                    <h5 className="p">P</h5> <h5 className="m">M</h5> <h5 className="g">G</h5> <h5 className="gg">GG</h5>
                </div>
                <div className="finalizar">
                <button className="btnCompra"><h2>COMPRAR</h2></button>
                    <div className="iconsCompra"> 
                        <FontAwesomeIcon icon={faCirclePlus} className="iconCompra" />
                        <FontAwesomeIcon icon={faShareNodes} className="iconCompra1"/>
                    </div>
                </div>
            </div>
        </div>  
        <Footer/>
        </>
    )
}

export default ExibeProduto;
