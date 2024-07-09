import Image from 'next/image'
import React from 'react'
import '../assets/css/ourInsights.css';
// images
import rightArrow from '../assets/svg/rightArrow.svg';
import img1 from '../assets/imgs/img1.png';
import img2 from '../assets/imgs/img2.png';
import img3 from '../assets/imgs/img3.png';

const Ourinsights = () => {
  return (
    <section id="our-insights" className="container">
          <div className="insights-header">
             <h2>Our</h2>
            <div className="insights-title">
              <h6>Insights</h6>
              <div className="view-all-button">
               <a href="#">
                <div className="button-text">View all</div>
                {/* <img className="button-arrow" src="assets/images/arrow.png" alt="view-all-button"> */}

                <Image src={rightArrow} alt='view all button' className='button-arrow'/>
               </a>
              </div>
            </div>
          </div>
          <div className="insights-content-container">
            <div className="insight-item">
              <div className="insight-image-main-container">
                {/* <img src="assets/images/img1.png" alt="bank-image"> */}

                <Image src={img1} alt='Bank Image'/>
              </div>
              <div className="insight-description">
                <div className="insight-details">
                  <div className="insight-topic">WEALTH PLANNING</div>
                  <div className="reading-time">02 mins</div>
                </div>
                <div className="insight-summary">What to consider when building your portfolio</div>
              </div>
            </div>
      
            <div className="insight-box mobile">
              <div className="swiper mySwiper5">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="insight-item now">
                      <div className="insight-image-container">
                        {/* <img src="assets/images/img2.png" alt="bank-image"> */}

                        <Image src={img2} alt='WEALTH PLANNING'/>
                      </div>
                      <div className="insight-description insight-description2">
                        <div className="insight-details insight-details2">
                          <div className="insight-topic">WEALTH PLANNING</div>
                          <div className="reading-time">02 mins</div>
                        </div>
      
                        <div className="insight-summary">20 Key Wealth Trends in India</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="insight-item now">
                      <div className="insight-image-container">
                        {/* <img src="assets/images/img3.png" alt="bank-image"> */}

                        <Image src={img3} alt='TAX PLANNING'/>
                      </div>
                      <div className="insight-description insight-description2">
                        <div className="insight-details insight-details2">
                          <div className="insight-topic">WEALTH PLANNING</div>
                          <div className="reading-time">02 mins</div>
                        </div>
      
                        <div className="insight-summary">How the new tax system affects your wealth</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="insight-box desktop">
              <div className="insight-item now">
                <div className="insight-image-container">
                  {/* <img src="assets/images/img2.png" alt="bank-image"> */}

                  <Image src={img2} alt='WEALTH PLANNING'/>
                </div>
                <div className="insight-description insight-description2">
                  <div className="insight-details insight-details2">
                    <div className="insight-topic">WEALTH PLANNING</div>
                    <div className="reading-time">02 mins</div>
                  </div>
      
                  <div className="insight-summary">20 Key Wealth Trends in India</div>
                </div>
              </div>
              <div className="insight-item now">
                <div className="insight-image-container">
                  {/* <img src="assets/images/img3.png" alt="bank-image"> */}

                  <Image src={img3} alt='TAX PLANNING'/>
                </div>
                <div className="insight-description insight-description2">
                  <div className="insight-details insight-details2">
                    <div className="insight-topic">TAX PLANNING</div>
                    <div className="reading-time">02 mins</div>
                  </div>
                  <div className="insight-summary">How the new tax system affects your wealth</div>
                </div>
              </div>
            </div>
      
      
          </div>
        </section>
  )
}

export default Ourinsights
