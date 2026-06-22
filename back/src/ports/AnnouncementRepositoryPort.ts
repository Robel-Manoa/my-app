import { Announcement } from '../domain/entities/Announcement'

export interface AnnouncementRepositoryPort {
  save(announcement: Announcement): Promise<void>
  findById(id: string): Promise<Announcement | null>
  listByDepartment(departmentId?: string): Promise<Announcement[]>
}
