import Item from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = ({ list }) => {
    return (
        <div className="productList">
            {
                list.map((product) => (
                    <Link className="linkCard" to={`/detail/${product.id}`} key={product.id}>
                    <div>
                        <Item
                            product = {product.product}
                            price = {product.price}
                            image = {product.image}
                        />
                    </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default ItemList;