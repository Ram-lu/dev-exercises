import { logger } from "./logger"

export const errorHandler = (err, req, res, next) => {
    logger.error(err.message)

    res.status(500).json({
        error: {
            message: err.message,
            details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
        }
    })
}