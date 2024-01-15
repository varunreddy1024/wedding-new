import React from 'react';
import loveBirdImage from './love-bird.png';
import loveDualImage from './love-dual.png';
import Data from './data';

const dataHandler = new Data();
  const youtubelink = dataHandler.data.youtubeLive.link;

const YoutubeComponent = () => {
  return (
    <div className="page-youtube disMvi disnon">
      <div className="div-title">
        <div className="title-top-icon">
        <img src={loveBirdImage} alt="" />
        </div>
        <div className="title-text-div">
          <p className="font-title cblack">Wedding Stream</p>
        </div>
        <div className="title-bottom-icon">
          <img src={loveDualImage} alt="" />
        </div>
      </div>
      <div className="flex-row">
        <iframe
        title='youtube vedio'
          style={{ width: '80vw', height: '50vh' }}
          src={youtubelink}
          allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeComponent;
