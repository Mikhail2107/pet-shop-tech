import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import OneProduct from '../../pages/OneProduct';
import MyCart from '../../pages/MyCart';
import PageNotFound from '../../pages/PageNotFound';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/cart" element={<MyCart />} />
          <Route path="/product/:productId" element={<OneProduct />}  /> 
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
