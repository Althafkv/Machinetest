import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import ViewProduct from './components/View Product/ViewProduct';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/products' element={<Products />} />
          <Route path='/view/:id' element={<ViewProduct />} />
          <Route path='/cart/:id' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
