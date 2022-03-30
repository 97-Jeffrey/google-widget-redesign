import React from "react";

// Import css:
import '../styling/language.css'

interface LanguageProps{
  language:{
    languageName:string, 
    text:{
      information: string,
      command:string
    }[] 
  },
  languageIndex:{},
  index:number,
  onClick:()=> void
}

const Language: React.FC<LanguageProps>= ({ language, languageIndex, index, onClick }) =>{

  return(
    <>
     <div 
        className={ languageIndex===index?"language active":"language"}
        onClick={onClick} 
      >
        {language.languageName}
      </div>
    </>
  )
}

export default Language