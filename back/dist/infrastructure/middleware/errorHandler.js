"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const errors_1 = require("../errors");
function errorHandler(err, req, res, next) {
    if (err instanceof errors_1.AppError) {
        return res.status(err.statusCode).json({ error: err.message });
    }
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
}
//# sourceMappingURL=errorHandler.js.map