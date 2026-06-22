import { Feedback } from '../../domain/entities/Feedback'
import { FeedbackRepositoryPort } from '../../ports/FeedbackRepositoryPort'

export class InMemoryFeedbackRepository implements FeedbackRepositoryPort {
  private items: Map<string, Feedback> = new Map()

  async save(feedback: Feedback): Promise<void> {
    this.items.set(feedback.id, feedback)
  }

  async findById(id: string): Promise<Feedback | null> {
    return this.items.get(id) ?? null
  }

  async listAll(): Promise<Feedback[]> {
    return Array.from(this.items.values())
  }
}
