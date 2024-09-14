import './Header.css'

function Header(){
    return (
        <>
        <header>            
                <div className="header-menu" role="navigation" aria-label="Main navigation">
                    <div className="logo-company" aria-label="Company logo" >                        
                    </div>
                    <ul className="header-list" role="list">
                        <li className="header-item">
                            <a className="header-link" href="#catalog" aria-label="Go to catalog">Catalog</a>
                        </li>
                        <li className="header-item">
                            <a className="header-link" href="#faq" aria-label="Go to FAQ">FAQ</a>
                        </li>
                        <li className="header-item item-cart">
                            <a className="header-link" href="#" aria-label="Go to cart">Cart</a>
                            <span className="count-product" aria-label="Number of items in cart">99+</span>
                        </li>
                        <li className="header-item item-username">
                            <a className="header-link" href="#" aria-label="Go to user profile">Johnson Smith</a>
                        </li>
                    </ul>
                </div>       
            </header>
        </>
    )
}

export default Header
