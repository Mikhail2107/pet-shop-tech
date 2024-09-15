import { NavLink } from 'react-router-dom'

import './Header.css'

function Header(){
    return (
        <>
        <header>            
                <div className="header-menu" role="navigation" aria-label="Main navigation">
                    <NavLink className="logo-company" to="/" aria-label="Company logo" >                        
                    </NavLink>
                    <ul className="header-list" role="list">
                        <li className="header-item">
                            <a className="header-link" href="#catalog" aria-label="Go to catalog">Catalog</a>
                        </li>
                        <li className="header-item">
                            <a className="header-link" href="#faq" aria-label="Go to FAQ">FAQ</a>
                        </li>
                        <li className="header-item item-cart">
                            <NavLink className="header-link" to="/cart" aria-label="Go to cart">Cart</NavLink>
                            <span className="count-product" aria-label="Number of items in cart">99+</span>
                        </li>
                        <li className="header-item item-username">
                            <NavLink className="header-link" to="#" aria-label="Go to user profile">Johnson Smith</NavLink>
                        </li>
                    </ul>
                </div>       
            </header>
        </>
    )
}

export default Header
