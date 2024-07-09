'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import '../../node_modules/remixicon/fonts/remixicon.css';
import Link from 'next/link';

// images
import upArrow from '../assets/imgs/upArrow.png';
import logo from '../assets/imgs/logo.png';
import underline from '../assets/svg/underline.svg';


const Footer = () => {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);
  const [aboutUsExpanded, setAboutUsExpanded] = useState(false);
  const [resourcesExpanded, setResourcesExpanded] = useState(false);

    const handleArrowClick = () => {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  const handleTitleClick = (section) => {
    switch (section) {
      case 'services':
        setServicesExpanded(!servicesExpanded);
        break;
      case 'products':
        setProductsExpanded(!productsExpanded);
        break;
      case 'aboutUs':
        setAboutUsExpanded(!aboutUsExpanded);
        break;
      case 'resources':
        setResourcesExpanded(!resourcesExpanded);
        break;
      default:
        break;
    }
  };

  

  return (
    <div className='footer'>
      <div className='footerLogo'>
        <Image src={upArrow} alt='up arrow' className='logo-arrow' onClick={handleArrowClick} />
        <Image src={logo} alt='HDFC LOGO' className='footerLogo' />
      </div>

      <div className='container row'>
        <div className='footerCol'>
          <h4 className='title' onClick={() => handleTitleClick('services')}>
            Our Services <i className={`title-plus ${servicesExpanded ? 'ri-subtract-line' : 'ri-add-fill'}`}></i>
          </h4>
          <Image src={underline} alt='underline svg' />

          <ul className={`footerList ${servicesExpanded ? 'show' : ''}`}>
            <li>
              <Link href="/Services/Landing Page">
                Investment Management
              </Link>
            </li>
            <li>
              <Link href="/Services/Landing Page">
                Tax Planning
              </Link>
            </li>
            <li>
              <Link href="/Services/Landing Page">
                Legacy Planning
              </Link>
            </li>
            <li>
              <Link href="/Services/Landing Page">
                Treasury Management
              </Link>
            </li>
          </ul>
        </div>
        <div className='footerCol'>
          <h4 className='title' onClick={() => handleTitleClick('products')}>
            Our Products <i className={`title-plus ${productsExpanded ? 'ri-subtract-line' : 'ri-add-fill'}`}></i>
          </h4>
          <Image src={underline} alt='underline svg' />

          <ul className={`footerList ${productsExpanded ? 'show' : ''}`}>
            <li>
              <Link href="/Services/Landing Page">
                Equity Broking
              </Link>
            </li>
            <li>
              <Link href="/Services/Landing Page">
                Mutual funds
              </Link>
            </li>
            <li>
              <Link href="/Services/Landing Page">
                Private Markets
              </Link>
            </li>
            <li>
              <Link href="/Services/Landing Page">
                Real Estate
              </Link>
              <Link href="/Services/Landing Page">
                Global Investment
              </Link>
              <Link href="/Services/Landing Page">
                PMS / AIF
              </Link>
              <Link href="/Services/Landing Page">
                Commodities
              </Link>
            </li>
          </ul>
        </div>
        <div className='footerCol'>
          <h4 className='title' onClick={() => handleTitleClick('aboutUs')}>
            About Us  <i className={`title-plus ${aboutUsExpanded ? 'ri-subtract-line' : 'ri-add-fill'}`}></i>
          </h4>
          <Image src={underline} alt='underline svg' />

          <ul className={`footerList ${aboutUsExpanded ? 'show' : ''}`}>
            <li>
              <Link href="/Services/Landing Page">
                About HDFC Tru
              </Link>
            </li>
            <li>
              <Link href="/Services/Landing Page">
                The HDFC Group
              </Link>
            </li>
            <li>
              <Link href="/Services/Landing Page">
                Our People
              </Link>
            </li>
            <li>
              <Link href="/Services/Landing Page">
                Who We Work With
              </Link>
            </li>
          </ul>
        </div>
        <div className='footerCol'>
          <h4 className='title' onClick={() => handleTitleClick('resources')}>
            Resources <i className={`title-plus ${resourcesExpanded ? 'ri-subtract-line' : 'ri-add-fill'}`}></i>
          </h4>
          <Image src={underline} alt='underline svg' />

          <ul className={`footerList ${resourcesExpanded ? 'show' : ''}`}>
            <li>
              <Link href="/Services/Landing Page">
                Research
              </Link>
            </li>
            <li>
              <Link href="/Services/Landing Page">
                Media
              </Link>
            </li>
            <li>
              <Link href="/Services/Landing Page">
                Insights
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>


      <div className="footerNav container">
        <div className="miniNav">
          <ul>
            <li>
              <i className="ri-circle-fill displayNone"></i>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <i className="ri-circle-fill"></i>
              <Link href="#">Client Login</Link>
            </li>
            <li>
              <i className="ri-circle-fill"></i>
              <Link href="#">T&amp;C</Link>
            </li>
            <li>
              <i className="ri-circle-fill"></i>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <i className="ri-circle-fill"></i>
              <Link href="#">Disclaimer</Link>
            </li>
          </ul>
        </div>

        <div className="socialMedia">
          <Link href="#">
            <i className="ri-facebook-circle-fill"></i>
          </Link>
          <Link href="#">
            <i className="ri-twitter-x-fill"></i>
          </Link>
          <Link href="#">
            <i className="ri-instagram-line"></i>
          </Link>
          <Link href="#">
            <i className="ri-youtube-line"></i>
          </Link>
        </div>

        <div className="copyright">
          <i className="ri-copyright-line"></i>
          2024 HDFC TRU
        </div>
      </div>
    </div>
  )
}

export default Footer
