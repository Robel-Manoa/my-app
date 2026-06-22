import { AnnouncementRepositoryPort } from '../../ports/AnnouncementRepositoryPort'
import { AppError } from '../../infrastructure/errors'

export class PublishAnnouncement {
  constructor(private announcementRepo: AnnouncementRepositoryPort) {}

  async execute(id: string, actorId: string) {
    const announcement = await this.announcementRepo.findById(id)
    if (!announcement) throw new AppError('Announcement not found', 404)

    try {
      announcement.publish(new Date().toISOString())
    } catch (err: any) {
      throw new AppError(err.message || 'Cannot publish', 400)
    }

    await this.announcementRepo.save(announcement)
    return announcement.toJSON()
  }
}
