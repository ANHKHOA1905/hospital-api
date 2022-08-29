import express from "express";
import * as homeController from "../controllers/homeController.js"
import * as userController from "../controllers/userController"

const router = express.Router()

export default (app) => {
    router.get('/', homeController.getHomePage)
    router.post('/api/login', userController.handleLogin)
    return app.use('/', router)
}

