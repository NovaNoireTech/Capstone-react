import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './index.css';
import novaNoireLogo from './assets/novanoire.png'
import facebookLogo from './assets/facebook logo.png'
import instagramLogo from './assets/instagram logo.png'
import peace from './assets/peacelove.png'
import bookLogo from './assets/book.png'
import networkLogo from './assets/network.png'
import resourceLogo from './assets/resource.png'
import menuLogo from './assets/menu.png'


//import image
export default function App() {
  const donateLink = 'https://www.pledge.to/empowertech-elevating-black-women-in-tech';
  const homeLink = '/';
  const shopLink = 'https://www.etsy.com/shop/NovaNoireTech';
  const instagramLink = 'https://www.instagram.com/';
  const facebookLink = 'https://www.facebook.com/';

  const openLinkInNewTab = (link) => {
    window.open(link, '_blank');
  };


  return (
    <div className="app-container">
      <header className="header">
       <div className = "logowrapper" > <img className= "logo" src={novaNoireLogo} alt="Nova Noire Tech" /></div>
        <div className="navwrapper"> <img src={menuLogo} alt="menu" />
        <div className='menu' >
          <Link to = "/" >HOME</Link>
          <Link to = "/membership">MEMBERSHIP</Link>
          <a href={shopLink}>SHOP</a>
          <a href={donateLink}>DONATE</a>


        </div>
         </div>
      </header>
      <main className="main-content">
       <Outlet/>
      </main>
      <footer className="footer">
        <div className="contact-section">
          <h2 className="section-heading">Contact</h2>
          <p className="section-textf">
            Connect with us on social media:<br />
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
