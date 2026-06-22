"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const announcementController_1 = require("./controllers/announcementController");
const feedbackController_1 = require("./controllers/feedbackController");
const rbac_1 = require("../infrastructure/middleware/rbac");
const router = (0, express_1.Router)();
// Announcements
router.post('/announcements', (0, rbac_1.requireRole)('HR_ADMIN', 'DEPT_ADMIN'), announcementController_1.AnnouncementController.create);
router.post('/announcements/:id/publish', (0, rbac_1.requireRole)('HR_ADMIN', 'DEPT_ADMIN'), announcementController_1.AnnouncementController.publish);
router.get('/announcements', announcementController_1.AnnouncementController.list);
router.get('/announcements/:id', announcementController_1.AnnouncementController.getById);
// Feedback
router.post('/feedback', feedbackController_1.FeedbackController.submit);
router.get('/feedback', (0, rbac_1.requireRole)('HR_ADMIN', 'DEPT_ADMIN'), feedbackController_1.FeedbackController.listAll);
// Diagnostics
router.get('/me', (req, res) => {
    res.json({ user: req.user || null });
});
exports.default = router;
//# sourceMappingURL=routes.js.map