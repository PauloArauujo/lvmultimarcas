import logo from './img/lglv.png';
import Login from './Login';
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
                <div className='azul'/>
                <div className='cinza'/>
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
                <div className='azul1'/>
                <div className='cinza1'/>
            </div>
            <Link to={`/buy`}><FontAwesomeIcon icon={faCartShopping} className='icon'/></Link>
            <div>
                <div className='azul1'/>
                <div className='cinza1'/>
            </div>
                 <Dropdown>
                <Dropdown.Toggle>
                <FontAwesomeIcon icon={faUser} className='icon'/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                {/* <Dropdown.Item><Link to={'/Login'}>Login</Link></Dropdown.Item> */}
                {/* <Dropdown.Item Link to={Login}>Menu Item</Dropdown.Item>
                <Dropdown.Item Link to={Login}>Menu Item</Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>
            <div>
                <div className='azul2'/>
                <div className='cinza2'/>
            </div>

        </div>
    )
}
export default Header