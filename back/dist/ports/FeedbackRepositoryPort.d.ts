import { Feedback } from '../domain/entities/Feedback';
export interface FeedbackRepositoryPort {
    save(feedback: Feedback): Promise<void>;
    findById(id: string): Promise<Feedback | null>;
    listAll(): Promise<Feedback[]>;
}
//# sourceMappingURL=FeedbackRepositoryPort.d.ts.map