import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const ItemCamisa = ({imagem, valor, path}) => {
    return (
        <div className='card-produto'>
            <div className="cubo">
            <div className="quadrado">
                <img src={imagem}/>
            </div>
            <div className='buy'>
                <div className="quadrado2">
                    <p className='valor'>{valor}</p>
                </div>
                <Link to={path}><FontAwesomeIcon icon={faPlus} className='font_aa'></FontAwesomeIcon></Link>
                <Link to={path}><FontAwesomeIcon icon={faHeart} className='font_aa'/></Link>
            </div>
        </div>
        </div>
    )
}
export default ItemCamisa;