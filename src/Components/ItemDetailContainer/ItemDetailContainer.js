import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MockData from "../MockData/MockData";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState("");
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getProduct
        .then((response) => {
            setProduct(response);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataFiltrada = MockData.find((producto) => producto.id === id);
            resolve(dataFiltrada);
        }, 2000)
    });


    return (
        <div className="mt-5">
            {
                loading ? <Loading/> : <ItemDetail productDetail={product}/>
            }
        </div>
    )
}

export default ItemDetailContainer;