import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
       <div class="parent">
<div class="div1"><Logo /> </div>
<div class="div2"><Buttonlog /></div>
<div class="div3"> </div>
<div class="div4"> <Searchbar /></div>
<div class="div5"><Leftpanel /> </div>
<div class="div6"> </div>
<div class="div7"> <Rightpanel /></div>
<div class="div8"> <XButton /></div>
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

// function App() {
//   return (
//     <div>

//       <Searchbar />
//       <LogSignbut buttonText="Log In" onButtonClick={handleLogIn} />
//       <LogSignbut buttonText="Sign Up" onButtonClick={handleSignUp} />
//       <Tripledot />
//       <Logo />
//       <Rightpanel />
//       <XButton />
//     </div>
//   );
// }

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform the search using the searchTerm
    console.log('Search term:', searchTerm);
    // You can implement the actual search functionality here
  };

  return (
    <div style={{ width: 675, height: 32, position: 'relative' }}>
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
      <div
        style={{
          width: 19,
          height: 19,
          left: 643,
          top: 6,
          position: 'absolute',
          background: '#0D0D0D',
        }}
        onClick={handleSearch}
      ></div>
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
    <div style={{ width: 142, height: 44, padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
     {<div style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word',padding:"20px"}}>gonepal.com</div>}
    </div>
  );
} 

function Rightpanel() {
  return (
    <div className='panel'>
      <p className='ask'>ASK IN COMMUNITIES</p>
      {name.map((forumName, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <Dotprof />
          <Forum name={forumName} memberCount={member[index]} />
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
        <Left key={index} name={forumName}/>
      ))}
    </div>
  );
}

function Left({ name, memberCount }) {
  return (
    <div className='pass'>
      <div className='forums'>{name}</div>
    </div>
  );
}

const menu = [
  "Home",
  "fORUMS",
  "Services",
  "Maps",
  "Important Phone Number",
  "Whether Update",
  "Important Notices",
  "Links",
  "Horoscope",
]

const name = [
  'Passport Discussion Forum',
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
  // This function will be called when the X button is clicked
  const handleX = () => {
    console.log('X button clicked!');
    // You can add any custom logic here
  };

  return (
    <div>
      <button className="X" style={{
        width: 154,
        height: 48,
        background: '#D9D9D9',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 30,
        border: '0.50px black solid'
      }}
        onClick={handleX}>
          X
        </button>
    </div>
  );
}



export default App;
