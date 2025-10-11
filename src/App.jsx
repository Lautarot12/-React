import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer>
        <img className='foto-hero' src="../imagenheroindex.png" alt="Foto hero"/>
      </ItemListContainer>
    </>
    
  )
}

export default App
