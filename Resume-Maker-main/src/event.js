import React from 'react';
import loveBirdImage from './love-bird.png';
import loveDualImage from './love-dual.png';
import Data from './data';

const Event = () => {
  const dataHandler = new Data();
  const enteredDate = dataHandler.data.reception.dateUTC;
  const addressrecp = dataHandler.receptionAddress();
  const recpdate = dataHandler.formatDate(enteredDate);
  const recpinfo = dataHandler.data.reception.info;

  return (
      <div className="page-event Event">
        <div className="div-title">
          <div className="title-top-icon">
            <img src={loveBirdImage} alt="" />
          </div>
          <div className="title-text-div">
            <p className="font-title cblack">Wedding Events</p>
          </div>
          <div className="title-bottom-icon">
            <img src={loveDualImage} alt="" />
          </div>
        </div>
        <div className="event-main">
        <div class="event-sub">
            </div>
          <div className="event-det">
            <p className="text6 cred">The reception</p>
            <p className="text4"><i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp; {addressrecp}</p>
            <p className="text4"><i className="fa-solid fa-clock"></i> &nbsp;&nbsp; {recpdate}</p>
            <p className="event-cont">{recpinfo}</p>
          </div>
        </div>
      </div>
    
  );
};

export default Event;

