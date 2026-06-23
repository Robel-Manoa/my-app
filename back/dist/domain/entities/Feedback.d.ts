import { FeedbackStatus } from '../value-objects/FeedbackStatus';
export interface FeedbackProps {
    id: string;
    authorId: string;
    message: string;
    targetAnnouncementId?: string | null;
    status: FeedbackStatus;
    createdAt: string;
    reviewedAt?: string | null;
}
export declare class Feedback {
    private props;
    constructor(props: FeedbackProps);
    get id(): string;
    markReviewed(at: string): void;
    toJSON(): {
        id: string;
        authorId: string;
        message: string;
        targetAnnouncementId?: string | null;
        status: FeedbackStatus;
        createdAt: string;
        reviewedAt?: string | null;
    };
}
//# sourceMappingURL=Feedback.d.ts.map