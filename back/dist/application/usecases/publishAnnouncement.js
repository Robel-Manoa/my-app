"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishAnnouncement = void 0;
const errors_1 = require("../../infrastructure/errors");
class PublishAnnouncement {
    constructor(announcementRepo) {
        this.announcementRepo = announcementRepo;
    }
    async execute(id, actorId) {
        const announcement = await this.announcementRepo.findById(id);
        if (!announcement)
            throw new errors_1.AppError('Announcement not found', 404);
        try {
            announcement.publish(new Date().toISOString());
        }
        catch (err) {
            throw new errors_1.AppError(err.message || 'Cannot publish', 400);
        }
        await this.announcementRepo.save(announcement);
        return announcement.toJSON();
    }
}
exports.PublishAnnouncement = PublishAnnouncement;
//# sourceMappingURL=publishAnnouncement.js.map