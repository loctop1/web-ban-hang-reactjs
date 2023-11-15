import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;

    const { addToCart } = useContext(ShopContext);
    /**Truyền prop thêm giỏ ở bên ShopContext sang */
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.imgage} alt="" />
                    <img src={product.imgage} alt="" />
                    <img src={product.imgage} alt="" />
                    <img src={product.imgage} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        {product.old_price}.000<sup>đ</sup>
                    </div>
                    <div className="productdisplay-right-price-new">
                        {product.new_price}.000<sup>đ</sup>
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Sử dụng chất liệu cao cấp, áo này mang đến cảm giác mềm mại, thoải mái và thoáng khí. Chất liệu này cũng giữ cho áo luôn giữ được hình dạng và màu sắc sau nhiều lần giặt.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Chọn Size</h1>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>xxl</div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>
                    Thêm vào giỏ hàng
                </button>
                <p className='productdisplay-right-category'>
                    <span>Danh mục: </span>
                    Nữ, Áo thun, Áo cộc tay
                </p>
                <p className='productdisplay-right-category'>
                    <span>Tags: </span>
                    Xu hướng, Hiện đại
                </p>
            </div>
        </div>
    )
}

export default ProductDisplay