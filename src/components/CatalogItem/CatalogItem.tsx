import { Link } from 'react-router-dom'
import Image from '../../assets/image.png'
import './CatalogItem.css'

function CatalogItem() {

    return (
        <>             
            <div  className="product-item">
                <div className="product-imagebox">
                    <div className="hide-box">
                    <span className="show-details">Show details</span>
                    </div>
                    <Link to='/product/123'>
                        <img className="product-image" title='Essence Mascara' src={Image} alt="product-name" />
                    </Link>
                    
                </div>
                <div className="product-card">
                    <div className="product-info">
                    <span className="product-name">Essence Mascara</span>
                    <span className="product-cardprice">$110</span>
                    </div>
                    <div className="product-buy"></div>
                </div>
            </div>

        </>
    )
}

export default CatalogItem