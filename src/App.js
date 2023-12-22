import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Home from './screens/Home';

import './App.css';

const App = () => {
  return (

    <main className='py-3'>
      <Container>
        <BrowserRouter>

          <Routes>

            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Home />} />

          </Routes>
        </BrowserRouter>
      </Container>
    </main>

  );
};

export default App;
