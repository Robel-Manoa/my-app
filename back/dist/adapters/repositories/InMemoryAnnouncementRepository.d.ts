import { Announcement } from '../../domain/entities/Announcement';
import { AnnouncementRepositoryPort } from '../../ports/AnnouncementRepositoryPort';
export declare class InMemoryAnnouncementRepository implements AnnouncementRepositoryPort {
    private items;
    save(announcement: Announcement): Promise<void>;
    findById(id: string): Promise<Announcement | null>;
    listByDepartment(departmentId?: string): Promise<Announcement[]>;
}
//# sourceMappingURL=InMemoryAnnouncementRepository.d.ts.map