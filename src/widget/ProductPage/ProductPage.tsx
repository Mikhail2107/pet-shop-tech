import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../entities/product/productApi/productsApi';
import { Helmet } from 'react-helmet';
import Button from '../../share/atom/Button/Button';
import NotFound from '../NotFound/NotFound';
import Spiner from "../../share/spiner/spiner";

import './ProductPage.css';
import { useEffect, useState } from 'react';

function ProductPage() {
  const { productId } = useParams();
  
  if (productId === undefined) {
    return <NotFound />;
  }
  const productID = parseInt(productId, 10);
  const { data: product, isLoading, error } = useGetProductByIdQuery(productID); 

  const [imageMainIndex, setImageMainIndex] = useState<number>(0);
  const starsRate: string[] = ['rate-star', 'rate-star', 'rate-star', 'rate-star', 'rate-star'];

  const rating = product?.rating ? Math.round(product.rating) : NaN;

  const oldPrice = () => {
    if (product?.price !== undefined && product?.discountPercentage !== undefined) {
      return +(product?.price * (1 + product?.discountPercentage / 100)).toFixed(2);
    }
    return null;
  };

  function handleReplaceImage(index: number): void {
    setImageMainIndex(index);
  }

  useEffect(() => {
    if (!isLoading) {
      handleReplaceImage;
    }
  }, [product, isLoading]);

  if (productId === undefined) {
    return <NotFound />;
  }

  if (isLoading) {
    return <Spiner />;
  }

  if (error) {
    return <div>Ошибка загрузки данных о товаре</div>;
  }
  return (
    <>
      <Helmet>
        <title>{product?.title} | Goods4you</title>
      </Helmet>

      <div className="product-card-container">
        <div className="product-card-gallery">
          <img 
            src={product?.images[imageMainIndex] || product?.images[0]}
            alt="Main photo" 
            className="product-main-photo" 
          />
          <ul className="gallery-photo">
            {product?.images.map((image:string, index: number) => (
              <li 
                className="product-little-photo" 
                key={index}
                onClick={() => handleReplaceImage(index)}
              >
                <img src={image} alt="little photo" className="little-photo" />
              </li>
            ))}
          </ul>
        </div>
        <div className="product-description-box">
          <div className="product-title">{product?.title}</div>
          <div className="product-rating-box">
            <div className="product-rate">
              <ul className="rate-list">
              {starsRate.map((star, index) => (
                <li className={rating >= index+1 ? star : star + ' rate-star-none'}></li>
              ))}
              </ul>
            </div>
            <span className="product-rang">{product?.category}</span>
          </div>

          <p className="product-availability">
            In Stock - Only {product?.stock} left!
          </p> 
          <p className="product-description">{product?.description}</p> 
          <p className="product-warranty">{product?.warrantyInformation}</p> 
          <p className="product-ships">{product?.returnPolicy}</p> 
          <div className="product-price-box">
            <div className="product-price-place">
              <div className="price">
                <span className="product-price">${product?.price}</span>
                <span className="price-oldprice">{oldPrice()}</span> 
              </div>

              <span className="product-discount">Your discount <b>{product?.discountPercentage}%</b></span>
            </div>
            <Button className="button-buy" bgImage={false} ariaLabel={'Add to cart'}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;