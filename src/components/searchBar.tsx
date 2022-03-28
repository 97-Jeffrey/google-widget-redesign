import React from "react";

//import components:
import Select from 'react-select';

interface SearchBarProps{
  languageOptions:{
    value:string, 
    label:string
  }[]
}

const SearchBar:React.FC<SearchBarProps> = ({ languageOptions }) =>{

  const customStyles = {
    option: (provided:any, state:any) => ({
      ...provided,
      borderBottom: '0.5px solid gray',
      color: state.isSelected ? 'black' : 'rgb(66, 133, 244)',
      padding: 10,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 580,
    }),
    singleValue: (provided:any, state:any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }
  return(
    <>
    <div >
      <Select 
        styles={customStyles}
        placeholder="Or Search/Select A Language"
        options={languageOptions}
      />
    </div>
    </>
  )
}

export default SearchBar;