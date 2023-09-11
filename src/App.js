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
  const [flightList, setFlightList] = useState([]);
  const [searched, setSearched] = useState(Boolean);


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
    setSearched(true);
    // Call your search function with the search term
    // Replace this with your actual search logic
    console.log('Origin:', originLoc);
    console.log('Destination:', destLoc);
    console.log('Start Date:', startDate);
    console.log('Return Date:', returnDate);
    setFlightList(
      [
        ...flightList,
        {
          oLoc: originLoc,
          dLoc: destLoc,
          sDate: startDate,
          rDate: returnDate,
          price: 0,
          company: "amongus company",
          href: "amongus link"
        }
      ]
    );
  };




  return (
    <div className="App">


      <main className='App-main'>
        <img className='graphic' src='https://www.gstatic.com/travel-frontend/animation/hero/flights_3.svg'>
        </img>
        <h1>
          Fly Broke :/
        </h1>
        <p>
          it's like expedia but for poor ppl
        </p>

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
          <button className='search-button' onClick={handleSearch}>Go!</button>

        </div>

        <div className='searchresults'>

          <div style="height:500px;width: 500px;">
            <div id="kayakSearchWidgetContainer"></div>
          </div>
          <script type="text/javaScript" src="https://www.kayak.com/affiliate/widget-v2.js"></script>
          <script type="text/javaScript">
            {KAYAK.embed({
              container: document.getElementById("kayakSearchWidgetContainer"),
            hostname: "www.kayak.com",
            autoPosition: true,
            defaultProduct: "hotels",
            enabledProducts: ["hotels", "flights"],
            startDate: "2018-10-02",
            endDate: "2018-10-28",
            origin: "New York, NY",
            destination: "Boston, MA",
            ssl: true,
            affiliateId: "acme_corp",
            isInternalLoad: false,
            lc: "en",
            cc: "us",
            mc: "EUR"
})}
          </script>






          <div className='searched-indic'>
            {searched ? "Now showing " + originLoc : null}
          </div>

          <div className='flight-list'>
            {flightList.map(flight => (
              <div className='listnode-bubble'>
                {"Origin: " + flight.oLoc + ". Destination: " + flight.dLoc}
              </div>

              // Create flight list node component
              // props: price, startDate, returnDate, company, link (create warning before following link onClick)
            ))}
          </div>
        </div>





      </main>

    </div>
  );
}

export default App;
