import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import Usuarios from './components/Usuarios'
import Usuario from './components/Usuario'

function App() {
  return (
    <Router>

      <Routes>

         <Route exact path="/" element={<Usuarios/>}/>

         <Route exact path="/usuario/:id" element={<Usuario/>}/>
        {/*<Route path="/inicio/:nombre" element={}/> */}


      </Routes>

    </Router >
  );
}

export default App;
