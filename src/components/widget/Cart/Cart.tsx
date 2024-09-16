import { Helmet } from 'react-helmet'
import Image from '../../../assets/image.png'

import './Cart.css'
import { Link } from 'react-router-dom'

function Cart() {

    return (
        <>
        <Helmet>
                <title>My cart | Goods4you </title>
        </Helmet>
        <div className="cart-container">
            <h2 className="cart-title">My Cart</h2>
            <div className="cart-box">
                <ul className="cart-list">                    
                    <li className="cart-item">
                        <div className="cart-product-info">
                        <img className='cart-image' src={Image} alt="product-img" />
                            <div className="cart-product">
                                <Link to="/product/123">
                                    <span className="cart-product-title"> Essence Mascara Lash Princess</span>
                                </Link>                                
                                <span className="cart-product-price">$110</span>
                            </div> 
                            <div className="count-buttons">
                                <div className="cart-minus-plus button-minus"></div>
                                <input className='count-input' id='count-input' type="text" value='1 item' placeholder="0"/>                            
                                <div className="cart-minus-plus button-plus"></div>
                            </div>  
                        </div>
                        <div className="cart-delete">Delete</div>
                    </li>
                    <li className="cart-item">
                        <div className="cart-product-info">
                        <img className='cart-image' src={Image} alt="product-img" />
                            <div className="cart-product">                                
                                <Link to="/product/123">
                                    <span className="cart-product-title"> Essence Mascara Lash Princess</span>
                                </Link> 
                                <span className="cart-product-price">$110</span>
                            </div> 
                            <div className="count-buttons">
                                <div className="cart-minus-plus button-minus"></div>
                                <input className='count-input' id='count-input' type="text" value='1 item' placeholder="0"/>                            
                                <div className="cart-minus-plus button-plus"></div>
                            </div> 
                        </div>
                        <div className="cart-delete">Delete</div>
                    </li>
                    <li className="cart-item">
                        <div className="cart-product-info">
                        <img className='cart-image' src={Image} alt="product-img" />
                            <div className="cart-product">                                
                                <Link to="/product/123">
                                    <span className="cart-product-title"> Essence Mascara Lash Princess</span>
                                </Link> 
                                <span className="cart-product-price">$110</span>
                            </div> 
                            <div className="count-buttons">
                                <div className="cart-minus-plus button-minus"></div>
                                <input className='count-input' id='count-input' type="text" value='5 items' placeholder="0"/>                            
                                <div className="cart-minus-plus button-plus"></div>
                            </div>                           
                        </div>
                        <div className="cart-delete">Delete</div>
                    </li>
                    <li className="cart-item">
                        <div className="cart-product-info">
                            <img className='cart-image' src={Image} alt="product-img" />
                            <div className="cart-product">                                
                                <Link className="cart-product-title" to="/product/123">
                                    <span > Essence Mascara Lash Princess</span>
                                </Link> 
                                <span className="cart-product-price">$110</span>
                            </div> 
                            <div className="count-buttons"></div>
                        </div>
                        <div className="cart-delete button-cart"></div>
                    </li>                    
                </ul>
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