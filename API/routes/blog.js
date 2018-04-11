const express = require('express');
const router = express.Router();

router.get("/",(req,res) =>{
    console.log(req.body.lastname);
     res.send("GET /blog/?"+req.query.name);


});
router.post("/:name", (req,res)=>{
    res.send("POST /blog/?"+req.query.name+"//"+req.body.lastname+";;"+req.params.name);
});
// router.put("/");
// router.delete();

module.exports = router;
