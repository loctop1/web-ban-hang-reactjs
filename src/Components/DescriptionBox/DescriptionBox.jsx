import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Mô tả sản phẩm
                </div>
                <div className="descriptionbox-nav-box fade">
                    Nhận xét (122)
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Chất liệu:
                    Sử dụng chất liệu cao cấp, áo mang đến cảm giác mềm mại, thoải mái và thoáng khí. Chất liệu này cũng giữ cho áo luôn giữ được hình dạng và màu sắc sau nhiều lần giặt.
                    Thiết kế:
                    Với một thiết kế hiện đại và tinh tế, áo thích hợp cho nhiều dịp, từ ngày đi làm đến các sự kiện ngoại ô cuối tuần. Đường may tỉ mỉ và đều đặn tạo nên sự chắc chắn và sang trọng.
                </p>
                <p>
                    Kiểu dáng:
                    Áo có nhiều kiểu dáng phong phú để phản ánh cá tính và sở thích của người mặc. Có thể chọn từ các kiểu áo polo, áo sơ mi, áo thun, và nhiều kiểu khác.
                    Màu sắc:
                    Bảng màu đa dạng, từ những tông màu trung tính cho đến những màu sắc tươi sáng, giúp bạn dễ dàng phối hợp với các trang phục khác và theo phong cách cá nhân của mình.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox