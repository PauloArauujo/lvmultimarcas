import './App.css';
import CatalagoProduto from './CatalogoProduto';
import Header from './header';
import Footer from './Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
    const nomesProdutos = ['Camisa Preta', 'Camisa branca','Camisa azul','Camisa Preta',]
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
          element: <p>teste</p>
        },
        {
            path: '/buy',
            element: <p>teste</p>
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