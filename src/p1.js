import  './cart.css';
const Product = ({ id, name, price, }) => {
    return(
<> 
<table class="styled-table">
    <thead>
        <tr>
            <th>Number</th><br/>
            <th>image</th><br />
			<th>Name</th><br/>
			<th>Price</th><br/>
			<th>Item</th><br/>
			<th>Qunitity</th><br/>
			<th>total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td><a heaf='./image/macbook.png'></a></td><br/>
			<td>mackbook</td><br/>
			<td>235000</td><br/>
			<td>Electronics</td><br/>
			<td>1</td><br/>
			
        </tr>
		<tr>
            <td>2</td>
            <td><a heaf='/image/smartwatch.png'></a></td><br/>
			<td>Smartwatch</td><br/>
			<td>135000</td><br/>
			<td>Electronics</td><br/>
			<td>1</td><br/>
        </tr>
		<tr>
            <td>3</td>
            <td><a heaf='/image/phone.png'></a></td><br/>
			<td>Phone</td><br/>
			<td>335000</td><br/>
			<td>Electronics</td><br/>
			<td>1</td><br/>	
        </tr>
		<tr>
            <td>4</td>
            <td><a heaf='/image/cattle.png'></a></td><br/>
			<td>Cattle</td><br/>
			<td>5000</td><br/>
			<td>Electronics</td><br/>
			<td>1</td><br/>	
        </tr>
		<tr>
            <td>5</td>
            <td><a heaf='/image/headphone.png'></a></td><br/>
			<td>Headphone</td><br/>
			<td>15000</td><br/>
			<td>Electronics</td><br/>
			<td>1</td><br/>
        </tr>
        <tr>
            <td>6</td>
            <td><a heaf='/image/frock.png'></a></td><br/>
			<td>frock</td><br/>
			<td>35000</td><br/>
			<td>clothing</td><br/>
			<td>1</td><br/>
        </tr>
        <tr>
            <td>7</td>
            <td><a heaf='/image/shorty.png'></a></td><br/>
			<td>shorty</td><br/>
			<td>65000</td><br/>
			<td>clothing</td><br/>
			<td>1</td><br/>
        </tr>
        <tr>
            <td>8</td>
            <td><a heaf='/image/jeans.png'></a></td><br/>
			<td>jeans</td><br/>
			<td>35000</td><br/>
			<td>clothing</td><br/>
			<td>1</td><br/>
        </tr>
        <tr>
            <td>9</td>
            <td><a heaf='/image/suit.png'></a></td><br/>
			<td>suit</td><br/>
			<td>225000</td><br/>
			<td>clothing</td><br/>
			<td>1</td><br/>
        </tr>
        <tr>
            <td>10</td>
            <td><a heaf='/image/tshirt.png'></a></td><br/>
			<td>tshirt</td><br/>
			<td>55000</td><br/>
			<td>clothing</td><br/>
			<td>1</td><br/>
        </tr>
        <tr>
            <td>11</td>
            <td><a heaf='/image/shoes 3.png'></a></td><br/>
			<td>shoes-3</td><br/>
			<td>95150</td><br/>
			<td>footwear</td><br/>
			<td>1</td><br/>
        </tr>
        <tr>
            <td>12</td>
            <td><a heaf='/image/heels1.png'></a></td><br/>
			<td>heels1</td><br/>
			<td>95000</td><br/>
			<td>footwear</td><br/>
			<td>1</td><br/>
        </tr>
        <tr>
            <td>13</td>
            <td><a heaf='/image/shoes 2.png'></a></td><br/>
			<td>shoes-2</td><br/>
			<td>125000</td><br/>
			<td>footwear</td><br/>
			<td>1</td><br/>
        </tr>
        <tr>
            <td>14</td>
            <td><a heaf='/image/shoes 1.png'></a></td><br/>
			<td>shoes-1</td><br/>
			<td>35050</td><br/>
			<td>footwear</td><br/>
			<td>1</td><br/>
        </tr>
        <tr>
            <td>15</td>
            <td><a heaf='/image/shoes.png'></a></td><br/>
			<td>shoes</td><br/>
			<td>35000</td><br/>
			<td>footwear</td><br/>
			<td>1</td><br/>
        </tr>

        {/*<tr class="active-row">
            <td>Melissa</td>
            <td>5150</td>
        </tr>*/}
    </tbody>
</table>
        
</>
  )
    }
export default Product;