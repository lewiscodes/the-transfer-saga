import React, { useEffect } from 'react';
import { Button } from "@blueprintjs/core";
import logo from './logo.svg';
import './App.css';
import cms from './sanityCms';

// https://thetransfersaga.sanity.studio/

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await cms.fetch(`*[_type == 'transfer']{
          _id,
          player->,
          toClub,
          price
        }`);
        console.log(data); //eslint-disable-line
      } catch (error) {
        console.log(error); //eslint-disable-line        
      }
    }

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
		<Button intent="primary" onClick={() => undefined}>
			A Blueprint Button
		</Button>
      </header>
    </div>
  );
}

export default App;
