import React from 'react'
import { MdEdit,MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const OurCard = ({details,deleteStudent}) => {
    const navigate = useNavigate();
    const editStudent = ()=>{
        const jsonParams = encodeURIComponent(JSON.stringify(details));
        navigate(`/editStudent?data=${jsonParams}`)
    }
  return (
    <div id='ourCard'>
        <div className="icons">
            <div className="edit" onClick={editStudent}>
                <MdEdit />
            </div>
            <div className="delete" onClick={()=>{deleteStudent(details.studentid)}}>
                <MdDelete />
            </div>
            
        </div>
        <div className="line">
            <div className="tag">First Name - </div>
            <div className="text">{details.firstname}</div>
        </div>
        <div className="line">
            <div className="tag">Last Name - </div>
            <div className="text">{details.lastname}</div>
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
            {details.studentid}
        </div>
    </div>
  )
}

export default OurCard