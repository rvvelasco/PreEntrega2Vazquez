import "./style.css"
import { useState, useEffect } from "react"
import { getProductById, getProductos} from "../Productos/Productos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import getProductByCategory from "../Productos/Productos"


const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()

    useEffect(() => {
        const asyncFunc = idCategoria ? getProductByCategory : getProductos
        
        asyncFunc(idCategoria)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [idCategoria])

    return (
        <div>
            <h1>{greeting}</h1>
            <div id="contenedor">
                <ItemList productos={productos} />
            </div>

        </div>
    )
}

export default ItemListContainer

/* useEffect(() => {
    getProductos()
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
}, [])

return (
    <div>
        <h1>{greeting}</h1>
        <div id="contenedor">
            <ItemList productos={productos} />
        </div>

    </div>
) */