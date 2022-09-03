import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from "./pages/Home";
import Details from './pages/details/Details'
import Cart from './pages/cart/Cart';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products/:id' element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
