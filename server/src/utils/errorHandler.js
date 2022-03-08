// default error handler
const errorHandler = (error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(500).json({ error: error });
}

module.exports = errorHandler;