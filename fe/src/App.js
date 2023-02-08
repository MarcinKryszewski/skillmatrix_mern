import './App.css';
import axios from 'axios';

import React, { Fragment, useState, useEffect, useContext } from 'react'

function App() {

  const [testText, setTestText] = useState([]);

  const tests  = async () => {
    const test = await axios.post(process.env.REACT_APP_SERVER_URL + "/test");
    console.log(test.data);
    setTestText(test.data);
  }

  useEffect(() => {
    tests();
  }, );
  

  return (
    <div >
      <a>{testText}</a>
    </div>
  );
}

export default App;
