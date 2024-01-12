import './cart.css';
const Cart = ({ id, name, price, }) => {

  return (
    <>
<div class="container">
        <h1>Shopping Cart</h1>
        <div class="cart">
          <div id="navigation1">
            <ul>
              <span>
                <a class="navigation" href="#">Image</a>
              </span>
              <span>
                <a class="navigation " href="#">Product</a>
              </span>
              <span>
                <a class=" navigation" href="#">Quantity</a>
              </span>
              <span>
                <a class=" navigation" href="#">Price</a>
              </span>
              <span>
                <a class=" navigation" href="#">Remove</a>
              </span>
            </ul>
          </div>


          <div class="product">
            <img src="/image/macbook.png" alt="Product 1" />
            <h2>Product 1</h2>
            <div class="quantity">
              <label for="quantity1">Quantity:</label>
              <input type="number" id="quantity1" name="quantity1" value="1" />
            </div>
            <div class="price">
              price: $20.00
            </div>
            <div class="product-removal">
              <button class="remove-product">Remove</button>
            </div>


          </div>

          <div class="product">
            <img src="/image/smartwatch.png" alt="Product 1" />
            <h2>Product 2</h2>
            <div class="quantity">
              <label for="quantity1">Quantity:</label>
              <input type="number" id="quantity1" name="quantity1" value="1" />
            </div>
            <div class="price">
              price: $20.00
            </div>
            <div class="product-removal">
              <button class="remove-product">Remove</button>
            </div>


          </div>
          <div class="product">
            <img src="/image/jeans.png" alt="Product 1" />
            <h2>Product 3</h2>
            <div class="quantity">
              <label for="quantity1">Quantity:</label>
              <input type="number" id="quantity1" name="quantity1" value="1" />
            </div>
            <div class="price">
              price: $20.00
            </div>
            <div class="product-removal">
              <button class="remove-product">Remove</button>
            </div>
          </div>


          <div class="product">
            <img src="/image/heels1.png" alt="Product 1" />
            <h2>Product 4</h2>
            <div class="quantity">
              <label for="quantity1">Quantity:</label>
              <input type="number" id="quantity1" name="quantity1" value="1" />
            </div>
            <div class="price">
              price: $20.00
            </div>
            <div class="product-removal">
              <button class="remove-product">Remove</button>
            </div>
          </div>


          <div class="product">
            <img src="/image/shoes 2.png" alt="Product 2" />
            <h2>Product 5</h2>
            <div class="quantity">
              <label for="quantity2">Quantity:</label>
              <input type="number" id="quantity2" name="quantity2" value="1" />
            </div>
            <div class="price">price: $30.00
            </div>
            <div class="product-removal">
              <button class="remove-product">Remove</button>
            </div>
          </div>

        </div>

      </div >
    </>
  )
}
export default Cart