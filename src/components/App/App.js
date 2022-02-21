import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList'


function App() {

  const [calMonths, setCalMonths] = useState([]);

  useEffect( () =>{
    getMonths();
  }, []);

  const getMonths = () =>{
    //- Use `axios` to retrieve (`GET`) data from `/calendar` and store it in `App.js`.
    // `/calendar` returns an array of calendar month names and ids.
    axios({
      method: 'GET',
      url: '/calendar'
    })
    .then((response) => {
      console.log('get response', response);
      setCalMonths(response.data);
    })
    .catch((error) => {
      console.log('error on Get', error);
    });

  }// end Get



  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Select a Month</h1>
        <h3>SELECTED MONTH GOES HERE</h3>
        <br />
      </header>
      <br />
      <p>List of months goes here</p>
      <MonthList list={MonthList} />
    </div>
  );
}


export default App;
