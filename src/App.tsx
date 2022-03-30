import React from 'react';

//Component import:
import Widget from './components/widgets';

// Import Data
import widgetData from './components/data/widgetData';
import languageOptions from './components/data/languageData';

//Import CSS
import './App.css';

const App:React.FC= () =>{
  return (
    <div className="app">
      <Widget  
        languageData = {widgetData}
        languageOptions={languageOptions}
      />
    </div>
  );
}

export default App;
