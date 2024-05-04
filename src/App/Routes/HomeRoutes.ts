import express from "express";
import { HomeController } from "../Modules/HomeModule/Controllers/HomeController";

const HomeRoutes = express.Router();
HomeRoutes.get('/',HomeController.GetData)

export default HomeRoutes