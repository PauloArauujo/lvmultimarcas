import './App.css';
import CatalagoProduto from './CatalogoProduto';
import Header from './header';
import Footer from './Footer';
import ExibeProduto from './ExibeProduto';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemCamisa from "./ItemCamisa";
import Camisa1 from './img/camisatd.png';
import Camisa2 from './img/camisatd1.png';
import Camisa3 from './img/camisatd2.png';
import Camisa4 from './img/camisatd3.png';

function App() {
    const nomesProdutos = ['Camisa Preta', 'Camisa branca','Camisa azul','Camisa Preta',]


    const produtos = [{
      nome: "tommy",
      img:Camisa1, 
      valor: "R$ 150,00"
  },
  {
      nome: "teste",
      img:Camisa2, 
      valor: "R$ 150,00"
  },{
      nome: "tommy",
      img:Camisa1, 
      valor: "R$ 150,00"
  },
  {
      nome: "tommy",
      img:Camisa2, 
      valor: "R$ 150,00"
  }
];


    const rotas = createBrowserRouter([
        {
          path: '/',
          element: <>
            <Header></Header>
            <CatalagoProduto 
            nomes={nomesProdutos}/>
            <Footer/>
          </>
        },
        {
          path: '/seach',
          element: <ExibeProduto catalago={produtos}/>
        },
        {
            path: '/:nome',
            element: <ExibeProduto catalago={produtos}/>
          },
          {
            path: '/login',
            element: <p>teste</p>
          }
      ])

    return (
        <>
        <RouterProvider router={rotas}/>
        </>
    )
}
export default App;