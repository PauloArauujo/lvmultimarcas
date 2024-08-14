const ItemCamisa = ({titulo, imagem}) => {
    return (
        <div className='card-produto'>
        <div className="quadrado">
            <img src={imagem} alt={titulo}/>
            <h2>{titulo}</h2>
            </div>
        </div>
    )
}
export default ItemCamisa;