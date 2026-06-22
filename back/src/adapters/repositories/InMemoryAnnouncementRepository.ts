import { Announcement } from '../../domain/entities/Announcement'
import { AnnouncementRepositoryPort } from '../../ports/AnnouncementRepositoryPort'

export class InMemoryAnnouncementRepository implements AnnouncementRepositoryPort {
  private items: Map<string, Announcement> = new Map()

  async save(announcement: Announcement): Promise<void> {
    this.items.set(announcement.id, announcement)
  }

  async findById(id: string): Promise<Announcement | null> {
    return this.items.get(id) ?? null
  }

  async listByDepartment(departmentId?: string): Promise<Announcement[]> {
    const arr = Array.from(this.items.values())
    if (!departmentId) return arr
    return arr.filter(a => (a as any).toJSON().departmentId === departmentId)
  }
}
