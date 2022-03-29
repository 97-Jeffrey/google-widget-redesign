import React, { useState } from 'react';

//import css:
import './languages.css'

// Import components:
import Language from "./language";
import Instruction from './instruction';

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

  const [languageIndex, setLanguageIndex] = useState(0);
  const [openInstruction, setOpenInstruction] = useState(false)

  const clickWidget = (index:number) =>{
    setLanguageIndex(index);
    setOpenInstruction(!openInstruction);
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
      {openInstruction 
        && 
      <Instruction 
        isOpen={openInstruction}
        toggle={()=>setOpenInstruction(!openInstruction)}
        instructionData = {languageData[languageIndex]}
      /> }
    </>
  )
}

export default Languages;
