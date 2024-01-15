import React from 'react';
import Page1 from './page1'; // Import the Page1 component
import './App.css'; // Assuming you have a CSS file for styling
import AboutComponent from './about'; 
import Countdown from './Countdown'; 
import Event from './event';
import Gallery from './gallery';
import Message from './message';
import FooterComponent from './footer';
import YoutubeComponent from './youtube';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page1/>
        <YoutubeComponent/>
        <AboutComponent/>
        <Countdown/>
        <Event/>
        <Gallery/>
        <Message/>
        <FooterComponent/>
      </header>
    </div>
  );
}

export default App;


