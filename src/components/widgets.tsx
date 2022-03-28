import React from 'react';

// import bootstrap components:
import { Card, CardBody } from 'reactstrap';



interface WidgetProps {
  data: {
    languageName:string, 
    text:{
      information: string,
      command:string
    }[] 
  }[];
}

const Widget:React.FC <WidgetProps> = ({ data }) =>{

  console.log(data)
  return (


        <Card>
          <CardBody>
          <h4 className="card-title">Install The Client Library</h4>
              <p className="card-title-desc">
               
                
              </p>
          </CardBody>
        </Card>
  )

}


export default Widget;
