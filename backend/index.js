import express from "express";
import dotenv from "dotenv";
import { DbConnect } from "./Connection/DbConnect.js";
import cors from "cors";
import { genRouter } from "./Routes/genRouter.js";
//Declaration of Express app and use .env variables
dotenv.config();
const app = express();
//Usage and declaration of middlewares
app.use(cors());

//Connection of MongoDB Database
DbConnect();

//Code For Routes of specific endpoints
app.use("/", genRouter);

app.listen(`${process.env.PORT}`, () => {
  console.log("Backend Connected");
});
