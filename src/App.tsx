import React from 'react';

//component import:
import Widget from './components/widgets';

// import Data
import widgetData from './components/data/widgetData';
import languageOptions from './components/data/languageData';

//import CSS
import './App.css';

const App:React.FC= () =>{
  return (
    <div className="App">
      <header className="App-header">
        <Widget  
          data = {widgetData}
          languageOptions={languageOptions}
        />
      </header>

    </div>
  );
}

export default App;
