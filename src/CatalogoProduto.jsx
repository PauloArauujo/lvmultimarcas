import ItemCamisa from "./ItemCamisa";
import Camisa1 from './img/camisatd.png';
import Camisa2 from './img/camisatd1.png';
import Camisa3 from './img/camisatd2.png';
import Camisa4 from './img/camisatd3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';


const CatalagoProduto = ({nomes, }) => {
    if (!Array.isArray(nomes) || nomes.length <4){
        return null
    }
    const obj1 = [{
        nome: "tommy",
        img:Camisa1, 
        valor: "R$ 150,00",
        path: "/"
    },
    {
        nome: "tommy",
        img:Camisa2, 
        valor: "R$ 150,00",
        path: "/"
    },{
        nome: "tommy",
        img:Camisa1, 
        valor: "R$ 150,00",
        path: "/"
    },
    {
        nome: "tommy",
        img:Camisa2, 
        valor: "R$ 150,00",
        path: "/"
    }]
    return (
        <>
        <div className='section-itens'>
            {
                obj1.map((i) => 
                    <ItemCamisa titulo = {i.nome} imagem={i.img} valor={i.valor} path ={i.path}/>
                )
            }
            {/* <ItemCamisa titulo = {nomes[0]} imagem={Camisa1}/>
            <ItemCamisa titulo = {nomes[1]} imagem={Camisa2}/>
            <ItemCamisa titulo = {nomes[2]} imagem={Camisa3}/>
            <ItemCamisa titulo = {nomes[3]} imagem={Camisa4}/> */}
        </div>
        </>
    )
}

export default CatalagoProduto;