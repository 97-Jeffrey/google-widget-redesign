import React, { useState } from 'react';

// import components:
import Languages from './languages';

//import css file:
import "./widgets.css";


interface WidgetProps {
  data: {
    languageName:string, 
    text:{
      information: string,
      command:string
    }[] 
  }[];
}

const Widget:React.FC <WidgetProps> = ({ data }) =>{

  return (
        <>
         <div className="widgets">
           <div className="text">
             Install Google Library
           </div>

           <Languages 
            languageData={data}
            />
         </div>
        </>
  )

}


export default Widget;
