import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"
// Import danh sách sản phẩm từ một tệp khác (all_product.js)

export const ShopContext = createContext(null);
/**chúng ta sử dụng createContext từ thư viện React để tạo một Context React có tên ShopContext. Context này sẽ được sử dụng 
 * để chia sẻ dữ liệu liên quan đến cửa hàng trong ứng dụng của bạn. */

// Chức năng giỏ hàng
const getDefaultCart = () => {
    let cart = {};
    /**Tạo một biến cart và gán cho nó giá trị là một đối tượng trống. Đối tượng này sẽ đại diện cho giỏ hàng, trong đó key là index của sản phẩm và giá trị 
     * là số lượng sản phẩm tương ứng trong giỏ hàng. */
    for (let index = 0; index < all_product.length + 1; index++) {
        /**Bắt đầu một vòng lặp for bắt đầu từ index = 0 và chạy cho đến khi index bằng chiều dài của mảng all_product cộng thêm 1. Vòng lặp này sẽ chạy qua 
         * tất cả các sản phẩm và một giá trị nữa để đảm bảo rằng giỏ hàng có đủ chỗ cho tất cả các sản phẩm. */
        cart[index] = 0;
        /**Đặt giá trị của key tương ứng trong đối tượng cart là 0. Cụ thể, mỗi key sẽ là index của một sản phẩm trong mảng all_product, và giá trị của key 
         * đó sẽ là số lượng sản phẩm tương ứng trong giỏ hàng. */
    }
    return cart;
    /**Trả về đối tượng cart sau khi đã đặt giá trị cho tất cả các key trong vòng lặp. Đối tượng này đại diện cho giỏ hàng mặc định có số lượng sản phẩm bằng 
     * 0 cho mỗi sản phẩm. */
}

const ShopContextProvider = (props) => {
    /**Component ShopContextProvider là một functional component, nhận một đối số props. */

    const [cartItems, setCartItems] = useState(getDefaultCart());
    /**Sử dụng React Hook useState để tạo một trạng thái cartItems và một hàm setCartItems để cập nhật trạng thái đó. Giá trị ban đầu của cartItems được lấy 
     * bằng cách gọi hàm getDefaultCart(). cartItems sẽ lưu trữ thông tin về số lượng sản phẩm trong giỏ hàng. */

    // Tăng số lượng sản phẩm
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        /**(prev) => {...}: Đây là một hàm callback được truyền vào setCartItems. Tham số prev là giá trị trạng thái trước đó. 
        * { ...prev, [itemId]: prev[itemId] + 1 }: Trong hàm callback này, bạn sử dụng toán tử spread ({...prev}) để tạo một bản sao của đối tượng prev 
        * (trạng thái trước đó). Sau đó, bạn cập nhật giá trị của itemId trong đối tượng mới này. Nếu itemId chưa tồn tại trong đối tượng prev, nó sẽ được 
        * thêm vào; nếu đã tồn tại, giá trị của nó sẽ được tăng lên 1.*/
    }

    // Giảm số lượng sản phẩm
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        /**{ ...prev, [itemId]: prev[itemId] - 1 }: Sử dụng toán tử spread ({...prev}) để tạo một bản sao của đối tượng prev. Sau đó, cập nhật giá trị của 
         * itemId trong đối tượng mới này bằng cách giảm đi 1. Nếu itemId chưa tồn tại trong đối tượng prev, nó sẽ được thêm vào với giá trị là -1. */
    }

    // Chức năng tổng giá tiền toàn bộ sản phẩm trong giỏ hàng
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        /**Khởi tạo biến totalAmount để lưu tổng giá trị của giỏ hàng. */
        for (const item in cartItems) {
            /**Bắt đầu một vòng lặp for...in để duyệt qua từng sản phẩm trong giỏ hàng (cartItems). */
            if (cartItems[item] > 0) {
                /**Kiểm tra xem số lượng của sản phẩm có lớn hơn 0 không. Nếu có, tiếp tục tính tổng giá trị. */
                let itemInfo = all_product.find((product) => product.id === Number(item))
                /**Sử dụng phương thức find trên mảng all_product. Phương thức này trả về giá trị của phần tử đầu tiên trong mảng mà hàm callback trả về true.
                 * Hàm callback này so sánh id của mỗi sản phẩm trong all_product với Number(item) (ID của sản phẩm trong giỏ hàng). Number(item) được sử 
                 * dụng để chuyển đổi item (có thể là chuỗi) thành số.*/
                totalAmount += itemInfo.new_price * cartItems[item];
                /**itemInfo.new_price: Lấy giá mới của sản phẩm từ thông tin sản phẩm đã được tìm thấy trong all_product. itemInfo là một đối tượng chứa 
                 * thông tin của sản phẩm, và new_price là thuộc tính chứa giá mới của sản phẩm.
                 * cartItems[item]: Lấy số lượng của sản phẩm từ giỏ hàng (cartItems). item là key của đối tượng giỏ hàng, và cartItems[item] là giá trị số 
                 * lượng tương ứng.
                 * Nhân giá mới của sản phẩm với số lượng trong giỏ hàng để tính tổng giá trị của sản phẩm đó. */
            }
        }
        return totalAmount;
    }

    //Chức tổng đơn hàng cho icon trên giỏ hàng
    const getTotalCartItems = () => {
        let totalItem = 0;
        /**Khởi tạo biến totalItem để lưu tổng số sản phẩm. */
        for (const item in cartItems) {
            /**Bắt đầu một vòng lặp for...in để duyệt qua từng sản phẩm trong giỏ hàng (cartItems). */
            if (cartItems[item] > 0) {
                /**Kiểm tra xem số lượng của sản phẩm có lớn hơn 0 không. Nếu có, tiếp tục tính tổng giá trị. */
                totalItem += cartItems[item];
                /**Cộng số lượng của sản phẩm vào biến totalItem. */
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems, all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount }
    /**Tạo một đối tượng contextValue chứa thông tin về tất cả sản phẩm (all_product), số lượng sản phẩm trong giỏ hàng (cartItems), và hàm để thêm sản phẩm 
     * vào giỏ hàng (addToCart), tổng giá tiền sản phẩm (getTotalCartAmount). Đối tượng này sẽ được sử dụng trong một Context, có thể là React.createContext 
     * để chia sẻ giữa các thành phần con.*/
    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
        /**Tiếp theo, chúng ta sử dụng <ShopContext.Provider> để bọc nội dung của component props.children bên trong một 
         * Provider của Context. Giá trị của Context sẽ là contextValue, và nhờ điều này, bất kỳ thành phần con nào bên 
         * trong ShopContextProvider có thể truy cập dữ liệu này thông qua ShopContext. */
    )
}

export default ShopContextProvider;