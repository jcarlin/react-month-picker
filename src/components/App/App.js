import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList.jsx';
import HeaderComponent from '../HeaderComponent';


function App() {
  // Handle the onClicked event that has been passed from MonthItem to MonthList and finally to here
  const handleClick = (calendar, event) => {
    alert(calendar.name)
    setClickedMonth(calendar.name)
  }

  // useState is a react pattern for setting up state and it's initial value...
  // it follows this pattern: [current state, function to update current state], initialized to an initial value (empty array in ex. below)
  const [calendarData, setCalendarData] = useState([]);
  // create clickedMonth state "item" and setClickedMonth function to be used to set the state. Also, set the initial state to an empty string (useState("")).
  const [clickedMonth, setClickedMonth] = useState("make a selection");

  // useEffect is a react pattern for setting up side effects
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
      setCalendarData(response.data);
    })
    .catch((error) => {
      console.log('error on Get', error);
    });

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Select a Month</h1>
        {/* <h3>HEADER TEXT</h3> */}
        {/* Set/pass monthName property to the clickedMonth state property */}
        <HeaderComponent monthName={clickedMonth}></HeaderComponent>
        <br />
      </header>
      <br />
      <p>List of months goes here</p>
      {/* Set/pass MonthList's calendarData property to the calendarData state property, and handleClick property to our handleClick */}
      <MonthList calendarData={calendarData} handleClick={handleClick} />
    </div>
  );
}

export default App;
