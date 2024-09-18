import Button from '../../share/atom/Button/Button'
import './Sale.css'

function Sale(){

    return (
        <>
        <div className="home-top">                
                <p className="backgruond-text">Goods4you</p>
                <div className="sale-container">                
                <p className="sale-title">
                    Any products from famous brands with worldwide delivery
                </p>
                <p className="sale-text">
                    We sell smartphones, laptops, clothes, 
                    shoes and many other products at low prices
                </p>
                <a href="#catalog"> 
                    <Button className='sale-buy' ariaLabel={'Go to shopping'} bgImage={false}>Go to shopping</Button>
                </a>                
            </div>
        </div>  
        </>
    )
}

export default Sale