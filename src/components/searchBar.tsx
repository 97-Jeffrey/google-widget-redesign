import React, { useState } from "react";

//Import components:
import Select from 'react-select';
import Instruction from './instruction';

//Import Styling:
import customStyles from '../styling/styleForSearchbar';


interface SearchBarProps{
  languageOptions:{
    value:string, 
    label:string
  }[];
  languageData:{ 
      languageName:string, 
      text:{
        information: string,
        command:string
      }[] 
    }[];
}

const SearchBar:React.FC<SearchBarProps> = ({ languageOptions, languageData }) =>{

  const [languageIndex, setLanguageIndex] = useState<number>(0);
  const [selectedLanguage, setSelectedLanguage] = 
  useState<{value:string, label:string}>({value:"", label:""});

  const [openInstruction, setOpenInstruction] = useState<boolean>(false);

  const handleSelectLanguage = (selectedgroup:any):void =>{
    setSelectedLanguage(selectedgroup);
    setLanguageIndex(languageOptions.indexOf(selectedgroup))
    setOpenInstruction(!openInstruction)
  }

  return(
    <>
      <div>
        <Select 
          styles={customStyles}
          placeholder="Or Search/Select A Language"
          options={languageOptions}
          onChange={(selected)=>handleSelectLanguage(selected)}
        />
      </div>
      {
        openInstruction 
          && 
        <Instruction 
          isOpen={openInstruction}
          toggle={()=>setOpenInstruction(!openInstruction)}
          instructionData = {languageData[languageIndex]}
        /> 
      }
    </>
  )
}

export default SearchBar;