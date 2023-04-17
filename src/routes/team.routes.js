const express = require("express");


const TeamRouter = express.Router();

TeamRouter.get("/team/test",(req,res) =>{
    res.json({message:"this is a msg from team"});
});

module.exports = TeamRouter;