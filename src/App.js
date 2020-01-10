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
      </header>
    </div >
  );
}

export default App;
