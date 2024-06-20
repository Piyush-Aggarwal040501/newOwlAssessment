import React,{useState,useEffect} from 'react'
import "../styles/general.css"

import OurCard from '../components/OurCard'

import { server_base_url } from '../info';

const AllStudents = () => {
      const [students, setStudents] = useState([])
      const studentDetails = async ()=>{
        try {
            const response = await fetch(server_base_url + '/api/allStudents');
      
            if (response.status==200) {
              const result = await response.json();
              setStudents(result);
            }
      
          } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
          }
    }
    useEffect(() => {
      studentDetails();
    }, [])

    const deleteStudent = async (id)=>{
      try {
        const response = await fetch(server_base_url + '/api/deleteStudent', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id:id}),
        });
  
        if (response.status==200) {
          alert("Student deleted successfully");
          const result = await response.json();
          studentDetails();
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }

    
  return (
    <div id='allStudents' className='container'>
        <h1>Students Details</h1>
        <div className="allCards">
            {students.map((details,ind)=>(
                <OurCard details={details} deleteStudent={deleteStudent} />
            ))}
        </div>
    </div>
  )
}

export default AllStudents