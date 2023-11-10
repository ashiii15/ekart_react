import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/wishlist' element={<WishList/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>

      </Routes>
    </>
  );
}

export default App;
