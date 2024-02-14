import React from 'react';
import './index.css';
import novaNoireLogo from './assets/novanoire.png'
import peace from './assets/peacelove.png'
// import BookIcon from './assets/bookicon.jsx'


//import image
export default function App() {
  const donateLink = 'https://www.pledge.to/empowertech-elevating-black-women-in-tech';
  const homeLink = '/';
  const joinNowLink = 'https://docs.google.com/forms/your-google-form-link';
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
        <div className="navwrapper"> navhere </div>
      </header>
      <main className="main-content">
        <div className='bigimg'> <img className="bigpic" src= {peace} alt= "Big Picture"/></div>
        <section className="mission-section">
          <h2 className="section-heading1">OUR MISSON</h2>
          <p className="section-text">At Nova Noire Tech, our mission is to empower Black women in tech. We provide resources, foster a supportive community, and actively network with other Black women in tech and Black women-owned tech companies. Our aim is to bridge gaps, ensuring every Black woman feels valued and celebrated in the industry. Together, we break barriers and reshape the narrative for Black women in tech.</p>
        </section>
        <section className="vision-section">
          <h2 className="section-heading2">VISION</h2>
          <p className="section-text">At Nova Noire Tech, our vision is to amplify Black women's presence in the tech industry. We aim to provide essential resources for breaking into tech, fostering a culture where Black women feel valued and recognized. Together, we are building a united community because we believe in the strength that comes from standing together. Our vision is a future where Black women lead, innovate, and thrive in every facet of the tech landscape.</p>
        </section>
        <section className="why-dei-section">
          <h2 className="section-heading3">Why DEI</h2>
          <p className="section-text">
          At Nova Noire Tech, we believe in the power of diversity, equity, and inclusion in the tech industry. Our commitment to DEI is rooted in the understanding that a diverse workforce fosters innovation and creativity. In the realm of technology, where representation is lacking, we emphasize the crucial need for Black women to contribute their unique perspectives and talents. By breaking barriers and ensuring inclusivity, we aim to transform the tech landscape and harness the untapped potential of Black women as innovators.
          </p>
        </section>
        <section className="what-we-do-section">
          <h2 className="section-heading">What We Do</h2>
          <div>
          <p className="section-text">
          At Nova Noire Tech, we offer a comprehensive range of initiatives to help Black women thrive in the tech industry. Our programs include:
          </p>
          <div className="grid-3-column"> <div> Resources and Support: Providing access to essential resources, and networking opportunities tailored to the needs of Black women in tech. </div> <div>Educational Courses: Offering a variety of educational courses designed to enhance technical skills, professional development, and leadership capabilities, empowering Black women at every career stage.</div><div>Black Women-Owned Tech Companies: Facilitating connections and collaborations with Black women-owned tech companies, fostering a supportive ecosystem within the industry.</div></div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="contact-section">
          <h2 className="section-heading">Contact</h2>
          <p className="section-text">
            Connect with us on social media:<br />
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            {' | '}
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </p>
        </div>
        <div>
        </div>
      </footer>
    </div>
  );
}
