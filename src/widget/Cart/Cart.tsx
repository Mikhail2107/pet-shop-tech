import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { fetchCart } from '../../entities/cart/cartSlice';
import Button from '../../share/atom/Button/Button';
import ButtonControl from '../../share/molecula/ButtonControl/ButtonControl';
import { useAppDispatch} from '../../hook/AppDispatch';
import { AppSelector } from '../../hook/AppSelector';
import { Product } from '../../entities/cart/interface';
import Spiner from '../../share/spiner/spiner';
import { getUserFromLocalStorage } from '../../entities/user/auth';
import { useNavigate } from 'react-router-dom';

import './Cart.css';

function Cart() {
  const dispatch = useAppDispatch();
  const cart = AppSelector(state => state.cartSlice.cart); 
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user) {
      console.log('ID пользователя:', user.id);
      dispatch(fetchCart(15)); 
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate]);



  if (cart?.isLoading) {
    return <Spiner />
  }
  const [,setCount] = useState<number>(0);

  const cartPrice = [
    { id: 0, titlePrice: 'Total count', priceCount: `${3} item`, classNameTitle: 'total-totalcount', classNamePrice: 'cart-total-item' },
    { id: 1, titlePrice: 'Price without discount', priceCount: `$${760}`, classNameTitle: 'cart-discount', classNamePrice: 'cart-price-discount' },
    { id: 2, titlePrice: 'Total price', priceCount: `$${500}`, classNameTitle: 'cart-total-price', classNamePrice: 'cart-total-discount' }, // Получаем discountedTotal
  ];
  
  const handleIncreaseCount = () => {
    setCount((prev: number) => prev + 1);
  };
  const handleDecreaseCount = () => {
    setCount((prev: number) => prev - 1);
  };
  
  const handleDeleteItem = (itemId: number) => {
    setCount(count.filter(item => item.id !== itemId));
  };  
  return (
    <>
      <div className="cart-container">
        <Helmet>
          <title>My cart | Goods4you </title>
        </Helmet>
        
        <h2 className="cart-title">My Cart</h2>
         {cart?.totalProducts === 0 ? (<div className='cart-no-items'>No items</div>):         
        (<div className="cart-box">
          <ul className="cart-list">
            {cart?.products.map((item: Product) => (
              <li key={item.id} className={item.quantity === 0 ? "cart-item cart-opacity" : "cart-item"}>
                <div className="cart-product-info">
                  <img className='cart-image' src={item.thumbnail} alt="product-img" />
                  <div className="cart-product">
                    <Link to={`/product/${item.id}`}>
                      <span className="cart-product-title">{item.title}</span>
                    </Link>
                    <span className="cart-product-price">${item.price}</span>
                  </div>
                  {item.quantity === 0 ? (
                    <Button className='button-cart' bgImage={true}
                            onClick={() => handleIncreaseCount()}
                            ariaLabel={'Add to cart'}>
                      Add to cart
                    </Button>
                  ) : (
                    <ButtonControl
                      className='count-buttons'
                      onClickButtonPlus={() => handleIncreaseCount()}
                      onClickButtonMinus={() => handleDecreaseCount()}
                      itemText={`${item.quantity} item`}
                      ariaLabelButtonMinus={'Button to minus'}
                      ariaLabelButtonPlus={'Button to plus'}
                    />
                  )}
                </div>
                <div className="cart-delete" 
                    onClick={() => handleDeleteItem(item.id)}
                    >Delete</div>
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
        </div>)}  
      </div>
    </>
  );
}

export default Cart;