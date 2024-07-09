import Image from 'next/image';
import React from 'react';
import truSvg from '../assets/svg/tru.svg';
import rightArrow from '../assets/svg/rightArrow.svg';
import handshake from '../assets/imgs/handShake.png';
import Link from 'next/link';
import '../assets/css/reqIntro.css'

const Reqintro = () => {
  return (
    <div className='req-an-intro-section container'>
       <div className="intro-overlay"></div>
      <div className="intro">
        <div className="intro-heading">
          We Stay
          <Image className='tru-img' src={truSvg} alt='Tru Image'/> To You
        </div>
        <Image src={handshake} alt='Handshake image' className='img'/>
        <div className="intro-content">
          Get in touch and gain access to our services, complemented by our
          expertise and honesty
        </div>
        <div className="btn">
          <Link href="#" className="req-view-more">
            <span>Request An Introduction</span>
            <Image src={rightArrow} alt='Right Arrow'/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Reqintro
