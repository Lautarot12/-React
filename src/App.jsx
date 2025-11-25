import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Error from './components/Error';
import { CartProvider } from './components/context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
import { AnimatePresence, motion } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45 }}
          >
            <ItemListContainer>
              <img className='foto-hero' src="../imagenheroindex.png" alt="Foto hero"/>
            </ItemListContainer>
          </motion.div>
        }/>
        <Route path='/item/:id' element={
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
            <ItemDetailContainer/>
          </motion.div>
        }/>
        <Route path='/category/:type' element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            <ItemListContainer/>
          </motion.div>
        }/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBarBS/>
        <AnimatedRoutes/>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
