import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [calMonths, setCalMonths] = useState([]);

  useEffect( () =>{
    getMonths();
  }, []);

  const getMonths = () =>{
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
    </div>
  );
}


export default App;
