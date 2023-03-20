import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { submitAPI } from './utils/api';
import './styles/App.css';

function App() {
  const navigate = useNavigate();

  const submitForm = async (values) => {
    const res = await submitAPI(values);
    if (res) {
      navigate('/confirmed-booking');
    }
  };

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/reservations' element={<BookingPage submitHandler={submitForm} />} />
        <Route path='/confirmed-booking' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
