import React, { useEffect, useState } from 'react';
import './App.css';

// Define your image imports
import GroupedyouImage from './Groupedyou.png';
import Groupedyou3Image from './groupedyou3.png';
import Groupedyou2Image from './groupedyou2.png';
import callImage from './images/call_FILL0_wght400_GRAD0_opsz24.png';
import designServicesImage from './images/design_services_FILL0_wght400_GRAD0_opsz24.png';
import forumImage from './images/forum_FILL0_wght400_GRAD0_opsz24.png';
import homeImage from './images/home_FILL0_wght400_GRAD0_opsz24.png';
import linkImage from './images/link_FILL0_wght400_GRAD0_opsz24.png';
import mapImage from './images/map_FILL0_wght400_GRAD0_opsz24.png';
import onlinePredictionImage from './images/online_prediction_FILL0_wght400_GRAD0_opsz24.png';
import sheetalNiwasImage from './images/Sheetal-Niwas-1-scaled-2048x934.jpg';
import thermostatImage from './images/thermostat_FILL0_wght400_GRAD0_opsz24.png';

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsDesktop(
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    );
  }, []);

  return (
    <div>
      {isDesktop ? (
        <div className="parent">
          <div className="div1"><Logo /></div>
          <div className="div2"></div>
          <div className="div3"> </div>
          <div className="div4"><Searchbar /></div>
          <div className="div5"><Leftpanel /></div>
          <div className="div6"><Phone /></div>
          <div className="div7"><Rightpanel /></div>
          <div className="div8"><XButton /></div>
        </div>
      ) : (
        <div className="message">
          We are only available in Desktop.
        </div>
      )}
    </div>
  );
}

const PhoneNumber = () => {
  return <div>Important Phone Number Page</div>;
};

export default PhoneNumber;








function DisplayImage() {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',  // Single column
    gap: '0px' , // Gap between grid items
    width: '750px',
    height: 'auto'
  };

  const imageStyle = {

  };

  const grided = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginRight: '85px', // Negative margin to achieve a similar effect as a negative gap
  };

  return (
    <div class="mobile-message">
  We are only available on desktop.
</div>,
    <div className="dived" style={gridContainerStyle}>
      <img className='GroupedyouImage' src={GroupedyouImage} alt="Image 1" style={imageStyle} />
      <div className='downed' style={grided}>      
        <img src={Groupedyou3Image} alt="Image 2" style={imageStyle} />
        <img src={Groupedyou2Image} alt="Image 3" style={imageStyle} />
      </div>
    </div>
  );
}





function Buttonlog(){
  return(
    <div className='buttoncontainer'>
      <LogSignbut buttonText="Log In" onButtonClick={handleLogIn} /><LogSignbut buttonText="Sign Up" onButtonClick={handleSignUp} /><Tripledot />  
    </div>
  )
}



function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform the search using the searchTerm
    console.log('Search term:', searchTerm);
    // You can implement the actual search functionality here
  };

  return (
    <div style={{ width: 675, height: 32 }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        style={{
          width: '100%',
          height: '100%',
          padding: '0px 15px',
          borderRadius: 30,
          border: '0.50px black solid',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          fontSize: 14,
        }}
      />          
      {/* <div
        style={{
          width: 19,
          height: 19,
          left: 643,
          top: 6,
          position: 'absolute',
          background: '#0D0D0D',
        }}
        onClick={handleSearch}
      ></div> */}
    </div>
  );
}

function LogSignbut({ buttonText, onButtonClick }) {
  return (
    <div>
      <button className='logsign' onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
}

function handleLogIn() {
  console.log('User clicked "Log In" button.');
  // Implement the logic for handling the "Log In" action
}

function handleSignUp() {
  console.log('User clicked "Sign Up" button.');
  // Implement the logic for handling the "Sign Up" action
}

function Tripledot() {
  return (
    <div style={{ width: 24, height: 6, position: 'relative' }}>
      {<div style={{width: 24, height: 6, position: 'relative'}}>
  <div style={{width: 6, height: 6, left: 9, top: 0, position: 'absolute', background: 'black', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
  <div style={{width: 6, height: 6, left: 0, top: 0, position: 'absolute', background: 'black', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
  <div style={{width: 6, height: 6, left: 18, top: 0, position: 'absolute', background: 'black', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
</div>}
    </div>
  );
}

function Logo() {
  return (
    <div  style={{width: 142, height: 44, padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
     {<div className='logos'  style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word',padding:"20px"}}><a href='./App.js'>GONEPAL</a></div>}
    </div>
  );
} 

// function Rightpanel() {
//   return (
//     <div className='panel'>
//       <p className='ask'>ASK IN COMMUNITIES</p>
//       {name.map((forumName, index) => (
//         <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
//           <Dotprof />
//           {forumName === 'Passport Discussion Forum ' ? (
//             <a href="https://realtimechat-d1fb1db37342.herokuapp.com/" target="_blank" className="disable-link-style">
//               <div className='forums'><Forum name={forumName} memberCount={member[index]} /></div>
//             </a>
//           ) : (
//             <Forum name={forumName} memberCount={member[index]} />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

function Rightpanel() {
  const link = "https://realtimechat-d1fb1db37342.herokuapp.com/";

  return (
    <div className='panel'>
      <p className='ask'>ASK IN COMMUNITIES</p>
      {name.map((forumName, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <a href={link} target="_blank" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Dotprof />
            <div className='forums' style={{ marginLeft: '10px' }}>
              <Forum name={forumName} memberCount={member[index]} />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}





function Dotprof() {
  return <div style={{ width: 25, height: 25, background: '#0D0D0D', borderRadius: '9999px', marginRight: '10px' }} />;
}


function Forum({ name, memberCount }) {
  return (
    <div className='pass'>
      <div className='forums'>{name}</div>
      <div className="count">{memberCount} members Online</div>
    </div>
  );
}


function Leftpanel() {
  return (
    <div className='leftpanel'>
      {menu.map((forumName, index) => (
        <div key={index}>
          {forumName === 'Important Phone Number' ? (
            <a href={linked[3]} target="_blank" rel="noopener noreferrer">
              <Left name={forumName} icon={<img src={locArray[index]} alt={locArray[3]} />} />
            </a>
          ) : (
            <a href={linked[index]} rel="noopener noreferrer">
              <Left name={forumName} icon={<img src={locArray[index]} alt={forumName} />} />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}



function Left({ name, icon }) {
  return (
    <div className='pass'>
      <img src={icon} alt={name} className='icon' />
      <div className='forums'>{name}</div>
    </div>
  );
}

const menu = [
  "Home",
  "Services",
  "Maps",
  "Important Phone Number",
  "Weather Update",
  "Important Notices",
  "Links",
  "Horoscope"
];

const linked = [
'./App.js',
'./freelancing.js',
'https://nabin2004.github.io/gomaps/',
'./phonenumber.js',
'./weather.js',
'./results.js',
'./links.js',
'./horoscope.js'
]

const locArray = [
  homeImage,
  designServicesImage,
  mapImage,
  callImage,
  thermostatImage,
  forumImage,
  linkImage,
  onlinePredictionImage
];



const name = [
  'Passport Discussion Forum ',
  'Citizenship Discussion Forums',
  'License Discussion Forums',
  'Foreign Labour Discussion Forums',
  'US Visa discussion Forums',
  'Service discussion Forum',
  'Political discussion Forum',
  'News discussion Forum',
];




const member = ['23','21','40','21','39','49','59','601'];

function XButton() {
  const handleX = () => {
    console.log('X button clicked!');

    // Select the element with the class 'div6'
    const div6Element = document.querySelector('.div6');

    // Check if the element was found
// Check if the element was found
if (div6Element) {
  // Update the content of the 'div6' element with an iframe
  div6Element.innerHTML = `
  <iframe class="shree"
    frameborder="0"
    width="900"
    height="400"
    scrolling="no"
    src="https://nabin2004-shree5gpt.hf.space"
  ></iframe>
`;



  // Hide .div2 and .div3
  // document.querySelector('.div4').style.display = 'none';
}

  };

  return (
    <button
      className="X"
      style={{
        width: 154,
        height: 38,
        background: '#D9D9D9',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 30,
        border: '0.50px black solid'
      }}
      onClick={handleX}
    >
      GPT
    </button>
  );
}



export default App;
