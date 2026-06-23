"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackController = void 0;
const InMemoryFeedbackRepository_1 = require("../repositories/InMemoryFeedbackRepository");
const submitFeedback_1 = require("../../application/usecases/submitFeedback");
const feedbackRepo = new InMemoryFeedbackRepository_1.InMemoryFeedbackRepository();
const submitFeedback = new submitFeedback_1.SubmitFeedback(feedbackRepo);
exports.FeedbackController = {
    async submit(req, res, next) {
        try {
            const user = req.user;
            const { message, targetAnnouncementId } = req.body;
            const result = await submitFeedback.execute(user.id, message, targetAnnouncementId);
            res.status(201).json(result);
        }
        catch (err) {
            next(err);
        }
    },
    async listAll(req, res, next) {
        try {
            const all = await feedbackRepo.listAll();
            res.json(all.map(f => f.toJSON()));
        }
        catch (err) {
            next(err);
        }
    }
};
//# sourceMappingURL=feedbackController.js.map