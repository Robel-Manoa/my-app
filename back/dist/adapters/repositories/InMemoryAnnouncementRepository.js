"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryAnnouncementRepository = void 0;
class InMemoryAnnouncementRepository {
    constructor() {
        this.items = new Map();
    }
    async save(announcement) {
        this.items.set(announcement.id, announcement);
    }
    async findById(id) {
        return this.items.get(id) ?? null;
    }
    async listByDepartment(departmentId) {
        const arr = Array.from(this.items.values());
        if (!departmentId)
            return arr;
        return arr.filter(a => a.toJSON().departmentId === departmentId);
    }
}
exports.InMemoryAnnouncementRepository = InMemoryAnnouncementRepository;
//# sourceMappingURL=InMemoryAnnouncementRepository.js.map