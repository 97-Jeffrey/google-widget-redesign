import React from 'react';

//component import:
import Widget from './components/widgets';

import './App.css';

const App:React.FC= () =>{
  return (
    <div className="App">
      <header className="App-header">
      <Widget  title={"1234"}/>
      </header>

    </div>
  );
}

export default App;
