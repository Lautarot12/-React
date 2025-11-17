import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import { CartProvider } from './components/context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
      <NavBarBS/>
      <Routes>
        <Route path='/' element={ <ItemListContainer>
        <img className='foto-hero' src="../imagenheroindex.png" alt="Foto hero"/>
      </ItemListContainer>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:type' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App