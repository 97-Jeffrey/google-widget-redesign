
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

  export default customStyles;