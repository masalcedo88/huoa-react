//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/huoa-logo.svg';
import { ReactComponent as Instagram } from 'assets/instagram.svg';
import { ReactComponent as Facebook } from 'assets/facebook.svg';
import { ReactComponent as Youtube } from 'assets/youtube.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <Link to="/mission-purpose" className="footer__link">About</Link>
          <Link to="/clubs" className="footer__link">Clubs</Link>
          <Link to="/events" className="footer__link">Events</Link>
          <Link to="/contact" className="footer__link">Contact</Link>
          {/* TODO: this will be added back later so we'll comment these out for now */}
          {/* <Link to="/opportunities" className="footer__link">Opportunities</Link>
          <Link to="/events" className="footer__link">Events</Link>
          <Link to="/geneology" className="footer__link">Geneology</Link>
          <Link to="/news" className="footer__link">News</Link> */}
          <Link to="/donate" className="footer__link">Donate</Link>
        </div>
        <Link to="/">
          <Logo className="footer__logo" />
        </Link>
        <div className="footer__contact">
          <div className="footer__contact--col">
            <a href="https://goo.gl/maps/vPeokXPRG2e59jPS7" target="_blank" rel="noopener noreferrer">
              94-587 Ukeʻe Street Waipahu, HI 96797 808.676.5400
            </a>
          </div>
          <div className="footer__contact--col">Mon-Fri, 8:30 am - 5 pm Saturday & Sunday, Closed</div>
        </div>
        <div className="footer__social">
          <a href="https://www.youtube.com/c/HawaiiUnitedOkinawaAssociation" target="_blank" rel="noopener noreferrer">
            <Youtube className='footer__social-icon' />
          </a>
          <a href="https://www.instagram.com/hawaiiunitedokinawaassociation/?hl=en" target="_blank" rel="noopener noreferrer">
            <Instagram className='footer__social-icon' />
          </a>
          <a href="https://www.facebook.com/HUOA.org/" target="_blank" rel="noopener noreferrer">
            <Facebook className='footer__social-icon' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
