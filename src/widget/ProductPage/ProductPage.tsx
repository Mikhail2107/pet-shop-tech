import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../entities/product/productApi/productsApi'; // Импортируем хук для получения продукта по ID
import { Helmet } from 'react-helmet';
import Spiner from "../../share/spiner/spiner";

import './ProductPage.css';
import Button from '../../share/atom/Button/Button';

function ProductPage() {
  const { productId } = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(parseInt(productId, 10)); 

  if (isLoading) {
    return <Spiner />;
  }

  return (
    <>
      <Helmet>
        <title>{product?.title} | Goods4you</title>
      </Helmet>
      <div className="product-card-container">
        <div className="product-card-gallery">
          <img src={product?.images[0]} alt="Main photo" className="product-main-photo" />
          <ul className="gallery-photo">
            {product?.images.slice(1).map((image:string, index: number) => (
              <li className="product-little-photo" key={index}>
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
                {/* Здесь вы можете реализовать отображение рейтинга, например, звезд */}
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
