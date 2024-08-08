import logo from './img/lv.png';

const Header = () => {
    return(
        <div className='header'>
            <img src={logo}/>
        <div>
            <hr className='azul'/>
            <hr className='cinza'/>
        </div>
        </div>
    )
}
export default Header