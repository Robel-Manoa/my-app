import { Request, Response, NextFunction } from 'express'

// Simple mock authentication middleware.
// Provide header `x-user` as JSON string or `x-user-role` for quick role assignment.
export function authMock(req: Request, res: Response, next: NextFunction) {
  const rawUser = req.headers['x-user'] as string | undefined
  const rawRole = req.headers['x-user-role'] as string | undefined
  const role = rawRole?.toString().trim().toUpperCase() || 'EMPLOYEE'

  if (rawUser) {
    const text = rawUser.toString().trim()
    try {
      const user = JSON.parse(text)
      ;(req as any).user = {
        id: user.id || 'anonymous',
        role: user.role ? user.role.toString().trim().toUpperCase() : role,
        departmentId: user.departmentId || 'dept-1',
      }
    } catch {
      ;(req as any).user = {
        id: text || 'anonymous',
        role,
        departmentId: 'dept-1',
      }
    }
  } else {
    ;(req as any).user = {
      id: 'mock-user',
      role,
      departmentId: 'dept-1',
    }
  }

  next()
}
