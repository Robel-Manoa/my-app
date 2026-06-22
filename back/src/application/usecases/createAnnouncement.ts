import { v4 as uuidv4 } from 'uuid'
import { Announcement } from '../../domain/entities/Announcement'
import { AnnouncementStatus } from '../../domain/value-objects/AnnouncementStatus'
import { AnnouncementRepositoryPort } from '../../ports/AnnouncementRepositoryPort'
import { CreateAnnouncementInput } from '../schemas/announcementSchemas'

export class CreateAnnouncement {
  constructor(private announcementRepo: AnnouncementRepositoryPort) {}

  async execute(input: CreateAnnouncementInput, authorId: string) {
    const now = new Date().toISOString()
    const announcement = new Announcement({
      id: uuidv4(),
      title: input.title,
      content: input.content,
      authorId,
      departmentId: input.departmentId ?? null,
      status: AnnouncementStatus.DRAFT,
      createdAt: now,
      publishedAt: null,
    })

    await this.announcementRepo.save(announcement)
    return announcement.toJSON()
  }
}
