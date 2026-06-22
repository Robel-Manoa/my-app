"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnnouncement = void 0;
const uuid_1 = require("uuid");
const Announcement_1 = require("../../domain/entities/Announcement");
const AnnouncementStatus_1 = require("../../domain/value-objects/AnnouncementStatus");
class CreateAnnouncement {
    constructor(announcementRepo) {
        this.announcementRepo = announcementRepo;
    }
    async execute(input, authorId) {
        const now = new Date().toISOString();
        const announcement = new Announcement_1.Announcement({
            id: (0, uuid_1.v4)(),
            title: input.title,
            content: input.content,
            authorId,
            departmentId: input.departmentId ?? null,
            status: AnnouncementStatus_1.AnnouncementStatus.DRAFT,
            createdAt: now,
            publishedAt: null,
        });
        await this.announcementRepo.save(announcement);
        return announcement.toJSON();
    }
}
exports.CreateAnnouncement = CreateAnnouncement;
//# sourceMappingURL=createAnnouncement.js.map