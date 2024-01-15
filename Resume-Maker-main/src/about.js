import React from 'react';
import brideImage from './pranay.jpeg';
import groomImage from './pranay.jpeg';
import heartImage from './love-fill.png';
import Data from './data';

const dataHandler = new Data();
  const currentDate = new Date();
  const enteredDate = dataHandler.data.reception.dateUTC;
  const datedisplay = enteredDate - currentDate;
  const bride = dataHandler.data.bride.middleName;
  const groom = dataHandler.data.groom.middleName;
  const bridebio = dataHandler.data.bride.bio;
  const groombio = dataHandler.data.groom.bio;

function AboutComponent() {
  return (
    <div className="page-about">
      <div className="div-photo">
        <div className="photo-main">
          <div className="photo-sub">
            <img src={brideImage} alt="Bride" />
          </div>
          <div className="photo-sub">
            <img src={groomImage} alt="Groom" />
          </div>
        </div>
        <div className="hov-pho">
          <div className="photo-sub">
            <img src={heartImage} alt="Heart" />
          </div>
        </div>
      </div>
      <div className="about-main">
        <div className="about-sub text-right">
          <p className="text7 cred folav">{bride}</p>
          <p className="text5">
           {bridebio}
          </p>
        </div>
        <div className="about-sub">
          <p className="text7 cred folav">{groom}</p>
          <p className="text5">
           {groombio} 
           </p>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
