import React, { useState } from 'react';

// Import components:
import Language from "./language";
import Instruction from './instruction';

//Import css:
import './languages.css'

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

  const [languageIndex, setLanguageIndex] = useState<number>(0);
  const [openInstruction, setOpenInstruction] = useState<boolean>(false)

  const clickWidget = (index:number):void =>{
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
