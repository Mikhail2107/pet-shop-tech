import Image from '../../../assets/image.png'

import './Cart.css'

function Cart() {

    return (
        <>
            <h2 className="cart-title">My Cart</h2>
            <div className="cart-container">
                <ul className="cart-list">                    
                    <li className="cart-item">
                        <div className="cart-product-info">
                        <img className='cart-image' src={Image} alt="product-img" />
                            <div className="cart-product">                                
                                <span className="cart-product-title"> Essence Mascara Lash Princess</span>
                                <span className="cart-product-price">$110</span>
                            </div> 
                            <div className="count-buttons">
                                <button className="cart-minus-plus">-</button>
                                <input className='count-input' id='count-input' type="text" value='1 item' placeholder="0"/>                            
                                <button className="cart-minus-plus">+</button>
                            </div>                           
                                
                                <div className="cart-delete">Delete</div>
                        </div>
                    </li>
                    <li className="cart-item">
                        <div className="cart-product-info">
                        <img className='cart-image' src={Image} alt="product-img" />
                            <div className="cart-product">                                
                                <span className="cart-product-title"> Essence Mascara Lash Princess</span>
                                <span className="cart-product-price">$110</span>
                            </div> 
                            <div className="count-buttons">
                                <button className="cart-minus-plus">-</button>
                                <input className='count-input' id='count-input' type="text" value='1 item' placeholder="0"/>                            
                                <button className="cart-minus-plus">+</button>
                            </div>                           
                                
                                <div className="cart-delete">Delete</div>
                        </div>
                    </li>
                    <li className="cart-item">
                        <div className="cart-product-info">
                        <img className='cart-image' src={Image} alt="product-img" />
                            <div className="cart-product">                                
                                <span className="cart-product-title"> Essence Mascara Lash Princess</span>
                                <span className="cart-product-price">$110</span>
                            </div> 
                            <div className="count-buttons">
                                <button className="cart-minus-plus">-</button>
                                <input className='count-input' id='count-input' type="text" value='1 item' placeholder="0"/>                            
                                <button className="cart-minus-plus">+</button>
                            </div>                           
                                
                                <div className="cart-delete">Delete</div>
                        </div>
                    </li>
                    <li className="cart-item">
                        <div className="cart-product-info">
                        <img className='cart-image' src={Image} alt="product-img" />
                            <div className="cart-product">                                
                                <span className="cart-product-title"> Essence Mascara Lash Princess</span>
                                <span className="cart-product-price">$110</span>
                            </div> 
                            <div className="count-buttons">
                                <button className="cart-minus-plus">-</button>
                                <input className='count-input' id='count-input' type="text" value='1 item' placeholder="0"/>                            
                                <button className="cart-minus-plus">+</button>
                            </div>                           
                                
                                <div className="cart-delete">Delete</div>
                        </div>
                    </li>
                    <li className="cart-item">
                        <div className="cart-product-info">
                        <img className='cart-image' src={Image} alt="product-img" />
                            <div className="cart-product">                                
                                <span className="cart-product-title"> Essence Mascara Lash Princess</span>
                                <span className="cart-product-price">$110</span>
                            </div> 
                            <div className="count-buttons">
                                <div className="cart-minus-plus button-minus"></div>
                                <input className='count-input' id='count-input' type="text" value='1 item' placeholder="0"/>                            
                                <div className="cart-minus-plus button-plus"></div>
                            </div>                           
                                
                                <div className="cart-delete">Delete</div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Cart