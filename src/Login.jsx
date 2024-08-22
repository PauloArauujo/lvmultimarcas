import Footer from './Footer';
import Header from './header';
import {useParams } from "react-router-dom";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

import "./App.css";

const Login = () => {

    const [username, setUsername] = useState("Teste");
    const [password, setPassword] = useState("Teste");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        
        console.log("Envio"); 'Envio'
    };


    return <>
        <Header/>
        <div className="container">
            <form onSubmit={handleSubmit}>
                    <h1>LOGIN</h1>
                    <div className="email">
                    <FontAwesomeIcon icon={faUser}/>
                    <input type="email" placeholder="E-mail" 
                    onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="password">
                    <FontAwesomeIcon icon={faLock}/>
                    <input type="password" placeholder="Senha" 
                    onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='recall-'>
                        <label>
                            <input type="checkbox" />
                            Lembre de mim
                        </label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                    <button>Entrar</button>
                    <div className="signup-link"></div>
                        <p>Não tem uma conta? <a href="#">Criar conta</a></p>
            </form>
        </div>
        <Footer/>
    </>
};

export default Login;






<div className="password">
<input type="password" placeholder="Senha" />
</div>