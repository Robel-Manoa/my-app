import { Request, Response, NextFunction } from "express";
import { InMemoryAnnouncementRepository } from "../repositories/InMemoryAnnouncementRepository";
import { CreateAnnouncement } from "../../application/usecases/createAnnouncement";
import { PublishAnnouncement } from "../../application/usecases/publishAnnouncement";
import { createAnnouncementSchema } from "../../application/schemas/announcementSchemas";
import { AppError } from "../../infrastructure/errors";

const announcementRepo = new InMemoryAnnouncementRepository();
const createAnnouncement = new CreateAnnouncement(announcementRepo);
const publishAnnouncement = new PublishAnnouncement(announcementRepo);

export const AnnouncementController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = createAnnouncementSchema.parse(req.body);
      const user = (req as any).user;
      const result = await createAnnouncement.execute(parsed, user.id);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  },

  async publish(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id
      const user = (req as any).user
      if (!id) throw new AppError('Announcement ID is required', 400)
      if (!user?.id) throw new AppError('Unauthorized', 401)
      const result = await publishAnnouncement.execute(id, user.id)
      res.json(result)
    } catch (err) {
      next(err)
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id
      if (!id) return res.status(400).json({ error: 'Announcement ID is required' })
      const a = await announcementRepo.findById(id)
      if (!a) return res.status(404).json({ error: 'Not found' })
      res.json(a.toJSON())
    } catch (err) {
      next(err)
    }
  },

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const announcements = await announcementRepo.listByDepartment()
      res.json(announcements.map(a => a.toJSON()))
    } catch (err) {
      next(err)
    }
  },
};
