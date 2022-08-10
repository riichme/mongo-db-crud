const { MongoClient } = require('mongodb')

let database = null

async function connect() {
    try {
        const uri = 'mongodb+srv://richme:6MjX5WH9sZplQjHo@cluster0.dg9cg.mongodb.net/?retryWrites=true&w=majority'
        const client = new MongoClient(uri, {useUnifiedTopology: true, useNewUrlParser :true })

        await client.connect()
        const db = await client.db('ristmi')
        database = db
        return db

    } catch (err) {
        console.log(err)
    }

}

function getDatabase() {
    return database
}

module.exports = {
    connect,
    getDatabase
}