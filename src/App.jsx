import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Formulario from './components/Formulario';

function App() {
  return (
    <>
    <header className='bg-dark py-2'>
      <h1 className='display-3 text-light text-center'>Administrador de pacientes</h1>
    </header>
    <Container className='mainContainer'>
      <Formulario></Formulario>
    </Container>
    <Footer></Footer>
    </>
  )
}

export default App
