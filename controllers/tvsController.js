const TVS = require('../models/tvs')

class TVSController {
    static async findAll(req, res, next) {
        try {
            const tvseries = await TVS.find()
            res.status(200).json(tvseries)
        } catch(err) {
            next(err)
        }
    }

    static async findOne(req, res, next) {
        try {
            let id = req.params.id
            const tvseries = await TVS.findOne(id)
            res.status(200).json(tvseries)
        } catch(err) {
            next(err)
        }
    }

    static async postTVS(req, res, next) {
        try {
            const newTVSeries = req.body
            const tvseries = await TVS.post(newTVSeries)
            res.status(201).json(tvseries)
        } catch(err) {
            next(err)
        }
    }

    static async editTVS(req, res, next) {
        try {
            let editTVSeries = req.body
            let id = req.params.id
            const tvseries = await TVS.edit(id, editTVSeries)
            res.status(200).json(tvseries)
        } catch(err) {
            next(err)
        }
    }

    static async deleteTVS(req, res, next) {
        try {
            const id = req.params.id
            const tvseries = await TVS.delete(id)
            res.status(200).json(tvseries)
        } catch(err) {
            next(err)
        }
    }
}

module.exports = TVSController