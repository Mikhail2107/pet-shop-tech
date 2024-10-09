import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {
  fetchCart, updateCart,
  // updateCartItemQuantity,
  // removeCartItem,
} from '../../entities/cart/cartSlice';
import Button from '../../share/atom/Button/Button';
import ButtonControl from '../../share/molecula/ButtonControl/ButtonControl';
import { useAppDispatch } from '../../hook/AppDispatch';
import { AppSelector } from '../../hook/AppSelector';
import { Product } from '../../entities/cart/interface';
import Spiner from '../../share/spiner/spiner';
import { getUserFromLocalStorage } from '../../entities/user/auth';
import { useNavigate } from 'react-router-dom';

import './Cart.css';

function Cart() {
  const dispatch = useAppDispatch();
  const cart = AppSelector((state) => state.cartSlice);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user) {
      dispatch(fetchCart(user.id));
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate]);


  const handleIncreaseQuantity = (productId: number) => {
    const updatedProducts = cart.products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    dispatch(updateCart({ products: updatedProducts })); 
  };

  const handleDecreaseQuantity = (productId: number) => {
    const updatedProducts = cart.products.map((product) => {
      if (product.id === productId && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    dispatch(updateCart({ products: updatedProducts })); 
  };

  const handleDeleteItem = (productId: number) => {
    const updatedProducts = cart.products.filter(
      (product) => product.id !== productId);
      console.log(updatedProducts)
    dispatch(updateCart({ products: updatedProducts })); 
  };
  if (cart.isLoading) {
    return <Spiner />;
  }

  const cartPrice = [
    {
      id: 0,
      titlePrice: 'Total count',
      priceCount: `${cart.totalUniqueItems} item`,
      classNameTitle: 'total-totalcount',
      classNamePrice: 'cart-total-item',
    },
    {
      id: 1,
      titlePrice: 'Price without discount',
      priceCount: `$${cart.totalPriceWithoutDiscount}`,
      classNameTitle: 'cart-discount',
      classNamePrice: 'cart-price-discount',
    },
    {
      id: 2,
      titlePrice: 'Total price',
      priceCount: `$${cart.totalPrice}`,
      classNameTitle: 'cart-total-price',
      classNamePrice: 'cart-total-discount',
    },
  ];

  return (
    <>
      <div className="cart-container">
        <Helmet>
          <title>My cart | Goods4you </title>
        </Helmet>

        <h2 className="cart-title">My Cart</h2>

        {cart.products.length === 0 ? (
          <div className="cart-no-items">No items</div>
        ) : (
          <div className="cart-box">
            <ul className="cart-list">
              {cart.products.map((item: Product) => (
                <li
                  key={item.id}
                  className={item.quantity === 0 ? 'cart-item cart-opacity' : 'cart-item'}
                >
                  <div className="cart-product-info">
                    <img className="cart-image" src={item.thumbnail} alt="product-img" />
                    <div className="cart-product">
                      <Link to={`/product/${item.id}`}>
                        <span className="cart-product-title">{item.title}</span>
                      </Link>
                      <span className="cart-product-price">${item.price}</span>
                    </div>
                    {item.quantity === 0 ? (
                      <Button
                        className="button-cart"
                        bgImage={true}
                        onClick={() => handleIncreaseQuantity(item.id)}
                        ariaLabel={'Add to cart'}
                      >
                        Add to cart
                      </Button>
                    ) : (
                      <ButtonControl
                        className="count-buttons"
                        onClickButtonPlus={() => handleIncreaseQuantity(item.id)}
                        onClickButtonMinus={() => handleDecreaseQuantity(item.id)}
                        itemText={`${item.quantity} item${item.quantity !== 1 ? 's' : ''}`}
                        ariaLabelButtonMinus={'Button to minus'}
                        ariaLabelButtonPlus={'Button to plus'}
                      />
                    )}
                  </div>
                  <div className="cart-delete" onClick={() => handleDeleteItem(item.id)}>
                    Delete
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-description">
              <ul className="cart-description">
                {cartPrice.map((price) => (
                  <li key={price.id} className="cart-item-text">
                    <span className={price.classNameTitle}>{price.titlePrice}</span>
                    <span className={price.classNamePrice}>{price.priceCount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
