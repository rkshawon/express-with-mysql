import express from "express";
import { getAllUser, register } from "../controller/AuthController";

const route = express.Router();

route.post("/register", register);
route.get("/getalluser", getAllUser);

export default route;
