import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../entities/product/productApi/productsApi'; 
import { Helmet } from 'react-helmet';
import Spiner from "../../share/spiner/spiner";

import './ProductPage.css';
import Button from '../../share/atom/Button/Button';
import { useEffect, useState } from 'react';

function ProductPage() {
  const { productId } = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(parseInt(productId, 10));
  const [imageMainIndex, setImageMainIndex] = useState(0); 
  const starsRate: string[] = ['rate-star', 'rate-star', 'rate-star', 'rate-star', 'rate-star'];
  const rating: number = Math.round(product?.rating)


  useEffect(() => {
    handleReplaceImage
  },[]) 

  if (isLoading) {
    return <Spiner />;
  }

  function handleReplaceImage (index: number): void {
    setImageMainIndex(index); 
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
                <span className="price-oldprice">${(product?.price * (1 + product?.discountPercentage / 100)).toFixed(2)}</span> 
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
