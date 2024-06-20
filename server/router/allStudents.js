const express = require('express');
const router = express.Router();


const pool = require('../db');




router.get('/api/allStudents',async (req,res)=>{
    try{
        const insertQuery = `SELECT * FROM users`;
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



