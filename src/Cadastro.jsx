import Header2 from './Header2';
import Footer from './Footer';
import Login from "./Login";
import {useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const PersonalDataPage = () => {
 const [personalData, setPersonalData] = useState({
   firstName: '',
   lastName: '',
   email: '',
   phone: '',
   address: '',
   cpf: ''
 });
 const handleChange = (e) => {
   const { name, value } = e.target;
   setPersonalData({
     ...personalData,
     [name]: value
   });
 };
 const handleSubmit = (e) => {
   e.preventDefault();
   
   console.log('Dados pessoais enviados:', personalData);
 };
 return (
    <>
    <Header2/>
    <div className='containerCadastro'>
<div style={{ maxWidth: '400px', margin: '0 auto' }}>
<h1 className='CadastroH1'>CADASTRO</h1>
<form onSubmit={handleSubmit}>
<div style={{ marginBottom: '10px' }}>
<input className='CadastroBox'
           type="text"
           id="firstName"
           name="firstName"
           placeholder="Nome"
           value={personalData.firstName}
           onChange={handleChange}
           style={{ width: '100%', padding: '8px' }}
         />
</div>
<div style={{ marginBottom: '10px' }}>
<input className='CadastroBox'
           type="text"
           id="lastName"
           name="lastName"
           placeholder="Sobrenome"
           value={personalData.lastName}
           onChange={handleChange}
           style={{ width: '100%', padding: '8px' }}
         />
</div>
<div style={{ marginBottom: '10px' }}>
<input className='CadastroBox'
           type="email"
           id="email"
           name="email"
           placeholder="Email"
           value={personalData.email}
           onChange={handleChange}
           style={{ width: '100%', padding: '8px' }}
         />
</div>
<div style={{ marginBottom: '10px' }}>
<input className='CadastroBox'
           type="text"
           id="phone"
           name="phone"
           placeholder="Telefone"
           value={personalData.phone}
           onChange={handleChange}
           style={{ width: '100%', padding: '8px' }}
         />
</div>
<div style={{ marginBottom: '10px' }}>
<input className='CadastroBox'
           type="text"
           id="address"
           name="address"
           placeholder="Endereço"
           value={personalData.address}
           onChange={handleChange}
           style={{ width: '100%', padding: '8px' }}
         />
</div>
          <div style={{ marginBottom: '10px'}}>
          <input className='CadastroBox'
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder="CPF"
                    value={personalData.cpf}
                    onChange={handleChange}
                    style={{width: '100%', padding: '8px'}}
                    />
          </div>
<button type="submit" style={{ padding: '10px 20px' }} className='btnCadastro'><Link to={'/login'}>Concluido</Link></button>
</form>
</div>
</div>
<Footer/>
</>
 );
};
export default PersonalDataPage;