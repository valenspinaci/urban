import { useContext, useState } from "react";
import { CartContext } from "../../Context/cartContext";
import "./Cart.css";
import corazon from "../../Images/corazon-roto.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {collection, addDoc, getFirestore, updateDoc, doc} from "firebase/firestore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Cart = () => {
    const MySwal = withReactContent(Swal)
    const {cart, removeItem, totalQuantity, totalPrice, clear} = useContext(CartContext);
    const db = getFirestore();
    const [order, setOrder] = useState({
        buyer:{
            name: "",
            phone: 0,
            email: "",
        },
        items: cart,
        total: totalPrice,
    });
    const navigate = useNavigate();

    const createOrder = () => {
        const query = collection(db, "orders");
        addDoc(query, order)
        .then(({ id }) =>{
            MySwal.fire(
                'Excelente!',
                `La orden se generó con éxito. Tu número de orden es:${id}`,
                'success'
            )
            console.log(id);
            updateStock();
        })
        .catch(()=> 
        MySwal.fire(
            'Lo sentimos!',
            'Algo ha fallado al generar la orden',
            'error'
        )
        );
    }

    const updateStock = () =>{
        cart.forEach(product => {
            const queryUpdate = doc(db, "items", product.id);
            updateDoc(queryUpdate, {
                category: product.category,
                description: product.description,
                image: product.image,
                price: product.price,
                product: product.product,
                stock: product.stock - product.quantity,
            }).then(()=>{
                if(cart[cart.length-1].id === product.id){
                    clear();
                    navigate("/");
                }
            }).catch(()=>{
                console.log("Error al actualizar el stock")
            })
        })
    }

    const buy = (event) =>{
        event.preventDefault();
        if(order.buyer.name === "" || order.buyer.phone === "" || order.buyer.email === ""){
            MySwal.fire(
                'Lo sentimos!',
                'Debe completar el formulario para generar la orden',
                'error'
            )
        }else if(order.buyer.email.indexOf("@") === -1 || order.buyer.email.indexOf(".") === -1){
            MySwal.fire(
                'Lo sentimos!',
                'El email ingresado no cumple con el formato base',
                'error'
            )
        }else if(order.buyer.phone.length<9){
            MySwal.fire(
                'Lo sentimos!',
                'El número de telefono debe contener al menos 9 digitos',
                'error'
            )
        }else if(!isNaN(order.buyer.name)){
            MySwal.fire(
                'Lo sentimos!',
                'Por favor ingresa un nombre válido',
                'error'
            )
        }else{
            createOrder();
        }
    }

    const handleInputChange= (e) =>{
        setOrder({
            ...order,
            buyer:{
                ...order.buyer,
                [e.target.name]: e.target.value
            }
        })
    }

    const rutaInicial = "../../img/"
    return (
        (<div className="cartContainer">
            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {cart.length === 0 ?
            <div>
                <img src={corazon} alt="corazon" className="img-corazon"/>
                <h2>No hay productos en el carrito</h2>
                <Button className="emptyButton"><Link className="linkButton" to="/">Volver a inicio</Link></Button>
            </div>:
            <>
            {cart.map((item) =>(
                <div key={item.id} className="contenedorCart">
                    <Card className="displayCard" style={{ width: '100%' }}>
                        <Card.Img className="image" variant="start" src={rutaInicial + item.image} />
                        <Card.Body className="bodyCard">
                            <Card.Title className="my-2 fw-bold"><h2>{item.product}</h2></Card.Title>
                            <Card.Text>
                                <p className="detailCard">{item.quantity} agregado/s al carrito</p>
                                <p className="detailCard fw-bold">${item.price}<span className="smallLetters fw-normal"> c/u</span></p>
                                <h3 className="detailCard fw-bold"><span className="fw-normal totalCard">Total:</span> ${item.quantity * item.price}</h3>
                            </Card.Text>
                        </Card.Body>
                        <Button variant="dark" className="removeButton linkButton" onClick={()=>removeItem(item.id)}>Remover item</Button>
                    </Card>
                </div>
            ))}
            <div className="resumeContainer">
                <p className="ms-auto my-auto totalQuant">{totalQuantity} producto/s agregado/s</p>
                <h2 className="me-4 totalPrice"><span>Total:</span> ${totalPrice}</h2>
            </div>

            <div>
                <Form className='w-80 mx-auto mt-3' onSubmit={buy}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre(*)</Form.Label>
                        <Form.Control type="text" name="name" value={order.buyer.name} onChange={handleInputChange} required placeholder="Ingresá tu nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="number" name="phone" value={order.buyer.phone} onChange={handleInputChange} required placeholder="Ingresá tu telefono" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email(*)</Form.Label>
                        <Form.Control type="email" name="email" value={order.buyer.email} onChange={handleInputChange} required placeholder="Ingresá tu email" />
                    </Form.Group>
                </Form>
            </div>

            <div className="buttonsContainer">
                <Button onClick={()=>clear()} className="linkButton emptyButton">Vaciar carrito</Button>
                <Button onClick={buy} className="linkButton emptyButton">Crear Orden</Button>
            </div>
            </>
            }
        </div>)
    )
}

export default Cart;