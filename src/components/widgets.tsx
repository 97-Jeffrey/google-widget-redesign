import React from 'react';

interface WidgetProps {
  title:string;
}

const Widget:React.FC <WidgetProps> = ({  title }) =>{

  return (

    <div>{title}</div>
  )

}


export default Widget;
