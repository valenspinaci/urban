import "./Item.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const rutaInicial = "../../img/"
const Item = ({product, price, image, id})=> {
    return (
        <Card className='mt-2 mb-2 card' style={{ width: "18rem" }}>
            <Card.Img className="imgSize mt-1" variant="top" src={rutaInicial + image} />
            <Card.Body>
                <Card.Title>{product}</Card.Title>
                <hr></hr>
                <Card.Text className="fw-bold fs-4">{"$" + price}</Card.Text>
                <Button className='linkBoton'>Ver detalle</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;