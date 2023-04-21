import React from 'react'
import contactUs from "./images/Contact-Us.jpg";
import './Contact.css'
import Footer from "./Footer";
import Header from './Header';

const Contact = () => {
  return (
    <>
      <div className="header">
        <Header />
        <div className="wrapper">
          <img src={contactUs} alt="" />
        </div>
        <div className='text'>
        <h1 style={{padding:'20px', fontSize:'35px'}}>
          We are ready to answer all your questions and help you find the best
          cause to help
        </h1>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact