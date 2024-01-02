
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchBox } from './components/SearchBox';

function App() {
  return (
    <div className="App">
      <h1 className='title'>연락처</h1>
      <Container>
      <Row>
        <Col><ContactForm/></Col>
        <Col><SearchBox/></Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
