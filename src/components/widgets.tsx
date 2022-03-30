import React from 'react';

// Import components:
import Languages from './languages';
import SearchBar from './searchBar';

// Import css file:
import "../styling/widgets.css"


interface WidgetProps {
  languageData: {
    languageName:string, 
    text:{
      information: string,
      command:string
    }[] 
  }[];
  languageOptions:{
    value:string, 
    label:string
  }[]
}

const Widget:React.FC <WidgetProps> = ({ languageData, languageOptions }) =>{

  return (
        <>
          <div className="widgets">
            <div className="text">
              Choose A Language <br/>And Install Google Library
            </div>
            <Languages 
              languageData={languageData}
            />

            <div className="searchBar">
              <SearchBar 
                languageOptions={languageOptions}
                languageData={languageData}
              />
            </div>  
          </div>
        </>
      )
  }


export default Widget;
