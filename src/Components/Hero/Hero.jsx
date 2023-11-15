import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Sản phẩm phổ biến</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Mới</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Sửa lựa chọn</p>
                    <p>Cho mọi người</p>
                </div>
                <div className='hero-lastest-btn'>
                    <div>Lựa chọn cuối cùng</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero