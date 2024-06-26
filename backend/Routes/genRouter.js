import express from "express";
import { getUsers } from "../Controllers/getUsers.js";
const genRouter = express.Router();
genRouter.get("/", getUsers);
export { genRouter };
