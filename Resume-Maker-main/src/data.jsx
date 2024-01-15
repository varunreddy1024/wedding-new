import React from 'react';

class Data extends React.Component {
  constructor() {
    super();
    this.data = {
      title: 'Sample Data',
      wedding:{
        dateUTC: "2024-01-26T23:00:00Z",
        address: {
            convention: 'L.B convention',
            landMark: 'Near Arena Towers',
            city: 'Uppal',
            link: ""
        }
      },
      reception: {
        dateUTC: '2024-01-16T20:30:00Z',
        address: {
            convention: 'L.B convention',
            landMark: 'Near Arena Towers',
            city: 'Uppal',
            link: ""
        },
        info: 'information',
      },
      youtubeLive: {
        link: 'https://www.youtube.com/embed/zQxN_pwYhNY?autoplay=1&amp;rel=0',
        HeightToWidth: '0.8',
        startDateUTC: '2024-01-15T08:30:00Z'
      },
      bride: {
        surName: "Sreeram",
        middleName: "Priyanka",
        lastName: "Mohan",
        bio:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Deserunt rerum consectetur dolore!Vero, quaerat.Magni ?",
        fatherName: "Sreeram Nirvan",
        motherName: "Anushka Shetty",
        squad:[
            {
                name: "Ajmeera Pavan",
                relation: "Brother"
            },
            {
                name: "Abhishek Banala",
                relation: "Sister"
            }
        ]
      },
      groom: {
        surName: "Ravula",
        middleName: "Aniketh",
        lastName: "Reddy",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Deserunt rerum consectetur dolore!Vero, quaerat.Magni ?",
        fatherName: "Ravula Varun Reddy",
        motherName: "Anupama Parameshwaran",
        squad:[
            {
                name: "Koppula Rohit Kumar",
                relation: "Brother"
            },
            {
                name: "Pranay Kumar",
                relation: "Mogudu"
            }
        ]
      },
      msgMail: "rpranayreddy40@gmail.com",
    };
  }

  formatDate = (date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      day: "numeric",
      month: "numeric",
      year: "2-digit",
    };
  
    try {
      const formattedDate = new Date(date).toLocaleDateString("en-GB", options);
      return formattedDate;
    } catch (error) {
      console.error("Invalid date format:", error);
      return "Invalid date format";
    }
  };


  

  weddingAddress = () => {
    const weddingInfo = this.data.wedding.address;

    const { convention, landMark, city, link } = weddingInfo;

    // Check if the link is available
    const linkText = link ? `, ${link}` : '';

    const completeAddress = `${convention}, ${landMark}, ${city}${linkText}`;

    return completeAddress;
};

receptionAddress = () => {
  const weddingInfo = this.data.reception.address;

  const { convention, landMark, city, link } = weddingInfo;

  // Check if the link is available
  const linkText = link ? `, ${link}` : '';

  const completeAddress = `${convention}, ${landMark}, ${city}${linkText}`;

  return completeAddress;
};



  render() {
    return null; // Since this is not a UI component, we can return null
  }
}

export default Data;
