import './cart.css';
import Header from './header';
import data from './data.json'
import { useEffect, useState } from 'react';

const Cart = () => {
  const [filteredData, setFilteredData] = useState([]);
  const storedIds = JSON.parse(localStorage.getItem('CartDetails')) || [];

  useEffect(() => {
    const filtered = data.filter(item => storedIds.includes(item.id));
    setFilteredData(filtered);
  }, [storedIds]);

  const removeIdInLocalStorage = (id) => {
    const updatedIds = storedIds.filter(storedId => storedId !== id);
    localStorage.setItem('CartDetails', JSON.stringify(updatedIds));
    setFilteredData(prevData => prevData.filter(item => item.id !== id));
  }

  return (
    <>
      <Header />

      <div className="cart">
        <div className="item">
          <div id="header"><br></br>
            <ul>
              <span>
                <a className="header1" href="#">Image</a>
              </span>
              <span>
                <a className="header1 " href="#">Product</a>
              </span>
              <span>
                <a className=" header1" href="#">Quantity</a>
              </span>
              <span>
                <a className=" header1" href="#">Price</a>
              </span>
              <span>
                <a className="header1" href="#">Remove</a>
              </span>
               </ul><br></br>
  </div>
        </div>
        {
          filteredData && filteredData?.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.image} alt="Product 1" />
              <h2>{item.productname}</h2>
              <div className="quantity">
                <label htmlFor="quantity1">Quantity:</label>
                <input type="number" id="quantity1" name="quantity1" value="1" />
              </div>
              <div className="price">
                {item.Price}
              </div>
              <div className="product-removal">
                <button className="remove-product" onClick={() => removeIdInLocalStorage(item.id)}>Remove</button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Cart;