import React from 'react'
import { MdEdit,MdDelete } from "react-icons/md";

const OurCard = ({details}) => {
  return (
    <div id='ourCard'>
        
        <div className="icons">
            <div className="edit">
                <MdEdit />
            </div>
            <div className="delete">
                <MdDelete />
            </div>
            
        </div>
        <div className="line">
            <div className="tag">Student ID - </div>
            <div className="text">{details.studentID}</div>
        </div>
        <div className="line">
            <div className="tag">First Name - </div>
            <div className="text">{details.firstName}</div>
        </div>
        <div className="line">
            <div className="tag">Last Name - </div>
            <div className="text">{details.lastName}</div>
        </div>
        <div className="line">
            <div className="tag">Course - </div>
            <div className="text">{details.course}</div>
        </div>
        <div className="line">
            <div className="tag">Email - </div>
            <div className="text">{details.email}</div>
        </div>
        <div className="line">
            <div className="tag">Phone Number - </div>
            <div className="text">{details.phone}</div>
        </div>

        <div id="cardId">
            {details.id}
        </div>
    </div>
  )
}

export default OurCard