import React from 'react';

//component import:
import Widget from './components/widgets';

// import Data
import widgetData from './data';

//import CSS
import './App.css';

const App:React.FC= () =>{
  return (
    <div className="App">
      <header className="App-header">
        <Widget  
          data = {widgetData}
        />
      </header>

    </div>
  );
}

export default App;
