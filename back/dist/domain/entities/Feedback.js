"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
const FeedbackStatus_1 = require("../value-objects/FeedbackStatus");
class Feedback {
    constructor(props) {
        this.props = props;
    }
    get id() {
        return this.props.id;
    }
    markReviewed(at) {
        this.props.status = FeedbackStatus_1.FeedbackStatus.REVIEWED;
        this.props.reviewedAt = at;
    }
    toJSON() {
        return { ...this.props };
    }
}
exports.Feedback = Feedback;
//# sourceMappingURL=Feedback.js.map