import logo from './img/lglv.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';



const Header = () => {

    return(
        
        <div className='header'>
            <img src={logo}/>
            <div>
                <hr className='azul'/>
                <hr className='cinza'/>
            <div className='links'>
                <nav className='link'>
                    <Link to="#">LANÇAMENTOS</Link>
                    <Link to="#">OFERTAS</Link>
                    <Link to="#">MASCULINO</Link>
                    <Link to="#">FEMININO</Link>
                </nav>
            </div>
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
            <div>
                <hr className='azul1'/>
                <hr className='cinza1'/>
            </div>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-autoclose-true">
                <FontAwesomeIcon icon={faUser} className='icon'/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
export default Header