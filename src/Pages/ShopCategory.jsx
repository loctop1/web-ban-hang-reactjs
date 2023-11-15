import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdownIcon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategor-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Hiển thị 1-12</span> trên tổng số 36 sản phẩm
        </p>
        <div className="shopcategory-soft">
          Sắp xếp theo <img src={dropdownIcon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            /**Kiểm tra nếu giá trị của thuộc tính category của component (props.category) bằng với giá trị category của 
             * phần tử hiện tại trong vòng lặp (item.category).*/
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price} />
            );
          } else {
            return null;
            /**Nếu điều kiện kiểm tra ở bước 2 là false, trả về null (không có gì). */
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Đang tải...
      </div>
    </div>
  );
};

export default ShopCategory;
