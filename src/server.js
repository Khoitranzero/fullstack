import express from "express";
import initWebRoutes from "./routes/web";
import configViewEngine from "./config/viewEngine";
import bodyParser from 'body-parser';
import initApiRoutes from "./routes/api";
import configCors from "./config/cors";
//import connection from "./config/conectDB";
require("dotenv").config();
 const app = express();
 const PORT = process.env.PORT || 8080;



configCors(app);
 configViewEngine(app);
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

//connection();

 initWebRoutes(app);
 initApiRoutes(app);

 app.listen(PORT, ()=>{
    console.log("jwt backend port = "+PORT);
 })