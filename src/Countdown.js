import React, { useEffect, useState } from 'react';
import ganesh from './gan.png';
import Data from './data';





const Countdown = () => {
  const [countdown, setCountdown] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }); 

  const dataHandler = new Data();
  const currentDate = new Date();
  const enteredDate = dataHandler.data.reception.dateUTC;
  const datedisplay = enteredDate - currentDate;
  const bride = dataHandler.data.bride.middleName;
  const groom = dataHandler.data.groom.middleName;
  const addressconv = dataHandler.weddingAddress();
 
  
  const [doneBool, setDoneBool] = useState(true);
  
  useEffect(() => {
    const datedisplay = enteredDate - currentDate;

    // Update doneBool based on datedisplay
    if (datedisplay > 0) {
      setDoneBool(false); // Set to false if enteredDate is in the future
    } else {
      setDoneBool(true); // Set to true if enteredDate is in the past or equal to current date
    }
  }, [enteredDate]); 


  const whoinvite = 0;
  const calculateCountdown = () => {
    const weddingDate = new Date(enteredDate).getTime(); // Convert enteredDate to milliseconds
    const now = new Date().getTime();
    const timeDifference = weddingDate - now;
  
    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneYear = oneDay * 365;
  
    if (timeDifference > 0) {
      const years = Math.floor(timeDifference / oneYear);
      const days = Math.floor((timeDifference % oneYear) / oneDay);
      const hours = Math.floor((timeDifference % oneDay) / oneHour);
      const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
      const seconds = Math.floor((timeDifference % oneMinute) / oneSecond);
      setCountdown({ years, days, hours, minutes, seconds });
    } else {
      const positivetimeDifference = Math.abs(timeDifference);
      const years = Math.floor(positivetimeDifference / oneYear);
      const days = Math.floor((positivetimeDifference % oneYear) / oneDay);
      const hours = Math.floor((positivetimeDifference % oneDay) / oneHour);
      const minutes = Math.floor((positivetimeDifference % oneHour) / oneMinute);
      const seconds = Math.floor((positivetimeDifference % oneMinute) / oneSecond);
      setCountdown({ years, days, hours, minutes, seconds });
    }
  };
  

  useEffect(() => {
    const timer = setInterval(calculateCountdown, 1000);
    calculateCountdown(); // Calculate the countdown immediately on component mount
    return () => clearInterval(timer); // Clean up the interval on unmount
  }, []);

  return (
    <div className="page-countdown">
      <div className="bg-fil-bla">
        <p className="fam-nam">
        {doneBool ?(
            <span className="disAMar">We are a Family now!</span>
        ):( 
            (whoinvite === 1)? (
            <span className="disSMBM">Bride Family's wedding Invitation</span>
        ): (
            <span className="disSFBM">Groom Family's wedding Invitation</span>
        )
        )}
        </p>
        <div className="con-pat">
          <div className="left cwhite tecen">
             {!doneBool && (<p className="text5 disBMar">We invite you to the wedding of</p>)}
            
            <p className="BG-nam">{bride} <img src={ganesh}  alt=""/>{groom}</p>
            <br />
            <p className="text5"> 
            {doneBool? ( <span className="disAMar">got married on</span>):(<span className="disBMar">on</span>)}
              
            </p>
            <p className="text6">{enteredDate}</p>

            {/* <p className="text5">
              <span className="disBMar"><br /><br /><br /></span>
              <span className="disAMar">at<br /></span>
            </p> */}
            <p className="text4"><i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp; {addressconv}</p>
            <br />
            {!doneBool && (<div className="flex-row disBMar">
              <a href="wa.me/917680904589">
                <div className="but-map">
                  <div className="but-map-lay flex-row">
                    <div className="flex-row">
                      <div><img src="map.png" alt="" /></div>
                      <div>
                        <p className="tex">Google Maps</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>)} 

            
          </div>
          <div className="right">
            <p className="text5 cwhite tecen">
            {!doneBool ? (<span className="disBMar">We are left with</span>):(<span className="disAMar">They are happy since </span>)}
            </p>
            <div id="div-con-tim">
            {countdown.years != 0 ? (<div className="div-com">
                 
                 <div className="tim-val">
                   <p id="tim-year">{countdown.years}</p>
                 </div>
                 <div className="tim-val-nam">
                   <p id="tim-year-cat">{countdown.years === 1 ? 'Year' : 'Years'}</p>
                 </div>
               </div>) : (null)
             }

{countdown.days != 0 ? (
  <div className="div-com">
                  <div className="tim-val">
                    <p id="tim-day">{countdown.days}</p>
                  </div>
                  <div className="tim-val-nam">
                    <p id="tim-day-cat">{countdown.days === 1 ? 'Day' : 'Days'}</p>
                  </div>
                </div>) : (null)
             }

{countdown.hours != 0 ? (  <div className="div-com">
                  <div className="tim-val">
                    <p id="tim-hour">{countdown.hours}</p>
                  </div>
                  <div className="tim-val-nam">
                    <p id="tim-hour-cat">{countdown.hours === 1 ? 'Hour' : 'Hours'}</p>
                  </div>
                </div>
  ) : (null)
             }

{countdown.minutes != 0 ? (  

<div className="div-com">
<div className="tim-val">
  <p id="tim-min">{countdown.minutes}</p>
</div>
<div className="tim-val-nam">
  <p id="tim-min-cat">{countdown.minutes === 1 ? 'Minute' : 'Minutes'}</p>
</div>
</div>
  ) : (null)
             }
              
                
              

                {countdown.seconds != 0 ? (  
             <div className="div-com">
             <div className="tim-val">
               <p id="tim-sec">{countdown.seconds}</p>
             </div>
             <div className="tim-val-nam">
               <p id="tim-sec-cat">{countdown.seconds === 1 ? 'Second' : 'Seconds'}</p>
             </div>
           </div>
  ) : (null)
             }
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

