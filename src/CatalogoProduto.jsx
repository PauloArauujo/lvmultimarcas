import ItemCamisa from "./ItemCamisa";
import Camisa1 from './img/championsazul.png';
import Camisa2 from './img/championsbranca.png';
import Camisa3 from './img/tommyazul.png';
import Camisa4 from './img/highbranca.png';

const CatalagoProduto = ({titulo, nomes}) => {
    if (!Array.isArray(nomes) || nomes.length <4){
        return null
    }
    return (
        <>
        <h1 className='sub-title'>{titulo}</h1>
        <div className='section-itens'>
            <ItemCamisa titulo = {nomes[0]} imagem={Camisa1}/>
            <ItemCamisa titulo = {nomes[1]} imagem={Camisa2}/>
            <ItemCamisa titulo = {nomes[2]} imagem={Camisa3}/>
            <ItemCamisa titulo = {nomes[3]} imagem={Camisa4}/>
        </div>
        </>
    )
}

export default CatalagoProduto;