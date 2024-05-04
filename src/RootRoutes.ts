import express from "express"
import HomeRoutes from "./App/Routes/HomeRoutes"

const Router = express.Router()

Router.use('/',HomeRoutes)
export default Router