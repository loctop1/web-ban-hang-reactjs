import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
    /**Truyền các hàm tổng giá tiền tất cả sản phẩm trong giỏ hàng, hiển thị sản phẩm, thông tin sản phẩm. thêm, xóa sản phẩm từ ShopContext sang */
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Ảnh</p>
                <p>Tên</p>
                <p>Giá</p>
                <p>Số lượng</p>
                <p>Tổng</p>
                <p>Xóa sản phẩm</p>
            </div>
            <hr />
            {all_product.map((e) => {
                /**Biến e là mỗi phần tử trong mảng, đại diện cho một sản phẩm. */
                if (cartItems[e.id] > 0) {
                    /**Kiểm tra xem số lượng của sản phẩm với ID là e.id có lớn hơn 0 không. Nếu có, thì hiển thị thông tin của sản phẩm đó trong giỏ hàng. */
                    return (
                        <div>
                            <div className="cartitems-format">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>{e.new_price}.000<sup>đ</sup></p>
                                <button className='cartitems-quantity'>
                                    {cartItems[e.id]}
                                </button>
                                <p>{e.new_price * cartItems[e.id]}.000<sup>đ</sup></p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                        </div>
                    )
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Tổng tạm tính</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Thành tiền</p>
                            <p>{getTotalCartAmount()}.000<sup>đ</sup></p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Miễn phí giao hàng</p>
                            <p>Miễn phí</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Tổng cộng</h3>
                            <h3>{getTotalCartAmount()}.000<sup>đ</sup></h3>
                        </div>
                    </div>
                    <button>Thanh toán</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Nếu bạn có mã giảm giá, vui lòng điền vào đây</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Mã giảm giá' />
                        <button>Áp dụng</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems