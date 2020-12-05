const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    try {
        res.send('Success')
    } catch (err) {
        console.error(err.message);
    }
});