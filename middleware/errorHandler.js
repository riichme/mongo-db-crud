function errorHandler(err, req, res, next) {
    console.log(err)
    console.log(err.name, "<<<<<<<")
    switch (err.name) {
        case "Bad Request":
            res.status(400).json({message: err.message})
            break
        default: 
            res.status(500).json({message: err.message || "Internal Server Error"})
        
    }
}

module.exports = errorHandler