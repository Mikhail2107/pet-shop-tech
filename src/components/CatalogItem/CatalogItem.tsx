
import Image from '../../assets/image.png'
import './CatalogItem.css'

function CatalogItem() {

    return (
        <>             
            <div className="product-item">
                <div className="product-imagebox">
                    <div className="hide-box">
                    <span className="show-details">Show details</span>
                    </div>
                    <img className="product-image" src={Image} alt="product-name" />
                </div>
                <div className="product-card">
                    <div className="product-info">
                    <span className="product-name">Essence Mascara</span>
                    <span className="product-price">$110</span>
                    </div>
                    <div className="product-buy"></div>
                </div>
            </div>
        </>
    )
}

export default CatalogItem