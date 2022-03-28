import React from "react";

// import css:
import './language.css'

interface Language{
  language:{
    languageName:string, 
    text:{
      information: string,
      command:string
    }[] 
  }
}

const Language: React.FC<Language>= ({ language }) =>{

  return(
    <>
     <div 
        className="language" 
      >
        {language.languageName}
      </div>
    </>
  )
}

export default Language