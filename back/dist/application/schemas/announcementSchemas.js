"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAnnouncementSchema = void 0;
const zod_1 = require("zod");
exports.createAnnouncementSchema = zod_1.z.object({
    title: zod_1.z.string().min(3),
    content: zod_1.z.string().min(1),
    departmentId: zod_1.z.string().optional(),
});
//# sourceMappingURL=announcementSchemas.js.map