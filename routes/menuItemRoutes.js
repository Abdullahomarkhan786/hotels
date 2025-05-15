const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newItem = new MenuItem(data);
        const response = await newItem.save();
        console.log("added");
        res.json({ response })

    } catch (err) {
        console.log(err)

    }
})

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("data fetched")
        res.json({ data })


    }
    catch (err) {
        console.log(err)
    }
})

router.post('/:taste',async (req, res) => {
    try {
        const taste = req.params.taste;
        if (taste == 'sweet' || taste == 'sour' || taste == 'spicy') {
            const response = await MenuItem.find({ taste: taste });
            console.log("fetched");
            res.json({ response })
        }else{
            res.json({
                error:"invalid taste type"
            })
        }
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router;