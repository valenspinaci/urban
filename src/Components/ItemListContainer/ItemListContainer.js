import { useEffect, useState } from "react";
import MockData from "../MockData/MockData";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts
        .then((response) => {
            setProductList(response);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(MockData)
        }, 2000)
    });



    return (
        <div className="mb-2 mt-2">
            {
                loading ? <Loading/> : <ItemList list={productList}/>
            }
        </div>
    )
}

export default ItemListContainer;