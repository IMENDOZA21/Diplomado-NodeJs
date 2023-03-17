const express = require('express');

//Initializations
const router = express.Router();

//Routes
router.get('/',(req, res) => {
    const { limit ,offset } = req.query;
    if(limit && offset){
        res.send({
            limit,
            offset
        });
    }else {
        res.send("There are no parameters");
    }
});

module.exports = router;