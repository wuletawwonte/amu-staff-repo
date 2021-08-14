import {Button, Container} from 'react-bootstrap';
import Header from './components/Header';

function App() {
  return <Container>
    <Header />
    <br></br>
    <br></br>
    <br></br>
    <Button className='btn btn-danger'>Add Me</Button>
  </Container>  
}

export default App;