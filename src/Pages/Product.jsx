import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    /**Sử dụng hook useContext để truy cập giá trị từ context (ShopContext).
     * Giả sử ShopContext đã được tạo và cung cấp một giá trị có dạng như { all_product: [...products] }, thì dòng này sẽ lấy 
     ra mảng sản phẩm (all_product) từ context. */

    const { productId } = useParams();
    /**Sử dụng hook useParams để trích xuất các tham số từ URL.
     * Giả sử useParams trích xuất productId từ URL, ví dụ: "/products/:productId", thì dòng này sẽ lấy giá trị của 
     * productId từ URL.*/

    const product = all_product.find((e) => e.id === Number(productId));
    /**Sử dụng phương thức find trên mảng all_product để tìm sản phẩm có id trùng khớp với productId từ URL.
     * e là mỗi phần tử trong mảng all_product, và dòng này trả về sản phẩm đầu tiên mà có id trùng với productId.
     * Number(productId) chuyển đổi productId từ dạng chuỗi sang số để so sánh chính xác.*/
    return (
        <div>
            {/* Đường dẫn danh mục */}
            <Breadcrum product={product} />
            {/* Thông tin sản phẩm */}
            <ProductDisplay product={product} />
            {/* Mô tả sản phẩm */}
            <DescriptionBox />
            {/* Các sản phẩm khác */}
            <RelatedProducts/>
        </div>
    )
}

export default Product