import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';
import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemCamisa = ({imagem, valor, nome}) => {
const [fav, setFav] = useState();

const handleFavClick = () => {
    const newFav = !fav;
    setFav(newFav);
}
    return (
        <div className='card-produto'>
            <div className="cubo">
            <Link to={`/${nome}`}>
                <div className="quadrado">
                    <img src={imagem}/>
                </div>
            </Link>
            <div className='buy'>
                <div className="quadrado2">
                    <p className='valor'>{valor}</p>
                </div>
                <Link to={`/${nome}`}><FontAwesomeIcon icon={faPlus} className='font_aa'></FontAwesomeIcon></Link>
                {
                    fav == true 
                 ? <FontAwesomeIcon icon={faHeartSolid} className='font_aa' onClick={handleFavClick}/>
                 : <FontAwesomeIcon icon={faHeartRegular} className='font_aa' onClick={handleFavClick}/>
                }
            </div>
        </div>
        </div>
    )
}
export default ItemCamisa;