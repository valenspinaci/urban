import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import CarouselBanner from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from "./Context/CartProvider";
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<div><CarouselBanner/><ItemListContainer/></div>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='category/:categoryName' element={<ItemListContainer/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
