import { Request, Response, NextFunction } from 'express'
import { InMemoryFeedbackRepository } from '../repositories/InMemoryFeedbackRepository'
import { SubmitFeedback } from '../../application/usecases/submitFeedback'

const feedbackRepo = new InMemoryFeedbackRepository()
const submitFeedback = new SubmitFeedback(feedbackRepo)

export const FeedbackController = {
  async submit(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user
      const { message, targetAnnouncementId } = req.body
      const result = await submitFeedback.execute(user.id, message, targetAnnouncementId)
      res.status(201).json(result)
    } catch (err) {
      next(err)
    }
  },

  async listAll(req: Request, res: Response, next: NextFunction) {
    try {
      const all = await feedbackRepo.listAll()
      res.json(all.map(f => f.toJSON()))
    } catch (err) {
      next(err)
    }
  }
}
