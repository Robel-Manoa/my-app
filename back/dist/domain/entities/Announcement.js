"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Announcement = void 0;
const AnnouncementStatus_1 = require("../value-objects/AnnouncementStatus");
class Announcement {
    constructor(props) {
        this.props = props;
    }
    get id() {
        return this.props.id;
    }
    get status() {
        return this.props.status;
    }
    publish(publishedAt) {
        if (this.props.status !== AnnouncementStatus_1.AnnouncementStatus.DRAFT) {
            throw new Error('Only draft announcements can be published');
        }
        this.props.status = AnnouncementStatus_1.AnnouncementStatus.PUBLISHED;
        this.props.publishedAt = publishedAt;
    }
    archive() {
        this.props.status = AnnouncementStatus_1.AnnouncementStatus.ARCHIVED;
    }
    toJSON() {
        return { ...this.props };
    }
}
exports.Announcement = Announcement;
//# sourceMappingURL=Announcement.js.map