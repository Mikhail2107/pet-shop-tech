import Image from '../../../assets/image.png'

import './ProductPage.css'

function ProductPage(){

    return (
        <>
            <div className="product-card-container">
                <div className="product-card-gallery">
                    <img src={Image} alt="Main photo" className="product-main-photo" />
                    <ul className="gallery-photo">
                        <li className="product-little-photo">
                            <img src={Image} alt="little photo" className="little-photo" />
                        </li>
                        <li className="product-little-photo">
                            <img src={Image} alt="little photo" className="little-photo" />
                        </li>
                        <li className="product-little-photo">
                            <img src={Image} alt="little photo" className="little-photo" />
                        </li>
                        <li className="product-little-photo">
                            <img src={Image} alt="little photo" className="little-photo" />
                        </li>
                        <li className="product-little-photo">
                            <img src={Image} alt="little photo" className="little-photo" />
                        </li>
                        <li className="product-little-photo">
                            <img src={Image} alt="little photo" className="little-photo" />
                        </li>
                        <li className="product-little-photo">
                            <img src={Image} alt="little photo" className="little-photo" />
                        </li>
                        <li className="product-little-photo">
                            <img src={Image} alt="little photo" className="little-photo" />
                        </li>
                    </ul>
                </div>
                <div className="product-description-box">
                    <div className="product-title">Essence Mascara Lash Princess</div>
                    <div className="product-rating-box">
                        <div className="product-rate">
                            <ul className="rate-list">
                                <li className="rate-star"></li>
                                <li className="rate-star"></li>
                                <li className="rate-star"></li>
                                <li className="rate-star"></li>
                                <li className="rate-star"></li>
                            </ul>
                    </div>
                    <span className="product-rang">electronics,selfie accessories</span>
                    </div>                    
                    
                    <p className="product-availability">In Stock - Only 5 left!</p>
                    <p className="product-description">
                        The Essence Mascara Lash Princess is a popular mascara known for its 
                        volumizing and lengthening effects. Achieve dramatic lashes with this 
                        long-lasting and cruelty-free formula.
                    </p>
                    <p className="product-warranty">1 month warranty</p>
                    <p className="product-ships">Ships in 1 month</p>
                    <div className="product-price-box">
                        <div className="product-price-place">
                            <div className="price">
                                <span className="product-price">$7.17</span>
                                <span className="price-oldprice">$9.99</span>   
                            </div>
                            
                            <span className="product-discount">Your discount <b>14.5%</b></span>
                        </div>
                        
                        <button className="button-buy">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage