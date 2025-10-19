import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';

function App() {

  return (
    <>
      <NavBarBS/>
      <ItemListContainer>
        <img className='foto-hero' src="../imagenheroindex.png" alt="Foto hero"/>
      </ItemListContainer>
    </>
    
  )
}

export default App
