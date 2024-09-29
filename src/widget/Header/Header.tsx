import { NavLink } from 'react-router-dom'

import './Header.css'
import LinkHeader from '../../share/molecula/LinkHeader/LinkHeader';

interface HeaderLink {
    href: string;
    ariaLabel: string;
    text: string;
    className?: string; 
    linkClassName?: string; 
    spanText?: string;
  }
const Header = () => {
    const headerLinks: HeaderLink[] = [
      { href: '#catalog', ariaLabel: 'Go to catalog', text: 'Catalog' },
      { href: '#faq', ariaLabel: 'Go to FAQ', text: 'FAQ', className: 'special-item' },
      { href: '/cart', ariaLabel: 'Go to cart', text: 'Cart', className: 'item-cart', linkClassName: 'cart-link', spanText: "99+" },
      { href: '#profile', ariaLabel: 'Go to user profile', text: 'Johnson Smith', className: 'item-username' },
    ];
  
    return (
      <>
        <header>
          <div className="header-menu" role="navigation" aria-label="Main navigation">
            <NavLink className="logo-company" to="/" aria-label="Company logo"></NavLink>
            <LinkHeader links={headerLinks} />
          </div>
        </header>
      </>
    );
  };
  
  export default Header;
