import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import OneProduct from '../../pages/OneProduct';
import MyCart from '../../pages/MyCart';
import PageNotFound from '../../pages/PageNotFound';
import LoginPage from '../../pages/LoginPage';

import './App.css';

function App() {
  return (
    <>
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/cart" element={<MyCart />} />
          <Route path="/product/:productId" element={<OneProduct />}  />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </main>
      
    </>
  );
}

export default App;
