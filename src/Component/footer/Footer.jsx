import React from 'react'
import './Footer.css'
import banner from '../../assets/mens-collection/news-letters-banner.jpg'
import badge from '../../assets/mens-collection/badge.png'
import stars from '../../assets/mens-collection/icon.svg'
import qr from '../../assets/mens-collection/androidqr.webp'
import app from '../../assets/mens-collection/androidapp.png'
import fb from '../../assets/mens-collection/fb.png'
import insta from '../../assets/mens-collection/insta.png'
import youtube from '../../assets/mens-collection/youtube.png'
import twitter from '../../assets/mens-collection/twitter.png'
import pinterest from '../../assets/mens-collection/pinterest.png'
import tiktok from '../../assets/mens-collection/tiktok.png'
import visa from '../../assets/mens-collection/visa.png'
export const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer">
        <div className="footer-head">
          <div className="footer-logo">
            <img src={banner} alt="" />
            </div>
            <div className="footer-text">
            <p>Sign up to get the latest on sales, new releases and more...</p>
            <input type="text" placeholder='Enter your email address' />
            <button>Sign up</button>
          </div>
        </div>

        <div className="footer-details">
          <div className="footer-data">
            <div className="contact">
              <span>Contact us</span>
              <ul>
                <li>Contact us</li>
                <li>we are hiring</li>
                <li>Selling at elo</li>
                <li>Polo Republica Works</li>
                <li>Merchandising</li>
                
              </ul>
            </div>

            <div className="help ">
              <span>Help</span>
              <ul>
                <li>How To Order</li>
                <li>How To Use Gift Card</li>
                <li>Returns & Exchanges</li>
                <li>Shipping Details</li>
                <li>Privacy Policy</li>
                <li>FAQs</li>
                
              </ul>
            </div>

            <div className="new ">
              <span>What's New</span>
              <ul>
                <li>Become a Brand Ambassador</li>
                <li>How To Use Gift Card</li>
                <li>Customer Reviews</li>
                <li>Why we do what we do</li>
                <li>Customer Reviews</li>
                <li>Company News</li>
                <li>Who Made Your Clothes?</li>
                <li>Shop Instagram</li>    
              </ul>
            </div>

            <div className="mail ">
              <span>Mailing Address</span>
              <ul>
                <li>elo</li>
                <li>11 KM Satiana Road</li>
                <li>Faislabad</li>
                <li>Pakistan</li>
                <li>042-3256-0356</li>
                <li>(09:00 AM to 6:00 PM)</li>
                <li>(Monday - Saturday)</li>
                <li><button type='button' className='btn'>Whatsapp</button></li>    
              </ul>
            </div>

            <div className="footer-social">
              <div className="social-img">
                <img src={badge} alt="" />
                <span>Powered by YoTpo</span>
              </div>
              <div className="social-text">
                <span>278k</span>
                <img src={stars} alt="" />
                <p>certified views</p>
              </div>

              <div className="scan">
                <h4>Download our App</h4>
                <div className="images">
                <img src={qr} alt="" />
                <img src={qr} alt="" />
                </div>
              </div>
              <div className="icon-img">
                <img src={app} alt="" />
                <img src={app} alt="" />
              </div>

            </div>

           
          </div>
          <div className="media-icons">
              <img src={fb} alt="" />
              <img src={insta} alt="" />
              <img src={youtube} alt="" />
              <img src={tiktok} alt="" />
              <img src={twitter} alt="" />
              <img src={pinterest} alt="" />
            </div>
            <hr/>

            <div className="policy">
              <div className="privacy">
              <span>2024,elo .</span>
              <span>privacy policy .</span>
              <span>refund policy .</span>
              <span>Terms of service .</span>
              <span>Shipping Policy</span>
              </div>
              <div className="visa-img">
                <img src={visa} alt="" />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
