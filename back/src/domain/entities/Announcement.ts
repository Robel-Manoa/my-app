import { AnnouncementStatus } from '../value-objects/AnnouncementStatus'

export interface AnnouncementProps {
  id: string
  title: string
  content: string
  authorId: string
  departmentId?: string | null
  status: AnnouncementStatus
  createdAt: string
  publishedAt?: string | null
}

export class Announcement {
  private props: AnnouncementProps

  constructor(props: AnnouncementProps) {
    this.props = props
  }

  get id() {
    return this.props.id
  }

  get status() {
    return this.props.status
  }

  publish(publishedAt: string) {
    if (this.props.status !== AnnouncementStatus.DRAFT) {
      throw new Error('Only draft announcements can be published')
    }
    this.props.status = AnnouncementStatus.PUBLISHED
    this.props.publishedAt = publishedAt
  }

  archive() {
    this.props.status = AnnouncementStatus.ARCHIVED
  }

  toJSON() {
    return { ...this.props }
  }
}
