import { FeedbackStatus } from '../../domain/value-objects/FeedbackStatus';
import { FeedbackRepositoryPort } from '../../ports/FeedbackRepositoryPort';
export declare class SubmitFeedback {
    private feedbackRepo;
    constructor(feedbackRepo: FeedbackRepositoryPort);
    execute(authorId: string, message: string, targetAnnouncementId?: string): Promise<{
        id: string;
        authorId: string;
        message: string;
        targetAnnouncementId?: string | null;
        status: FeedbackStatus;
        createdAt: string;
        reviewedAt?: string | null;
    }>;
}
//# sourceMappingURL=submitFeedback.d.ts.map