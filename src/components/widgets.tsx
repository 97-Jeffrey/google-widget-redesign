import React from 'react';

// import bootstrap components:

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

  console.log(data)
  return (
        <>
         <div className="widgets">
           <div className="text">
             Install Google Library
           </div>
            
         </div>
        </>
  )

}


export default Widget;
