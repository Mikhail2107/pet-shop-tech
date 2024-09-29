import './LinlItem.css'

interface ILinkItem {
  href: string; 
  ariaLabel: string;
  textLink: string;
  className?: string; 
  spanText?: string; 
}

const LinkItem: React.FC<ILinkItem> = ({ href, ariaLabel, textLink, className, spanText }) => {
   
  return (    
      <a 
        className={`header-link ${className}`} 
        href={href} 
        aria-label={ariaLabel}
      >
        {textLink}
        {spanText && <span className="count-product" aria-label="Number of items in cart">{spanText}</span>} 
      </a>    
  );
};

export default LinkItem;
