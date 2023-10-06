import { useEffect, useState } from "react"
import { getProductos } from "../Productos/Productos"
import { getProductById } from "../Productos/Productos"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()

    useEffect(() => {
        getProductById(idItem)
        .then(response => {
            setProducto(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [idItem])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer
