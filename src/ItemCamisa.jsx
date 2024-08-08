const ItemCamisa = ({titulo, imagem}) => {
    return (
        <div className='card-produto'>
            <img src={imagem} alt={titulo}/>
            <h2>{titulo}</h2>
        </div>
    )
}
export default ItemCamisa;