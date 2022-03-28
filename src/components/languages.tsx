import React, { useState } from 'react';

//import css:
import './languages.css'

// Import components:
import Language from "./language"

interface LanguagesProps{
  languageData:{
    languageName:string, 
    text:{
      information: string,
      command:string
    }[] 
  }[];
} 


const Languages:React.FC<LanguagesProps> =({ languageData }) =>{

  const [languageIndex, setLanguageIndex] = useState({});

  const clickWidget = (index:number) =>{
    setLanguageIndex(index)
  }

  return (
    <>
      <div className='languages'>
        {languageData.map((eachData,index)=>{
          return(
            <Language 
              key={index}
              index = {index}
              language={eachData}
              languageIndex={languageIndex}
              onClick={()=>clickWidget(index)}
            />
          )
        })}
      </div>
    </>
  )
}

export default Languages;
