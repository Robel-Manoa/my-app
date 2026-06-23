import { AnnouncementRepositoryPort } from '../../ports/AnnouncementRepositoryPort';
export declare class PublishAnnouncement {
    private announcementRepo;
    constructor(announcementRepo: AnnouncementRepositoryPort);
    execute(id: string, actorId: string): Promise<{
        id: string;
        title: string;
        content: string;
        authorId: string;
        departmentId?: string | null;
        status: import("../../domain/value-objects/AnnouncementStatus").AnnouncementStatus;
        createdAt: string;
        publishedAt?: string | null;
    }>;
}
//# sourceMappingURL=publishAnnouncement.d.ts.map