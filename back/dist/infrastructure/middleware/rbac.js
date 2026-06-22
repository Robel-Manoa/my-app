"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = requireRole;
const errors_1 = require("../errors");
function requireRole(...allowed) {
    return (req, res, next) => {
        const user = req.user;
        const role = user?.role?.toString().trim().toUpperCase();
        const normalizedAllowed = allowed.map(r => r.toString().trim().toUpperCase());
        if (!user || !normalizedAllowed.includes(role)) {
            return next(new errors_1.AppError('Forbidden', 403));
        }
        next();
    };
}
//# sourceMappingURL=rbac.js.map