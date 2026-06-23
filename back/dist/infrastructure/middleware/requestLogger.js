"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = requestLogger;
function requestLogger(req, res, next) {
    console.log(`[Request] ${req.method} ${req.url}`);
    next();
}
//# sourceMappingURL=requestLogger.js.map