import React, { useEffect, useRef, useState } from 'react';
import loveFillImage from './love-fill.png';
import loveDualImage from './love-dual.png';
import Data from './data';
import './App.css';

function Page1() {
  const trackRefs = [useRef(null), useRef(null), useRef(null)];
  const targetRefs = [useRef(null), useRef(null), useRef(null)];
  const [opacities, setOpacities] = useState([0, 0, 0]);
  const [translations, setTranslations] = useState([0, 0, 0]);

  const [videoMuted, setVideoMuted] = useState(false);
  const [videoClosed, setVideoClosed] = useState(false);

  const dataHandler = new Data();
  const currentDate = new Date();
  const enteredDate = dataHandler.data.reception.dateUTC;
  const youtubelink = dataHandler.data.youtubeLive.link;

  const formattedDate = dataHandler.formatDate(enteredDate);
  const datedisplay = enteredDate - currentDate;
  const bride = dataHandler.data.bride.middleName;
  const groom = dataHandler.data.groom.middleName;

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const centerPosition = windowHeight / 2;

      const newOpacities = trackRefs.map((trackRef, index) => {
        const trackPosition = trackRef.current.getBoundingClientRect().top;
        const distanceToCenter = trackPosition - centerPosition;
        const maxDistance = windowHeight / 2;

        if (distanceToCenter > maxDistance) {
          return 0;
        }

        const newOpacity = 1 - distanceToCenter / maxDistance;
        return Math.min(1, Math.max(0, newOpacity));
      });

      setOpacities(newOpacities);

      const newTranslations = trackRefs.map((trackRef, index) => {
        const trackPosition = trackRef.current.getBoundingClientRect().top;
        const distanceToCenter = trackPosition - centerPosition;
        if (distanceToCenter < 0) {
          return 0;
        }

        return (distanceToCenter / windowHeight) * 100; // Adjust the translation factor as needed
      });

      setTranslations(newTranslations);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const divStyles = {
    transition: 'opacity 0.5s, transform 0.5s',
  };

  const textContainerStyle = {
    color: 'black',
    textAlign: 'left',
    fontSize: '1.5rem',
  };

  const containerStyle = {
    position: 'relative',
  };

  const videoContainerStyle = {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '1000',
    width: '90vw',
    height: '90vh',
  };
  

  const closeVideo = () => {
    setVideoClosed(true);
  };

  const openVideo = () => {
    setVideoClosed(false);
  };

  const toggleMute = () => {
    setVideoMuted((prevMuted) => !prevMuted);
  };

  return (
    <div className='page-1' style={containerStyle}>
      <div style={{ height: '100vh', opacity: '0' }}>Scroll down</div>
      <div ref={trackRefs[0]} style={{ height: '1vh', opacity: '0' }}>
        Track-1
      </div>
      <div className='main-page1'>
        <div
          ref={targetRefs[0]}
          style={{
            ...divStyles,
            ...textContainerStyle,
            opacity: opacities[0],
            transform: `translateY(${translations[0]}px)`,
          }}
        >
          <div className='hom-tit'>
            <div className='div-tit-bro'>
              <p className='bro-tit'>{bride}</p>
            </div>
            <div className='div-tit-symbol'>
              <img src={loveFillImage} alt='' className='love' />
            </div>
            <div className='div-tit-gro'>
              <p className='gro-tit'>{groom}</p>
            </div>
          </div>
        </div>
        <div
          ref={targetRefs[1]}
          style={{
            ...divStyles,
            ...textContainerStyle,
            opacity: opacities[1],
            transform: `translateY(${translations[1]}px)`,
          }}
        >
          <p className='hom-get-text tecen'>
            {datedisplay > 0 ? (
              <span className='disBMar'>are getting married</span>
            ) : (
              <span className='disAMar'>Have got married</span>
            )}
          </p>
        </div>
        <div
          ref={targetRefs[2]}
          style={{
            ...divStyles,
            ...textContainerStyle,
            opacity: opacities[2],
            transform: `translateY(${translations[2]}px)`,
          }}
        >
          <div className='hom-div-title'>
            <div className='hom-title-text-div'>
              <p className='hom-font-title tecen'>{formattedDate}</p>
            </div>
            <div className='hom-title-bottom-icon'>
              <img src={loveDualImage} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '100vh', opacity: '0' }}>Scroll down</div>
      <div ref={trackRefs[1]} style={{ height: '1vh', opacity: '0' }}>
        Track-2
      </div>
      <div style={{ height: '100vh', opacity: '0' }}>Scroll down</div>
      <div ref={trackRefs[2]} style={{ height: '1vh', opacity: '0' }}>
        Track-3
      </div>
      <div style={{ height: '50vh', opacity: '0' }}>Scroll down</div>

      {!videoClosed && (
        <div style={videoContainerStyle}>
           <iframe
          title='youtube vedio'
          style={{ width: '100%', height: '100%' }}
          src={youtubelink}
          allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
        ></iframe>
          <div>
            <button onClick={toggleMute}>{videoMuted ? 'Unmute' : 'Mute'}</button>
            <button onClick={closeVideo}>Close</button>
          </div>
        </div>
      )}

      {videoClosed && (
        <div style={videoContainerStyle}>
          <button onClick={openVideo}>Open</button>
        </div>
      )}
    </div>
  );
}

export default Page1;


