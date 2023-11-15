import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Nhận các Ưu đãi Độc Quyền qua Email Của Bạn</h1>
            <p>Đăng ký nhận bản tin của chúng tôi và luôn cập nhật thông tin mới</p>
            <div>
                <input type="email" placeholder='Vui lòng điền Email' />
                <button>Đăng ký</button>
            </div>
        </div>
    );
}

export default NewsLetter;
