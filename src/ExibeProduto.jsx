import Header from "./header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

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
            <div className="exibe-produto-desc">
                <h2>{buscaProduto.nome}</h2>
            </div>        
        </div>
        <div className="espaço">
            </div>
        <Footer/>
        </>
    )
}

export default ExibeProduto;