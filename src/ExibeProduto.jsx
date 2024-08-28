import Header2 from './Header2';
import Footer from "./Footer";
import Pagamento from './Pagamento';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import {faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const ExibeProduto =({catalago,name, ...props}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const nomePath = useParams();
    const buscaProduto = catalago.find(produto => produto.nome == nomePath.nome);

    return(
        <>
        <Header2/>
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
                <button className= "btnCor1"></button>
                <button className= "btnCor2"></button>
                <button className= "btnCor3"></button>
            </div>
            <div className='linhaazul'></div>
                <h3 className="tamanho">TAMANHOS:</h3>
                <div className="tamanhos">
                <button className= "btnTamanhos"><h5 className="p">P</h5></button> 
                <button className= "btnTamanhos"><h5 className="m">M</h5> </button>
                <button className= "btnTamanhos"><h5 className="g">G</h5> </button>
                <button className= "btnTamanhos"><h5 className="gg">GG</h5></button>
                </div>
                <div className="finalizar">
                    <div className='Pagamento'>
                <Button onClick={handleShow} className="btn-primary"><h2>COMPRAR</h2></Button>
                    <Offcanvas show={show} onHide={handleClose} {...props} placement={'end'}>
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Pagamento</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        Conteudo do Pagamento! 
                        </Offcanvas.Body>
                    </Offcanvas>
                    
                    </div>
                    
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
