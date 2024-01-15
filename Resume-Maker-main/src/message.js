import React from 'react';
import loveBirdImage from './love-bird.png';
import loveDualImage from './love-dual.png';
import Data from './data';

const MessageComponent = () => {
  const dataHandler = new Data();
  const addressconv = dataHandler.weddingAddress();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic for handling form submission goes here
    // For example, you can access form data using e.target.elements
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const message = formData.get('message');
    // Do something with the form data, e.g., send it to a server
    console.log('Name:', name);
    console.log('Message:', message);
  };

  return (
    <div className="page-message">
      <div className="div-title">
        <div className="title-top-icon">
          <img src={loveBirdImage} alt="" />
        </div>
        <div className="title-text-div">
          <p className="font-title cblack">Message</p>
        </div>
        <div className="title-bottom-icon">
          <img src={loveDualImage} alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="cont-main">
        <div className="cont-det">
          <p className="text5 cred">
            <i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp; {addressconv}
          </p>
        </div>
        <div className="cont-form">
          <form
            id="Message_form"
            name="contactform"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <input
              className="form"
              type="text"
              id="fname"
              name="name"
              placeholder="Your name"
              required
            />
            <textarea
              className="form"
              id="fmessage"
              name="message"
              placeholder="Message you wish to convey to the couple"
              style={{ height: '150px' }}
            ></textarea>
            <input type="hidden" name="_next" value="" />
            <input type="hidden" name="_subject" value="New submission" />
            <input type="hidden" name="_cc" value="bkkvarun24@gmail.com" />
            <input type="hidden" name="_template" value="table" />
            <div
              className="button"
              onClick={() => document.getElementById('Message_form').submit()}
            >
              <div className="layer"></div>
              <div className="tex flex-col">
                <h4>Submit</h4>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;

