import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MockData from "../MockData/MockData";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import "./ItemListContainer.css"

const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams();

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
        // eslint-disable-next-line
    }, [categoryName]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(categoryName){
                const categoriaFiltrada = MockData.filter((product) => product.category === categoryName);
                resolve(categoriaFiltrada);
            } else{
                resolve(MockData);
            }

        }, 2000)
    });



    return (
        <div className="mb-2 mt-4 listContainer">
            {
                loading ? <Loading/> : <ItemList list={productList}/>
            }
        </div>
    )
}

export default ItemListContainer;