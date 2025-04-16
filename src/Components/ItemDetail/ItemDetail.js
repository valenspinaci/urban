import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ productDetail }) => {

    const rutaInicial = "../../img/";

    return (
        <div>
            <div className="product">
                <div className="product__header">
                    <figure className="product__figure">
                        <img src={rutaInicial + productDetail.image} alt={productDetail.product} className="product__img" />
                    </figure>
                </div>
                <div className="product__body">
                    <h1 className="product__title">{productDetail.product}</h1>
                    <p className="product__description">{productDetail.description}</p>
                    <h2 className="product__price">${productDetail.price}</h2>
                    {
                        productDetail.stock > 2 ?
                        <p className="fs-10"><span className="text-decoration-underline">Stock disponible:</span> {productDetail.stock} unidad/es</p> :
                        <p className="fs-10 color-advert">Últimas unidades disponibles!</p>
                    }
                </div>
                <div className="product__footer">
                    <ItemCount item={productDetail} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;