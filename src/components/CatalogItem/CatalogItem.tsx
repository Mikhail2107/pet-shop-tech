import { Link } from 'react-router-dom';
import Image from '../../assets/image.png';
import './CatalogItem.css';
import { useState } from 'react';

function CatalogItem() {
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
      <div className="product-item" role="article">
        <div className="product-imagebox">
          <div className="hide-box">
            <span className="show-details" tabIndex={5}>Show details</span>
          </div>
          <Link to='/product/123'>
            <img
              className="product-image"
              title='Essence Mascara'
              src={Image} 
              alt="Essence Mascara" 
            />
          </Link>                    
        </div>

        <div className="product-card">
          <div className="product-info">
            <span className="product-name">Essence Mascara</span>
            <span className="product-cardprice">$110</span>
          </div>

          {count === 0 ? (
            <div className="product-buy" tabIndex={6} onClick={handleIncreaseCount}></div>
          ) : (
            <div className="count-buttons">
              <div className="cart-minus-plus button-minus" onClick={handleDecreaseCount}></div>
              <span className='count-input' id='count-input'>{count} item</span>                           
              <div className="cart-minus-plus button-plus" onClick={handleIncreaseCount}></div>
            </div> 
          )}
          
        </div>
      </div>
    </>
  );
}

export default CatalogItem;
