"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementController = void 0;
const InMemoryAnnouncementRepository_1 = require("../repositories/InMemoryAnnouncementRepository");
const createAnnouncement_1 = require("../../application/usecases/createAnnouncement");
const publishAnnouncement_1 = require("../../application/usecases/publishAnnouncement");
const announcementSchemas_1 = require("../../application/schemas/announcementSchemas");
const errors_1 = require("../../infrastructure/errors");
const announcementRepo = new InMemoryAnnouncementRepository_1.InMemoryAnnouncementRepository();
const createAnnouncement = new createAnnouncement_1.CreateAnnouncement(announcementRepo);
const publishAnnouncement = new publishAnnouncement_1.PublishAnnouncement(announcementRepo);
exports.AnnouncementController = {
    async create(req, res, next) {
        try {
            const parsed = announcementSchemas_1.createAnnouncementSchema.parse(req.body);
            const user = req.user;
            const result = await createAnnouncement.execute(parsed, user.id);
            res.status(201).json(result);
        }
        catch (err) {
            next(err);
        }
    },
    async publish(req, res, next) {
        try {
            const id = req.params.id;
            const user = req.user;
            if (!id)
                throw new errors_1.AppError('Announcement ID is required', 400);
            if (!user?.id)
                throw new errors_1.AppError('Unauthorized', 401);
            const result = await publishAnnouncement.execute(id, user.id);
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    },
    async getById(req, res, next) {
        try {
            const id = req.params.id;
            if (!id)
                return res.status(400).json({ error: 'Announcement ID is required' });
            const a = await announcementRepo.findById(id);
            if (!a)
                return res.status(404).json({ error: 'Not found' });
            res.json(a.toJSON());
        }
        catch (err) {
            next(err);
        }
    },
    async list(req, res, next) {
        try {
            const announcements = await announcementRepo.listByDepartment();
            res.json(announcements.map(a => a.toJSON()));
        }
        catch (err) {
            next(err);
        }
    },
};
//# sourceMappingURL=announcementController.js.map