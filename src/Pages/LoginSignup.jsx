import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Đăng ký</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Vui lòng điền họ và tên' />
                    <input type="email" placeholder='Vui lòng điền Email' />
                </div>
                <button>Đăng ký</button>
                <p className='loginsignup-login'>
                    Bạn đã có tài khoản? <span>Đăng nhập</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>Để tiếp tục, bạn phải đồng ý các điều khoản sử dụng và chính sách.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup