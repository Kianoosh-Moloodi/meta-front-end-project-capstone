import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Tall-Logo.jpeg';

export default function Footer() {
  return (
    <footer>
      <section>
        <img src={logo} alt='Little Lemon Logo' />
        <nav className='footer-nav'>
          <h3>Doormat Navigation</h3>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/reservations'>Reservations</Link>
            </li>
            <li>
              <Link to='/order-online'>Order Online</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </nav>
        <section className='footer-contact'>
          <h3>Contact</h3>
          <ul>
            <li>1110 E Parker Rd, Plano, TX 7504</li>
            <li>(123) 456-7890</li>
            <li>customer-support@littlelemon.com</li>
          </ul>
        </section>
        <section className='footer-social'>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href='https://www.facebook.com'>Facebook</a>
            </li>
            <li>
              <a href='https://www.twitter.com'>Twitter</a>
            </li>
            <li>
              <a href='https://www.instagram.com'>Instagram</a>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
}
