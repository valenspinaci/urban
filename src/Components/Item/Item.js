import "./Item.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const rutaInicial = "../../img/"
const Item = ({product, price, image, id})=> {
    return (
        <Card className='mt-2 mb-2' style={{ width: "18rem" }}>
            <Card.Img variant="top" src={rutaInicial + image} />
            <Card.Body>
                <Card.Title>{product}</Card.Title>
                <Card.Text>{"$" + price}</Card.Text>
                <Button className='linkBoton'>Ver detalle</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;