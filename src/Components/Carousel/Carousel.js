import "./Carousel.css";
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../../Images/carousel1.jpg";
import carousel2 from "../../Images/carousel2.jpg";
import carousel3 from "../../Images/carousel3.jpg";

const CarouselBanner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='shadowText'>Tus productos favoritos</h3>
                        <p className='shadowText'>Las mejores zapatillas, remeras y buzos en un solo lugar</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='shadowText'>Enviamos tu compra</h3>
                        <p className='shadowText'>Hacemos entregas a todo el mundo en un plazo máximo de 15 días</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='shadowText'>Pagá como quieras</h3>
                        <p className='shadowText'>Aceptamos todos los métodos de pago</p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBanner;