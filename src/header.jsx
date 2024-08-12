import logo from './img/lglv.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <div className='header'>
            <img src={logo}/>
            <div>
                <hr className='azul'/>
                <hr className='cinza'/>
            </div>
            <Link to={`/seach`}><FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/> </Link>
            <div>
                <hr className='azul1'/>
                <hr className='cinza1'/>
            </div>
            <Link to={`/buy`}><FontAwesomeIcon icon={faCartShopping} className='icon'/></Link>
            <div>
                <hr className='azul1'/>
                <hr className='cinza1'/>
            </div>
            <Link to={`/login`}><FontAwesomeIcon icon={faUser} className='icon'/></Link>
            <div>
                <hr className='azul1'/>
                <hr className='cinza1'/>
            </div>
        </div>
    )
}
export default Header