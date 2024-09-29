import React from 'react';
import { NavLink } from 'react-router-dom';
import LinkItem from '../../atom/Link/LinkItem';

import './LinkHeader.css'

interface HeaderLink {
  href: string;
  ariaLabel: string;
  text: string;
  className?: string; 
  linkClassName?: string;
  spanText?: string;
}

interface ILinkHeader {
  links: HeaderLink[];
}

const LinkHeader: React.FC<ILinkHeader> = ({ links }) => {
  return (
    <ul className="header-list" role="list">
      {links.map((link, index) => (
        <li key={index} className={`header-item ${link.className}`}>
          {link.href.startsWith('/') ? (
            <NavLink className={`header-link ${link.linkClassName}`} to={link.href} aria-label={link.ariaLabel}>
              <LinkItem href={link.href} ariaLabel={link.ariaLabel} textLink={link.text} spanText={link.spanText}/>
            </NavLink>
          ) : (
            <LinkItem href={link.href} ariaLabel={link.ariaLabel} textLink={link.text} className={link.linkClassName} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default LinkHeader;
