import React from 'react';
import BookingForm from './BookingForm';
import '../styles/Booking.css';

const BookingPage = ({ submitHandler }) => {
  return <BookingForm submitHandler={submitHandler} />;
};

export default BookingPage;
