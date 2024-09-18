import './Footer.css'

function Footer (){

    return (
        <>
        <footer className="footer-container">
            <div className="footer-box">
                <div className="logo-company"></div>
            <ul className="footer-list">
                <li className="footer-item">
                    <a className="footer-link" href="#catalog">Catalog</a>
                </li>
                <li className="footer-item">
                    <a className="header-link" href="#faq">FAQ</a>
                </li>
            </ul>
            </div>            
        </footer>
        </>
    )
}

export default Footer