import React from "react";

//Import components:
import { Modal } from "reactstrap";

//Import css:
import "./instruction.css"

interface InstructionProps {
  isOpen:boolean;
  instructionData: {
    languageName:string, 
    text:{
      information: string,
      command:string
    }[] 
  };
  toggle:()=>void,
}

const Instruction: React.FC<InstructionProps> = ({ isOpen, instructionData, toggle }) =>{

  return (
    <>
    <Modal
      style={{ marginTop:"200px"}}
      isOpen={isOpen}
      toggle={toggle}
    >
      <div className="modal-header">
        <h5
          className="modal-title mt-0"
          id="myModalLabel"
        >
          Installation for {instructionData.languageName}
        </h5>
      </div>
      <div className="modal-body">
        {instructionData.text.map((each, index)=>{
          return (
            <div 
              key={index}
              className="text" 
            >
              <div className="information">
                {each.information}
              </div>
              <div className="command">
                {each.command}
              </div>

            </div>
          )
        })}
      </div>
      <div className="modal-footer">
          <button 
            className="btn btn-secondary"
            onClick={toggle}
          >
            Close
          </button>
        </div>
    </Modal>
    </>
  )
}

export default Instruction;