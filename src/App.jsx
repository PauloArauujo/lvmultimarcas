import './App.css';
import CatalagoProduto from './CatalogoProduto';
import Header from './header';

function App() {
    const nomesProdutos = ['Camisa Preta', 'Camisa branca','Camisa azul','Camisa Preta',]
    return (
        <>
        <Header></Header>
        <CatalagoProduto 
        nomes={nomesProdutos}
        />
        </>
    )
}
export default App;