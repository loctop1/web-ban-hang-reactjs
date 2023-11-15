import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}>
                <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
                {/* onClick={window.scrollTo(0, 0)}: Đoạn mã này có nghĩa là khi hình ảnh được nhấp, nó sẽ kích hoạt hàm window.scrollTo(0, 0). Hàm này cuộn 
                cửa sổ lên đầu (tọa độ 0, 0). */}
            </Link>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className="item-price-new">
                    {props.new_price}.000<sup>đ</sup>
                </div>
                <div className="item-price-old">
                    {props.old_price}.000<sup>đ</sup>
                </div>
            </div>
        </div>
    )
}

export default Item