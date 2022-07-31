import express from "express";

const router = express.Router()

export default (app) => {
    router.get('/', (req, res) => {
        return res.send('HELLO WORD')
    })
    return app.use('/', router)
}

