import { Helmet } from 'react-helmet'
import Image from '../../assets/image.png'
import { Link } from 'react-router-dom'

import './Cart.css'
import ButtonControl from '../../share/molecula/ButtonControl/ButtonControl';
import { useState } from 'react';
function Cart() {
    const [count, setCount] = useState(0); 

    const handleIncreaseCount = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    const handleDecreaseCount = () => {
      if (count > 0) {
        setCount(prevCount => prevCount - 1);
      }
    };
    return (
        <>
        <Helmet>
                <title>My cart | Goods4you </title>
        </Helmet>
        <div className="cart-container">
            <h2 className="cart-title">My Cart</h2>
            <div className="cart-box">                
                <div className="cart-description">               
                    <ul className="cart-description">
                        <li className="cart-item-text">
                            <span className="total-totalcount">Total count</span>
                            <span className="cart-total-item">3 item</span>
                        </li>
                        <li className="cart-item-text">
                            <span className="cart-discount">Price without discount</span>
                            <span className="cart-price-discount">$700</span>
                        </li>
                        <li className="cart-item-text">
                            <span className="cart-total-price">Total price</span>
                            <span className="cart-total-discount">$590</span>
                        </li>
                    </ul>
                </div>   
            </div>
            </div>
        </>
    )
}

export default Cart