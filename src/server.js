import express from 'express'
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js"
import initWebRoutes from "./route/web.js"
import dotenv from 'dotenv'
import {connectDB} from "./config/connectDB.js";

dotenv.config()
const app = express()

// config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

viewEngine(app)
initWebRoutes(app)


connectDB()

const PORT = process.env.PORT || 6969

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT: ${PORT}`)
})