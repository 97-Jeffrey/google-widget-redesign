import React from 'react';

//import css:
import './languages.css'

// Import components:
import Language from "./language"

interface Languages{
  languageData:{
    languageName:string, 
    text:{
      information: string,
      command:string
    }[] 
  }[];
} 

const Languages:React.FC<Languages> =({ languageData }) =>{

  return (
    <>
      <div className='languages'>
        {languageData.map((eachData,index)=>{
          return(
            <Language 
              key={index} 
              language={eachData}
            />
          )
        })}
      </div>
    </>
  )
}

export default Languages;
