import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hook/AppDispatch';
import { AppSelector } from '../../hook/AppSelector';
import ButtonControl from '../../share/molecula/ButtonControl/ButtonControl';
import { Product } from '../../entities/product/productApi/interface';
import Button from '../../share/atom/Button/Button';
import { updateCart } from '../../entities/cart/cartSlice'; 

import './CatalogItem.css';

function CatalogItem({ id, price, title, images }: Product) {
  const dispatch = useAppDispatch();
  const cart = AppSelector((state) => state.cartSlice);
  const [quantityInCart, setQuantityInCart] = useState(0); 

  useEffect(() => {
    const cartItem = cart.products.find((item) => item.id === id);
    if (cartItem) {
      setQuantityInCart(cartItem.quantity);
    }
  }, [cart.products, id]);

  const handleAddToCart = () => {
    if (cart.cartId) { 
      const existingProductIndex = cart.products.findIndex((item) => item.id === id);

      let updatedProducts;

      if (existingProductIndex !== -1) {
        updatedProducts = cart.products.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedProducts = [
          ...cart.products,
          { id, quantity: 1 }, 
        ];
      }

      dispatch(updateCart({ products: updatedProducts })); 
    } 
  };

  const handleIncreaseCount = (productId: number) => {
    const updatedProducts = cart.products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    dispatch(updateCart({ products: updatedProducts }));
  };

  const handleDecreaseCount = (productId: number) => {
    const existingProductIndex = cart.products.findIndex((item) => item.id === productId);

    let updatedProducts;

    if (existingProductIndex !== -1 && cart.products[existingProductIndex].quantity > 1) {
      updatedProducts = cart.products.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    } else {
      updatedProducts = cart.products.filter((item) => item.id !== productId);
    }

    dispatch(updateCart({ products: updatedProducts }));
  };
  return (
    <>
      <div className="product-item" role="article">
        <div className="product-imagebox">
          <div className="hide-box">
            <span className="show-details" tabIndex={5}>Show details</span>
          </div>
          <Link to={`/product/${id}`} >
            <img
              className="product-image"
              title={title}
              src={images[0]} 
              alt={title} 
            />
          </Link>                    
        </div>

        <div className="product-card">
          <div className="product-info">
            <span className="product-name">{title}</span>
            <span className="product-cardprice">{price}</span>
          </div>

          {quantityInCart === 0 ? ( 
            <Button
              className="product-buy"
              ariaLabel={'add to cart'}
              bgImage={true}
              onClick={() => handleAddToCart()}
            />
          ) : (
            <ButtonControl
              className="count-buttons"
              onClickButtonPlus={() => handleIncreaseCount(id)}
              onClickButtonMinus={() => handleDecreaseCount(id)}
              itemText={`${quantityInCart} item`} 
              ariaLabelButtonMinus={'Button to minus'}
              ariaLabelButtonPlus={'plus'}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default CatalogItem;

