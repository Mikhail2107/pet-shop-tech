import LinkHeader from '../../share/molecula/LinkHeader/LinkHeader';
import './Footer.css'; 
interface HeaderLink {
    href: string;
    ariaLabel: string;
    text: string;
    className?: string; 
    linkClassName?: string; 
    spanText?: string;
  }
const Footer = () => {
  const footerLinks: HeaderLink[] = [
    { href: '#catalog', ariaLabel: 'Go to catalog', text: 'Catalog', className: 'footer-item' },
    { href: '#faq', ariaLabel: 'Go to FAQ', text: 'FAQ', className: 'footer-item' },    
  ];

  return (
    <>
      <footer className="footer-container">
        <div className="footer-box">
          <div className="logo-company"></div>
          <LinkHeader links={footerLinks} /> 
        </div>
      </footer>
    </>
  );
};

export default Footer;
