import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import "./ItemListContainer.css";
import { getDocs, getFirestore, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams();

    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, "items");
        
        if (categoryName){
            const queryFilter = query(querySnapshot,
                where("category", "==", categoryName));

            getDocs(queryFilter)
            .then((response) =>{
                const data = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()};
                });
                setProductList(data)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
        } else{
            getDocs(querySnapshot)
            .then((response) =>{
                const data = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()};
                });
                setProductList(data)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
        }
    }

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, [categoryName]);



    return (
        <div className="mb-2 mt-4 listContainer">
            {
                loading ? <Loading/> : <ItemList list={productList}/>
            }
        </div>
    )
}

export default ItemListContainer;