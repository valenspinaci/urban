import "./Item.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({product, price, image, id})=> {
    return (
        <Card className='mt-2 mb-2' style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{product}</Card.Title>
                <Card.Text>{"$" + price}</Card.Text>
                <Button className='linkBoton' variant="dark">Ver detalle</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;