
import React,{useState} from 'react'

import "../styles/general.css"

const NewStudent = () => {

    const [details, setDetails] = useState({
        firstName:"",lastName:"",course:"",studentID:"",email:"",phone:""
    });

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        const newDetails = {...details,[name]:value};
        setDetails(newDetails);
    }

    const addStudentApi = ()=>{
        console.log(details);
    }

  return (
    <div id='newStudent' className='container'>
        <h1>Adding New student</h1>
        <div className="form">
            <div className="box">
                <label htmlFor="firstname">First Name</label>
                <input type="text" placeholder='Enter first name' value={details.firstName} name='firstName' onChange={handleChange} />
            </div>
            <div className="box">
                <label htmlFor="firstname">Last Name</label>
                <input type="text" placeholder='Enter last name' value={details.lastName} name='lastName' onChange={handleChange} />
            </div>
            <div className="box">
                <label htmlFor="firstname">Student ID</label>
                <input type="text" placeholder='Enter Course name' value={details.studentID} name='studentID' onChange={handleChange} />
            </div>
            <div className="box">
                <label htmlFor="firstname">Course</label>
                <input type="text" placeholder='Enter course' value={details.course} name='course' onChange={handleChange} />
            </div>
            <div className="box">
                <label htmlFor="firstname">Email</label>
                <input type="text" placeholder='Enter your email' value={details.email} name='email' onChange={handleChange} />
            </div>
            <div className="box">
                <label htmlFor="firstname">Phone Number</label>
                <input type="text" placeholder='Enter Phone Number' value={details.phone} name='phone' onChange={handleChange} />
            </div>
            <div className="btn" onClick={addStudentApi}>Add Student</div>
        </div>
    </div>
  )
}

export default NewStudent