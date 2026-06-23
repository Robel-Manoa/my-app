import { z } from 'zod'

export const createAnnouncementSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(1),
  departmentId: z.string().optional(),
})

export type CreateAnnouncementInput = z.infer<typeof createAnnouncementSchema>
