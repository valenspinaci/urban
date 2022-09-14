import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ productDetail }) => {
    return (
        <div>
            <div className="product">
                <div className="product__header">
                    <figure className="product__figure">
                        <img src={productDetail.image} alt={productDetail.product} className="product__img" />
                    </figure>
                </div>
                <div className="product__body">
                    <h1 className="product__title">{productDetail.product}</h1>
                    <p className="product__description">{productDetail.description}</p>
                    <h2 className="product__price">${productDetail.price}</h2>
                </div>
                <div className="product__footer">
                    <ItemCount initial={1} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;