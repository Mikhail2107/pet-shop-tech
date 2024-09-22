import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ButtonControl from '../../share/molecula/ButtonControl/ButtonControl';
import { useEffect, useMemo, useState } from 'react';
import { fetchCart } from '../../entities/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../share/atom/Button/Button';

import './Cart.css';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart?.carts[0]);
  
  const cartId = 6;
  // console.log(state)
  const [cartItem, setCartItems] = useState( [
    { id: 1, title: 'Essence Mascara Lash Princess', price: 110, imageUrl: Image, count: 1 },
    { id: 2, title: 'Essence Mascara Lash Princess', price: 110, imageUrl: Image, count: 1 },
    { id: 3, title: 'Essence Mascara Lash Princess', price: 110, imageUrl: Image, count: 1 },
  ]);
  useEffect(() => {
    dispatch(fetchCart(6));
  }, [dispatch, cartId]);

  // const cartItems = useMemo(() => {
  //     console.log(cart);
  //   if (cart && cart.products) {
  //     return cart.products.map((item) => (
  //       console.log(item.title)
  //   ));
  //   } else {
  //     return [];
  //   }
  // }, [cart]);

  
  console.log(cart.products);

  const cartPrice = [
    { id: 0, titlePrice: 'Total count', priceCount: `${3} item`, classNameTitle: 'total-totalcount', classNamePrice: 'cart-total-item' },
    { id: 1, titlePrice: 'Price without discount', priceCount: `$${760}`, classNameTitle: 'cart-discount', classNamePrice: 'cart-price-discount' },
    { id: 2, titlePrice: 'Total price', priceCount: `$${500}`, classNameTitle: 'cart-total-price', classNamePrice: 'cart-total-discount' }, // Получаем discountedTotal
  ];
  
  const handleIncreaseCount = (itemId: number) => {
    setCartItems(prevItems => prevItems.map(item => 
      item.id === itemId ? { ...item, count: item.count + 1 } : item
    ));
  };
  const handleDecreaseCount = (itemId: number) => {
    setCartItems(prevItems => prevItems.map(item => 
      item.id === itemId && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  };

  const handleDeleteItem = (itemId: number) => {
    setCartItems(cartItem.filter(item => item.id !== itemId));
  };
 

  return (
    <>
      <div className="cart-container">
        <Helmet>
          <title>My cart | Goods4you </title>
        </Helmet>

        <h2 className="cart-title">My Cart</h2>
        <div className="cart-box">
          <ul className="cart-list">
            {cart.products.map(item => (
              <li key={item.id} className={item.count === 0 ? "cart-item cart-opacity" : "cart-item"}>
                <div className="cart-product-info">
                  <img className='cart-image' src={item.thumbnail} alt="product-img" />
                  <div className="cart-product">
                    <Link to={`/product/${item.id}`}>
                      <span className="cart-product-title">{item.title}</span>
                    </Link>
                    <span className="cart-product-price">${item.price}</span>
                  </div>
                  {item.count === 0 ? (
                    <Button className='button-cart' bgImage={true}
                            onClick={() => handleIncreaseCount(item.id)}
                            ariaLabel={'Add to cart'}>
                      Add to cart
                    </Button>
                  ) : (
                    <ButtonControl
                      className='count-buttons'
                      onClickButtonPlus={() => handleIncreaseCount(item.id)}
                      onClickButtonMinus={() => handleDecreaseCount(item.id)}
                      itemText={`${item.quantity} item`}
                      ariaLabelButtonMinus={'Button to minus'}
                      ariaLabelButtonPlus={'Button to plus'}
                    />
                  )}
                </div>
                <div className="cart-delete" onClick={() => handleDeleteItem(item.id)}>Delete</div>
              </li>
            ))}
          </ul>
          <div className="cart-description">
            <ul className="cart-description">
              {cartPrice.map(price => (
                <li key={price.id} className="cart-item-text">
                  <span className={price.classNameTitle}>{price.titlePrice}</span>
                  <span className={price.classNamePrice}>{price.priceCount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
