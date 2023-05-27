import './App.css';
import React  from 'react'
import {BrowserRouter , Routes ,Route } from "react-router-dom" ;
import Navgation from './project/Navgation';
import Footer from './project/footer';
import Signup from './project/Signup';
import PrivateComponent from './project/PrivateComponent';
import Login from './project/Login';
import Voting from './project/Voting';
import Admin from './project/Admin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navgation/>
      <Routes>

         <Route element={<PrivateComponent/>}>
        <Route path='/'element={<Voting />} />
        <Route path='/Addminpage'element={<Admin/>} />
      </Route>	
      <Route  path='/signup' element={< Signup/>} />
      <Route  path='/login' element={< Login/>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

