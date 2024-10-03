import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './Header.css';
import LinkHeader from '../../share/molecula/LinkHeader/LinkHeader';
import { useAppDispatch } from '../../hook/AppDispatch';
import { AppSelector } from '../../hook/AppSelector';
import { fetchCart } from '../../entities/cart/cartSlice';
import { getUserFromLocalStorage } from '../../entities/user/auth';

interface HeaderLink {
  href: string;
  ariaLabel: string;
  text: string;
  className?: string;
  linkClassName?: string;
  spanText?: string;
}

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { totalUniqueItems: totalProducts } = AppSelector((state) => state.cartSlice);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = getUserFromLocalStorage();
    if (storedUser) {
      const fullName = storedUser.firstName + ' ' + storedUser.lastName;
      setUser(fullName); 
      dispatch(fetchCart(storedUser.id)); 
    }
  }, [dispatch]);

  const headerLinks: HeaderLink[] = [
    { href: '#catalog', ariaLabel: 'Go to catalog', text: 'Catalog' },
    { href: '#faq', ariaLabel: 'Go to FAQ', text: 'FAQ', className: 'special-item' },
    {
      href: '/cart',
      ariaLabel: 'Go to cart',
      text: 'Cart',
      className: 'item-cart',
      linkClassName: 'cart-link',
      spanText: totalProducts < 100 ? totalProducts.toString() : '99+',
    },
    {
      href: '#profile',
      ariaLabel: 'Go to user profile',
      text: user ? user : 'Johnson Smith', 
      className: 'item-username',
    },
  ];

  return (
    <>
      <header>
        <div className="header-menu" role="navigation" aria-label="Main navigation">
          <NavLink className="logo-company" to="/" aria-label="Company logo" />
          {user && <LinkHeader links={headerLinks} />} 
        </div>
      </header>
    </>
  );
};

export default Header;

