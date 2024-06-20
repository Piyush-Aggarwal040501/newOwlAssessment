const express = require('express');
const router = express.Router();


const pool = require('../db');




router.post('/api/addStudent',async (req,res)=>{
    try{
        const { studentID, firstName, lastName, course, phone, email } = req.body;
        const insertQuery = `
        INSERT INTO users (studentID, firstName, lastName, course, phone, email)
        VALUES ('${studentID}', '${firstName}', '${lastName}', '${course}','${phone}', '${email}');`;
        console.log(insertQuery);
        pool.query(insertQuery,(error,results)=>{
            if(error) throw error;
            res.status(200).json(results.rows);
        })
    }catch(err){
        console.log(err)
    }

})


module.exports = router;



