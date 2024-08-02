import { Routes, Route } from 'react-router';
import StorePage from '../pages/StorePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import ErrorPage from '../pages/ErrorPage';

const AppNavigation = () => {
  return (
    <Routes>
      <Route path='/' element={<StorePage/>}></Route>
      <Route path='/product/:productId' element={<ProductPage/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
      <Route path='*' element={<ErrorPage/>}></Route>
    </Routes>
  )
}

export default AppNavigation;