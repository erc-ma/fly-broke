import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  // State: when 

  // State var
  const [originLoc, setOriginLoc] = useState('');
  const [destLoc, setDestLoc] = useState('');
  const [startDate, setStartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');


  // Function to handle changes in the input field
  const handleOriginLocChange = (event) => {
    setOriginLoc(event.target.value);
  };
  // Function to handle changes in the input field
  const handleDestLocChange = (event) => {
    setDestLoc(event.target.value);
  };
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };
  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };



  const handleSearch = () => {
    // Call your search function with the search term
    // Replace this with your actual search logic
    console.log('Origin:', originLoc);
    console.log('Destination:', destLoc);
    console.log('Start Date:', startDate);
    console.log('Return Date:', returnDate);

  };




  return (
    <div className="App">


      <main className='App-main'>
        <h1>
          Fly Broke :/
        </h1>

        <div className='input-bubble'>
          <input
            type="text"
            placeholder="Origin..."
            value={originLoc}
            onChange={handleOriginLocChange}
          />

          <input
            type="text"
            placeholder="Destination..."
            value={destLoc}
            onChange={handleDestLocChange}
          />

          <label for="start">Start date:</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            value={startDate}
            onChange={handleStartDateChange}
          />
          <input
            type="date"
            id="end"
            name="trip-end"
            value={returnDate}
            onChange={handleReturnDateChange}
          />
        </div>

        <button onClick={handleSearch}>Search</button>

      </main>

      <body>
        <div className='listnode-container'>

        </div>
      </body>
    </div>
  );
}

export default App;
