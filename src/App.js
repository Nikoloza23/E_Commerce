import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from "./pages/Home";
import Details from './pages/details/Details'
import Cart from './pages/cart/Cart';
import Register from './components/register/Register';
import Login from './components/login/Login';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products/:id' element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  
    </div>
  );
}

export default App;
