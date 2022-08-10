const {getDatabase} = require('../config/mongodb')
const { ObjectId } = require('bson')

class TVS {
    static async find() {
        return getDatabase().collection('ristmi').find().toArray()
    }

    static async findOne(id) {
        return getDatabase().collection('ristmi').findOne({_id: ObjectId(id)})
    }

    static async post(newTVseries) {
        return getDatabase().collection('ristmi').insertOne(newTVseries)
    }

    static async edit(id, editTVseries) {
        return getDatabase().collection('ristmi').replaceOne({
            _id: ObjectId(id)
        }, editTVseries)
    }

    static async delete(id) {
        return getDatabase().collection('ristmi').deleteOne({_id: ObjectId(id)})
    }
}

module.exports = TVS