import React, { useState } from 'react';

// import components:
import Languages from './languages';
import SearchBar from './searchBar';

//import css file:
import "./widgets.css";
import languageOptions from './data/languageData';


interface WidgetProps {
  data: {
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

const Widget:React.FC <WidgetProps> = ({ data, languageOptions }) =>{

  return (
        <>
         <div className="widgets">
           <div className="text">
            Choose A Language <br/>And Install Google Library
           </div>

           <Languages 
            languageData={data}
          />

          <div style={{ marginTop:"30px"}}>
          <SearchBar 
            languageOptions={languageOptions}
            languageData={data}
          />
          </div>

          
         </div>
        </>
  )

}


export default Widget;
