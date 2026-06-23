import { Feedback } from '../../domain/entities/Feedback';
import { FeedbackRepositoryPort } from '../../ports/FeedbackRepositoryPort';
export declare class InMemoryFeedbackRepository implements FeedbackRepositoryPort {
    private items;
    save(feedback: Feedback): Promise<void>;
    findById(id: string): Promise<Feedback | null>;
    listAll(): Promise<Feedback[]>;
}
//# sourceMappingURL=InMemoryFeedbackRepository.d.ts.map