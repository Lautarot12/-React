import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';

function App() {

  return (
    <BrowserRouter>
      <NavBarBS/>
      <Routes>
        <Route path='/' element={ <ItemListContainer>
        <img className='foto-hero' src="../imagenheroindex.png" alt="Foto hero"/>
      </ItemListContainer>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:type' element={<ItemListContainer/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App