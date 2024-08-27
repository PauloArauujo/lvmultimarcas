import './App.css';
import CatalagoProduto from './CatalogoProduto';
import Header from './header';
import Header2 from './Header2';
import Footer from './Footer';
import ExibeProduto from './ExibeProduto';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCamisa from "./ItemCamisa";
import Cadastro from './Cadastro';
import Login from "./Login";
import produtos from './Services';
import Pagamento from './Pagamento';

function App() {
    const nomesProdutos = ['Camisa Preta', 'Camisa branca','Camisa azul','Camisa Preta',]


    const rotas = createBrowserRouter([
        {
          path: '/',
          element: <>
            <Header/>
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
            element: <Login/>
          },
          {
            path: '/cadastro',
            element: <Cadastro/>
          },
          {
            path: '/pagamento',
            element: <Pagamento/>
          }
      ])

    return (
        <>
        <RouterProvider router={rotas}/>
        </>
    )
}
export default App;