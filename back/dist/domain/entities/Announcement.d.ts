import { AnnouncementStatus } from '../value-objects/AnnouncementStatus';
export interface AnnouncementProps {
    id: string;
    title: string;
    content: string;
    authorId: string;
    departmentId?: string | null;
    status: AnnouncementStatus;
    createdAt: string;
    publishedAt?: string | null;
}
export declare class Announcement {
    private props;
    constructor(props: AnnouncementProps);
    get id(): string;
    get status(): AnnouncementStatus;
    publish(publishedAt: string): void;
    archive(): void;
    toJSON(): {
        id: string;
        title: string;
        content: string;
        authorId: string;
        departmentId?: string | null;
        status: AnnouncementStatus;
        createdAt: string;
        publishedAt?: string | null;
    };
}
//# sourceMappingURL=Announcement.d.ts.map