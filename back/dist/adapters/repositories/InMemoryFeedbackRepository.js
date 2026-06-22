"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryFeedbackRepository = void 0;
class InMemoryFeedbackRepository {
    constructor() {
        this.items = new Map();
    }
    async save(feedback) {
        this.items.set(feedback.id, feedback);
    }
    async findById(id) {
        return this.items.get(id) ?? null;
    }
    async listAll() {
        return Array.from(this.items.values());
    }
}
exports.InMemoryFeedbackRepository = InMemoryFeedbackRepository;
//# sourceMappingURL=InMemoryFeedbackRepository.js.map