import React from "react";

// import css:
import './language.css'

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
  onClick:()=> any
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