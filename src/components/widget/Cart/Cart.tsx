import Image from '../../../assets/image.png'

import './Cart.css'

function Cart() {

    return (
        <>
        <div className="cart-container">
            <h2 className="cart-title">My Cart</h2>
            <div className="cart-box">
                <ul className="cart-list">                    
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
                    <li className="cart-item">
                        <div className="cart-product-info">
                        <img className='cart-image' src={Image} alt="product-img" />
                            <div className="cart-product">                                
                                <span className="cart-product-title"> Essence Mascara Lash Princess</span>
                                <span className="cart-product-price">$110</span>
                            </div> 
                            <div className="count-buttons">
                                {/* <div className="cart-minus-plus button-minus"></div>
                                <input className='count-input' id='count-input' type="text" value='1 item' placeholder="0"/>                            
                                <div className="cart-minus-plus button-plus"></div> */}
                            </div>
                            <div className="cart-delete button-cart"></div>
                        </div>
                    </li>                    
                </ul>
            </div>
            <div className="cart-description">
                <span className="cart-totalcount">Total count</span>
                <span className="cart-total-item">3 item</span>
                <span className="cart-discount">Price without discount</span>
                <span className="cart-price-discount">$700</span>
                <span className="cart-discount">Total price</span>
                <span className="cart-price-discount">$590</span>
            </div>
                
            </div>
        </>
    )
}

export default Cart