import React from 'react';
import loveBirdImage from './love-bird.png';
import loveDualImage from './love-dual.png';
import pranayImage from './pranay.jpeg';
import Data from './data';

const FamilyComponent = () => {
 
  const dataHandler = new Data();

  const primeMembers = [
    { name: dataHandler.data.bride.fatherName, relation: "Father" },
    { name: dataHandler.data.bride.motherName, relation: "Mother" },
    { name: dataHandler.data.groom.fatherName, relation: "Father" },
    { name: dataHandler.data.groom.motherName, relation: "Mother" },
  ];

  const secondaryMembers = [
    { name: dataHandler.data.bride.squad[0].name, relation: dataHandler.data.bride.squad[0].relation },
    { name: dataHandler.data.bride.squad[1].name, relation: dataHandler.data.bride.squad[0].relation },
    { name: dataHandler.data.groom.squad[0].name, relation: dataHandler.data.bride.squad[0].relation },
    { name: dataHandler.data.groom.squad[1].name, relation: dataHandler.data.bride.squad[0].relation },
  ];

  const changeRelation = (index) => {
    // Your logic for changing the relation based on the index goes here
    // For example:
    console.log(`Clicked on family member ${index}`);
  };

  return (
    <div>
      <div className="page-family">
        <div className="div-title">
          <div className="title-top-icon">
            <img src={loveBirdImage} alt="" />
          </div>
          <div className="title-text-div">
            <p className="font-title cblack">Family</p>
          </div>
          <div className="title-bottom-icon">
            <img src={loveDualImage} alt="" />
          </div>
        </div>

        <br />
        <br />

        <div className="div-fam">
          <div className="sid-fam">
            {primeMembers.map((member,index) => (
              <div key={index} className="grp-rel">
                <div className="cir-div-card">
                  <div className="cir-card-top">
                    <img src={pranayImage} alt="" />
                  </div>
                  <div className="cir-card-bottom"></div>
                </div>
                <div className="fam-text">
                  <p className="text5 tecen cred">{member.name}</p>
                  <p className="text4 tecen">{member.relation}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="sid-fam">
            {secondaryMembers.map((member,index) => (
              <div key={index} className="grp-rel">
                <div className="cir-div-card">
                  <div className="cir-card-top">
                    <img src={pranayImage} alt="" />
                  </div>
                  <div className="cir-card-bottom"></div>
                </div>
                <div className="fam-text">
                <p className="text5 tecen cred">{member.name}</p>
                  <p className="text4 tecen">{member.relation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="page-gallery">
        <div className="div-title">
          <div className="title-top-icon">
            <img src={loveBirdImage} alt="" />
          </div>
          <div className="title-text-div">
            <p className="font-title cblack">Gallery</p>
          </div>
          <div className="title-bottom-icon">
            <img src={loveDualImage} alt="" />
          </div>
        </div>
        <div className="box-card">
          {/* Gallery cards */}
          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className="div-card">
              <div className="card-top">
                <img src={pranayImage} alt="" />
              </div>
              <div className="card-bottom"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyComponent;

