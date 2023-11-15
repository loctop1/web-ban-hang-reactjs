import React from 'react'
import './Offers.css'
import exclucive_image from '../Assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Ưu đãi Độc Quyền</h1>
                <h1>Dành Cho Bạn</h1>
                <p>SẢN PHẨM BÁN CHẠY NHẤT</p>
                <button>Kiểm Tra Ngay</button>
            </div>
            <div className="offers-right">
                <img src={exclucive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers