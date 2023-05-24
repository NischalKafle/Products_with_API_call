import './App.css';
import Product from './components/Product';
import Header from './components/Header';
import NavBar from './components/NavBar'
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Carousel from './components/Carousel';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
 
    <>
    <NavBar/>
   <Routes>
    <Route path='/' element={
      <div style={{margin:'5px',}}>
      <Header/>
      <Carousel/>
    </div>
    
    }/>
    <Route path='/product' element={
      <>
      <ProductList/>
      <Product />
    </>
    
    }/>
    <Route path='/cart' element={
      <>
      <Cart />
    </>
    
    }/>
    </Routes>
   </>
  );
}

export default App;
