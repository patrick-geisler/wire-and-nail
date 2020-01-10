import React from 'react';
import wire from './wire.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.facebook.com/wireandnail/?eid=ARBR3w6zjgWYFQoMTXYHG7DEQOBSF77CEVsP0uXJO8rQ1AhfO8GlsCZcJWeEPDDkASavboHSerywLgCE"
        >
          <h1>Wire & Nail</h1>
        </a>
        <a
          href="https://www.facebook.com/wireandnail/?eid=ARBR3w6zjgWYFQoMTXYHG7DEQOBSF77CEVsP0uXJO8rQ1AhfO8GlsCZcJWeEPDDkASavboHSerywLgCE"
        >
          <img src={wire} className="App-logo" alt="logo" />
        </a>
        <div className="Description">
          <p>
            Wire & Nail formed in early 2017, when members of multiple Milwaukee bands
            bonded over their love of Outlaw Country and Classic American Rock N Roll.
            Like many of their influences, Wire and Nail strive to write and perform music that is genuine, enjoyable and unapologetic.
            They released their self titled EP in the Summer of 2017, which can be found everywhere music is sold or streamed.
          </p>
          <p>Wire & Nail is a Rock N Roll band from Milwaukee, Wisconsin.</p>
          <p>Wire & Nail is Phil Bregant, JT Gylland, Ryan Moran, and Cass Borgardt. </p>
        </div>
      </header>
    </div >
  );
}

export default App;
