const express = require('express');
const router = express.Router();


const pool = require('../db');


router.post('/api/deleteStudent',async (req,res)=>{
    try{
        const {id} = req.body;
        const query = `
        DELETE FROM users WHERE studentID = '${id}'`;
        console.log(id)
        pool.query(query,(error,results)=>{
            if(error) throw error;
            res.status(200).json(results.rows);
        })
    }catch(err){
        console.log(err)
    }

})


module.exports = router;



