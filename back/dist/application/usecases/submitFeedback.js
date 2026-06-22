"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedback = void 0;
const uuid_1 = require("uuid");
const Feedback_1 = require("../../domain/entities/Feedback");
const FeedbackStatus_1 = require("../../domain/value-objects/FeedbackStatus");
class SubmitFeedback {
    constructor(feedbackRepo) {
        this.feedbackRepo = feedbackRepo;
    }
    async execute(authorId, message, targetAnnouncementId) {
        const now = new Date().toISOString();
        const feedback = new Feedback_1.Feedback({
            id: (0, uuid_1.v4)(),
            authorId,
            message,
            targetAnnouncementId: targetAnnouncementId ?? null,
            status: FeedbackStatus_1.FeedbackStatus.SUBMITTED,
            createdAt: now,
            reviewedAt: null,
        });
        await this.feedbackRepo.save(feedback);
        return feedback.toJSON();
    }
}
exports.SubmitFeedback = SubmitFeedback;
//# sourceMappingURL=submitFeedback.js.map