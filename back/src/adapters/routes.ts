import { Router } from 'express'
import { AnnouncementController } from './controllers/announcementController'
import { FeedbackController } from './controllers/feedbackController'
import { requireRole } from '../infrastructure/middleware/rbac'

const router = Router()

// Announcements
router.post('/announcements', requireRole('HR_ADMIN', 'DEPT_ADMIN'), AnnouncementController.create)
router.post('/announcements/:id/publish', requireRole('HR_ADMIN', 'DEPT_ADMIN'), AnnouncementController.publish)
router.get('/announcements', AnnouncementController.list)
router.get('/announcements/:id', AnnouncementController.getById)

// Feedback
router.post('/feedback', FeedbackController.submit)
router.get('/feedback', requireRole('HR_ADMIN', 'DEPT_ADMIN'), FeedbackController.listAll)

// Diagnostics
router.get('/me', (req, res) => {
  res.json({ user: (req as any).user || null })
})

export default router
