import { AnnouncementStatus } from '../../domain/value-objects/AnnouncementStatus';
import { AnnouncementRepositoryPort } from '../../ports/AnnouncementRepositoryPort';
import { CreateAnnouncementInput } from '../schemas/announcementSchemas';
export declare class CreateAnnouncement {
    private announcementRepo;
    constructor(announcementRepo: AnnouncementRepositoryPort);
    execute(input: CreateAnnouncementInput, authorId: string): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
        departmentId?: string | null;
        status: AnnouncementStatus;
        createdAt: string;
        publishedAt?: string | null;
    }>;
}
//# sourceMappingURL=createAnnouncement.d.ts.map