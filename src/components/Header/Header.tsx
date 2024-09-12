

import './Header.css'

function Header(){
    return (
        <>
        <header>            
                <div className="header-menu">
                    <div className="logo-company" >                        
                    </div>
                    <ul className="header-list">
                        <li className="header-item">
                            <a className="header-link" href="#catalog">Catalog</a>
                        </li>
                        <li className="header-item">
                            <a className="header-link" href="#faq">FAQ</a>
                        </li>
                        <li className="header-item item-cart">
                            <a className="header-link" href="#">Cart</a>
                        </li>
                        <li className="header-item item-username">
                            <a className="header-link" href="#">Johnson Smith</a>
                        </li>
                    </ul>
                </div>       
            </header>
        </>
    )
}

export default Header