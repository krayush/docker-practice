import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentVisits, setVisits] = useState(0);
  useEffect(() => {
    fetch('/count').then(r => r.text()).then(r => {
      setVisits(r);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>No. of users visiting the application: </p>
        <p>{currentVisits}</p>
        <p>{currentVisits}</p>
        <p>{currentVisits}</p>
      </header>
    </div>
  );
}

export default App;
