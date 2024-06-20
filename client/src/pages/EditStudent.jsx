
import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';

import "../styles/general.css"
import { server_base_url } from '../info';
const EditStudent = () => {
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const encodedData = urlParams.get('data');
        if (encodedData) {
        const decodedData = decodeURIComponent(encodedData);
        const parsedData = JSON.parse(decodedData);
        setDetails(parsedData);
        }
    }, [location.search]);
    const [details, setDetails] = useState({
        firstname:"",lastname:"",course:"",studentid:"",email:"",phone:""
    });

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        const newDetails = {...details,[name]:value};
        setDetails(newDetails);
    }

    const editStudentApi = async ()=>{
        try {
            const response = await fetch(server_base_url + '/api/editStudent', { 
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(details),
            });
      
            if (response.status==200) {
              alert("details edited successfully");
                setDetails({
                    firstname:"",lastname:"",course:"",studentid:"",email:"",phone:""
                })
            }
      
          } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
          }
    }

  return (
    <div id='newStudent' className='container'>
        <h1>Edit student details</h1>
        <div className="form">
            <div className="box">
                <label htmlFor="firstname">Student ID</label>
                <input readOnly='true' type="text" placeholder='Enter Course name' value={details.studentid} name='studentid' onChange={handleChange} />
            </div>

            <div className="box">
                <label htmlFor="firstname">First Name</label>
                <input type="text" placeholder='Enter first name' value={details.firstname} name='firstname' onChange={handleChange} />
            </div>
            <div className="box">
                <label htmlFor="firstname">Last Name</label>
                <input type="text" placeholder='Enter last name' value={details.lastname} name='lastname' onChange={handleChange} />
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
            <div className="btn" onClick={editStudentApi}>Edit Student Details</div>
        </div>
    </div>
  )
}

export default EditStudent