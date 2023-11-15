import './App.css';
import Navbar from './Components/Navbar/Navbar';
import '../src/Components/Navbar/Navbar.css';
// React router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Menu */}
        <Navbar />
        <Routes>
          {/* Trang chủ */}
          <Route path='/' element={<Shop />} />
          {/* Danh mục thời trang */}
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="Nam" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="Nữ" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="Trẻ em" />} />
          {/* Sản phẩm */}
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          {/* Giỏ hàng  */}
          <Route path='/cart' element={<Cart />} />
          {/* Đăng nhập */}
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
