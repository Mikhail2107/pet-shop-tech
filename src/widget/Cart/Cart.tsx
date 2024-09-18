import { Helmet } from 'react-helmet';
import Image from '../../assets/image.png';
import { Link } from 'react-router-dom';
import './Cart.css';
import ButtonControl from '../../share/molecula/ButtonControl/ButtonControl';
import { useState } from 'react';
import Button from '../../share/atom/Button/Button';

interface CartItem {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
}

function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>( [
    { id: 1, title: 'Essence Mascara Lash Princess', price: 110, imageUrl: Image, count: 1 },
    { id: 2, title: 'Essence Mascara Lash Princess', price: 110, imageUrl: Image, count: 1 },
    { id: 3, title: 'Essence Mascara Lash Princess', price: 110, imageUrl: Image, count: 1 },
  ]);

  // const cartPrice = [
  //   { id: 0, titlePrice: 'Total count', priceCount: `${cartItems.reduce((acc, item) => acc + item.count, 0)} item`, classNameTitle: 'total-totalcount', classNamePrice: 'cart-total-item' },
  //   { id: 1, titlePrice: 'Price without discount', priceCount: `$${cartItems.reduce((acc, item) => acc + item.price * item.count, 0)}`, classNameTitle: 'cart-discount', classNamePrice: 'cart-price-discount' },
  //   // ... (добавьте логику для расчета скидки и окончательной цены)
  // ];
	const cartPrice = [
    { id: 0, titlePrice: 'Total count', priceCount: `${3} item`, classNameTitle: 'total-totalcount', classNamePrice: 'cart-total-item' },
    { id: 1, titlePrice: 'Price without discount', priceCount: `$${700}`, classNameTitle: 'cart-discount', classNamePrice: 'cart-price-discount' },
    {id: 2, titlePrice: 'Total price', priceCount: `$ ${590}`, classNameTitle: 'cart-total-price', classNamePrice: 'cart-total-discount'},
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
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <>
      <Helmet>
        <title>My cart | Goods4you </title>
      </Helmet>
      <div className="cart-container">
        <h2 className="cart-title">My Cart</h2>
        <div className="cart-box">
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <div className="cart-product-info">
                  <img className='cart-image' src={item.imageUrl} alt="product-img" />
                  <div className="cart-product">
                    <Link to={`/product/${item.id}`}>
                      <span className="cart-product-title">{item.title}</span>
                    </Link> 
                    <span className="cart-product-price">${item.price}</span>
                  </div> 
                  {item.count === 0 ? (
                    <Button className='button-cart' bgImage={true}
                      onClick={() => handleIncreaseCount(item.id)}>
                      Add to cart
                    </Button>
                  ) : (
                    <ButtonControl 
                      className='count-buttons'
                      onClickButtonPlus={() => handleIncreaseCount(item.id)}
                      onClickButtonMinus={() => handleDecreaseCount(item.id)} 
                      itemText={`${item.count} item`} 
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
