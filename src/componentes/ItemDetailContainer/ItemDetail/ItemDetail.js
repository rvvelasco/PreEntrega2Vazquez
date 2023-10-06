import ItemCount from "../../ItemCount/ItemCount"
import "./ItemDetail.css"
const ItemDetail = ({id, nombre, precio, categoria, img, stock}) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img id="productosImg" src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock Disponible: {stock}
                </p>
                <p className="Info">
                    Categoria: {categoria}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')}/>
            </footer>
        </article>
    )
}

export default ItemDetail