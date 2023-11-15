import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    //Chức năng hiển thị <Hr/> khi action từng Menu
    const [menu, setMenu] = useState('shop');

    //Chức năng cộng tổng đơn hàng cho cái icon
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className='navbar container sticky-top'>
            <div className="nav-log">
                <img src={logo} alt="" />
                <p>Techzenz Shop</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu('shop') }}>
                    <Link to='/' style={{ textDecoration: 'none' }}>Cửa hàng</Link> {menu === 'shop' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('mens') }}>
                    <Link to='mens' style={{ textDecoration: 'none' }}>Thời trang nam</Link> {menu === 'mens' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('womens') }}>
                    <Link to='womens' style={{ textDecoration: 'none' }}>Thời trang nữ</Link> {menu === 'womens' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('kids') }}>
                    <Link to='kids' style={{ textDecoration: 'none' }}>Thời trang trẻ em</Link> {menu === 'kids' ? <hr /> : <></>}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Đăng nhập</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;