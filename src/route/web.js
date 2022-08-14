import express from "express";
import * as homeController from "../controllers/homeController.js"

const router = express.Router()

export default (app) => {
    router.get('/', homeController.getHomePage)
    return app.use('/', router)
}

