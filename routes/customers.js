const express = require('express');
const router = express.Router();
const {Customer,validate} = require('./../models/customers');


router.get('/',async (req,res) => {
    try {
        const customers = await Customer.find({})
        res.json(customers)
    } catch (error) {
        res.status(400).send("ERROR:",error.message)
    }
});

router.get('/:id',async (req,res) => {
    try {
        const customer = await Customer.findById(req.params.id)
        if (!customer){
            res.status(404).send('NOT FOUND!')
        }
        res.status(200).send(customer)

    } catch (error) {
        res.status(400).send("ERROR:",error.message)
    }
});

router.post('/',async (req,res) =>{
    const customer =new Customer({
        name:req.body.name,
        phone:req.body.phone
    })
    await customer.save()
    res.json(customer)
});
router.put('/:id',async (req,res) =>{});
router.delete('/:id',async (req,res) =>{});


module.exports= router;
