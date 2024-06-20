const express = require('express');
const router = express.Router();


const pool = require('../db');




router.post('/api/editStudent',async (req,res)=>{
    try{
        const { studentid, firstname, lastname, course, phone, email } = req.body;
        const query = `
        UPDATE users
        SET firstName = '${firstname}',
            lastName = '${lastname}',
            course = '${course}',
            phone = '${phone}',
            email = '${email}'
        WHERE studentID = '${studentid}';`;
        console.log(query);
        pool.query(query,(error,results)=>{
            if(error) throw error;
            res.status(200).json(results.rows);
        })
    }catch(err){
        console.log(err)
    }

})


module.exports = router;



