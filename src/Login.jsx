import Footer from './Footer';
import Header from './header';
import {useParams } from "react-router-dom";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
    return <>
    {/* <Header/> */}
        <div className="container">
            <form>
                    <h1>Acesse o sistema</h1>
                    <div>
                    <input type="email" placeholder="E-mail" />
                    <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div>
                    <input type="password" placeholder="Senha" />
                    <FontAwesomeIcon icon={faLock}/>
                    </div>

                    <div className='recall-'></div>
                    <button>Entrar</button>
            </form>
            <Footer/>
        </div>
    </>
};

export default Login;