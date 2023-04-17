const express = require("express");


const PlayerRouter = express.Router();

PlayerRouter.get("/player/test",(req,res) =>{
    res.json({message:"this is a msg from player"});
});

module.exports = PlayerRouter;