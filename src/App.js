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
  const [flightList, setFlightList] = useState('');


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
        <img className='' src='https://www.gstatic.com/travel-frontend/animation/hero/flights_3.svg'>
        </img>
        <h1>
          Fly Broke :/
        </h1>

        <div className='input-bubble'>
          <div className='input-bubble-row'>
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

        </div>

        <div className='flight-list'>
          {/* {flightList.map(()=>null)} */}
        </div>

        <button className='search-button'onClick={handleSearch}>Go!</button>
        

      </main>

    </div>
  );
}

export default App;
