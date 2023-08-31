module.exports = protect = (req, res, next) => {
    console.log(req.headers)
    next()
}