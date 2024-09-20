import { Link } from 'react-router-dom';
// import Image from '../../assets/image.png';
import './CatalogItem.css';
import { useState } from 'react';
import ButtonControl from '../../share/molecula/ButtonControl/ButtonControl';
import { Product } from '../../entities/product/productApi/interface';

function CatalogItem({id, price, title, images}: Product) {
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
          <Link to={`/product/${id}`}>
            <img
              className="product-image"
              title='Essence Mascara'
              src={images[0]} 
              alt="Essence Mascara" 
            />
          </Link>                    
        </div>

        <div className="product-card">
          <div className="product-info">
            <span className="product-name">{title}</span>
            <span className="product-cardprice">{price}</span>
          </div>

          {count === 0 ? (
            <div className="product-buy" tabIndex={6} onClick={handleIncreaseCount}></div>
          ) : ( <ButtonControl className='count-buttons'
                          onClickButtonMinus={handleDecreaseCount}
                           onClickButtonPlus={handleIncreaseCount} 
                           itemText={`${count} item`} 
                           ariaLabelButtonMinus={'Button to minus'} 
                           ariaLabelButtonPlus={'plus'} />
          )}
        </div>
      </div>
    </>
  );
}

export default CatalogItem;
