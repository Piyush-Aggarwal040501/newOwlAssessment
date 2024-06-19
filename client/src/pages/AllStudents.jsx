import React from 'react'
import "../styles/general.css"
import OurCard from '../components/OurCard'
const AllStudents = () => {
    const students = [
        {
            id:"ifc123",
          firstName: "John",
          lastName: "Doe",
          course: "Computer Science",
          studentID: "CS2021001",
          email: "john.doe@example.com",
          phone: "555-1234"
        },
        {
            id:"ifc123",
          firstName: "Jane",
          lastName: "Smith",
          course: "Mechanical Engineering",
          studentID: "ME2021002",
          email: "jane.smith@example.com",
          phone: "555-5678"
        },
        {
            id:"ifc123",
          firstName: "Alice",
          lastName: "Johnson",
          course: "Electrical Engineering",
          studentID: "EE2021003",
          email: "alice.johnson@example.com",
          phone: "555-8765"
        },
        {
            id:"ifc123",
          firstName: "Bob",
          lastName: "Brown",
          course: "Civil Engineering",
          studentID: "CE2021004",
          email: "bob.brown@example.com",
          phone: "555-4321"
        },
        {
            id:"ifc123",
          firstName: "Carol",
          lastName: "Davis",
          course: "Information Technology",
          studentID: "IT2021005",
          email: "carol.davis@example.com",
          phone: "555-9101"
        }
      ];
      
  return (
    <div id='allStudents' className='container'>
        <h1>Students Details</h1>
        <div className="allCards">
            {students.map((details,ind)=>(
                <OurCard details={details} />
            ))}
        </div>
    </div>
  )
}

export default AllStudents