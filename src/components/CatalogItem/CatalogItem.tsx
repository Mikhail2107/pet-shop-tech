
import Image from '../../assets/image.png'
import './CatalogItem.css'

function CatalogItem() {

    return (
        <>
             <div className="hide-box">
                <span className="show-details">Show details</span>                        
            </div>                    
            <img className="product-image" src={Image} alt="product-name" />                    
                <div className="product-card">
                    <div className="product-info">
                        <span className="product-name">Essence Mascara</span>                        
                        <span className="product-price">$110</span>                            
                    </div>
                    <div className="product-buy"></div>                        
                </div> 
                
        </>
    )
}

export default CatalogItem