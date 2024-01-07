import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Home from './screens/Home';

import './App.css';
import CreateProject from './components/CreateProject';

const App = () => {
  return (

    <main className='py-3'>
      <Container>
        <BrowserRouter>

          <Routes>

            <Route exact path='claim-process/login' element={<Login />} />
            <Route exact path='/claim-process/' element={<Home />} />
            <Route exact path='/create-project' element={<CreateProject />} />

          </Routes>
        </BrowserRouter>
      </Container>
    </main>

  );
};

export default App;
