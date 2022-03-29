import React, { useState } from "react";

//import components:
import Select from 'react-select';
import Instruction from './instruction';

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

  const [languageIndex, setLanguageIndex] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState({value:"", label:""});
  const [openInstruction, setOpenInstruction] = useState(false);

  const handleSelectLanguage = (selectedgroup:any) =>{
    setSelectedLanguage(selectedgroup);
    setLanguageIndex(languageOptions.indexOf(selectedgroup))
    setOpenInstruction(!openInstruction)
    setSelectedLanguage({value:"", label:""})

  }

  const customStyles = {
    option: (provided:any, state:any) => ({
      ...provided,
      borderBottom: '0.5px solid gray',
      color: state.isSelected ? 'black' : 'rgb(66, 133, 244)',
      padding: 10,
    }),
    control: () => ({
      width: 580,
    }),
    singleValue: (provided:any, state:any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    },
    dropdownIndicator: (provided:any, state:any) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen && "rotate(180deg)"
    })
  }


  return(
    <>
    <div >
      <Select 
        styles={customStyles}
        placeholder="Or Search/Select A Language"
        options={languageOptions}
        onChange={(selected)=>handleSelectLanguage(selected)}
      />
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

export default SearchBar;