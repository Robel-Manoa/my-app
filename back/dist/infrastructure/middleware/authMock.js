"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMock = authMock;
// Simple mock authentication middleware.
// Provide header `x-user` as JSON string or `x-user-role` for quick role assignment.
function authMock(req, res, next) {
    const rawUser = req.headers['x-user'];
    const rawRole = req.headers['x-user-role'];
    const role = rawRole?.toString().trim() || 'Employee';
    if (rawUser) {
        const text = rawUser.toString().trim();
        try {
            const user = JSON.parse(text);
            req.user = {
                id: user.id || 'anonymous',
                role: user.role ? user.role.toString().trim() : role,
                departmentId: user.departmentId || 'dept-1',
            };
        }
        catch {
            ;
            req.user = {
                id: text || 'anonymous',
                role,
                departmentId: 'dept-1',
            };
        }
    }
    else {
        ;
        req.user = {
            id: 'mock-user',
            role,
            departmentId: 'dept-1',
        };
    }
    next();
}
//# sourceMappingURL=authMock.js.map