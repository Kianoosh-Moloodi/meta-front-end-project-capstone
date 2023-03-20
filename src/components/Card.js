import React from 'react';

const Card = ({ imgSrc, imgAlt, title, price, description }) => {
  return (
    <section className='card'>
      <img src={imgSrc} alt={imgAlt} />
      <section className='card-body'>
        <section className='card-text'>
          <div>
            <h6>{title}</h6>
            <p id='card-price'>{price}</p>
          </div>
          <p>{description}</p>
        </section>
        <a className='delivery-button' href='/order'>
          Order a delivery ⛟
        </a>
      </section>
    </section>
  );
};

export default Card;
