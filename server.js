const express = require("express");
const bodyParser = require("body-parser");
const db_connection = require("./src/config/db.config");
const TeamRouter = require("./src/routes/team.routes");
const PlayerRouter= require("./src/routes/player.routes");

const app = express();
app.use(bodyParser.json());
app.use(TeamRouter);
app.use(PlayerRouter);


app.listen(5000,async()=>{
    console.log("server is working");
    await db_connection();
});