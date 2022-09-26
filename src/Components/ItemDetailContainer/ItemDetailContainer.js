import "./itemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getFirestore, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState("");
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const db = getFirestore();

    const getProduct = () =>{
        const queryDoc = doc(db, "items", id);

        getDoc(queryDoc)
            .then((res)=> {
                setProduct({id:res.id, ...res.data()});
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
        }

    useEffect(() => {
        getProduct()
        // eslint-disable-next-line
    }, [id]);


    return (
        <div className="contenedor mt-5">
            {
                loading ? <Loading/> : product && <ItemDetail productDetail={product}/>
            }
        </div>
    )
}

export default ItemDetailContainer;