import { useState } from "react";

function Bai3() {
  const products = [
    { name: "Sách", price: 10000 },
    { name: "Bút", price: 5000 },
    { name: "Vở", price: 7000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (p) => {
    setCart([...cart, p]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Bài 3: Giỏ hàng</h2>
      <h3>Sản phẩm</h3>
      {products.map((p, i) => (
        <div key={i}>
          {p.name} - {p.price}₫{" "}
          <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
        </div>
      ))}

      <h3>Giỏ hàng</h3>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} - {item.price}₫
          </li>
        ))}
      </ul>
      <p><b>Tổng tiền: {total}₫</b></p>
    </div>
  );
}

export default Bai3;
